import Vue from 'vue';
import HttpService from "./services/http.service";
import {extend, localize, setInteractionMode} from 'vee-validate';
import {email, required,
    integer, between,
    regex, digits,
    min,
    min_value, max_value} from "vee-validate/dist/rules";
import de from 'vee-validate/dist/locale/de';
import store from "./store";

Vue.use(HttpService);

localize('de', de);

setInteractionMode('eager');

extend('required', required);
extend('email', email);
extend('integer', integer);
extend('digits', digits);
extend('between', between);
extend('regex', regex);
extend('min', min);
extend('min_value', min_value);
extend('max_value', max_value);

extend('previous', {
    params: ['target'],
    validate(value, {target}) {
        return !!target;
    },
    message: 'Bevor Sie die Menge oder die Anzahl der Personen eingeben können, müssen Sie die Postleitzahl eingeben'
});

extend('germanyPhone', (value) => {
    return Vue.prototype.$httpService.get(process.env.NODE_ENV === 'production' ? `/mobile/prod/?mobile=${encodeURIComponent(value)}` : `api/validate-phone/${encodeURI(value)}`)
        .then(() => {
            return true
        })
        .catch(error => {
            return error.response.data.message
        })

} );
extend('iban', (value) => {
    return Vue.prototype.$httpService.get(process.env.NODE_ENV === 'production' ? `/iban/prod/?IBAN=${value}` : `api/validate-iban/${encodeURI(value)}`)
        .then((response) => {
            store.commit('iban', response.data.info);
            return true
        })
        .catch(error => {
            return error.response.data.message
        })

} );

extend('notFound', (value => {
return Vue.prototype.$httpService.get(process.env.NODE_ENV === 'production' ? `/plz/prod/?PLZ=${value}` : `api/city/${value}`)
        .then(() => {
            return true;
        })
        .catch(() => {
            return 'Stadt mit dieser Postleitzahl wurde nicht gefunden';
        })
}))
