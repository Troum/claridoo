import Vue from 'vue';
import HttpService from "./services/http.service";
import {extend, localize, setInteractionMode} from 'vee-validate';
import {email, required,
    integer, between,
    regex, digits,
    min} from "vee-validate/dist/rules";
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
extend('minimum',
    (value, min_value) => {
        if (Number(value) < min_value) {
            return 'Vielen Dank!\n' +
                'Leider ist dein Jahresverbrauch zu niedrig um claridoo nutzen zu können. \n' +
                'Für weitere Informationen bzw. zur Erstellung eines individuellen Angebotes steht dir unser Kundenservice gerne per alpiq-energie@alpiq.com oder 030 4036 74010 zur Verfügung\n';
        }
        return true;
    }
);
extend('maximum',
    (value, max_value) => {
        if (Number(value) > max_value) {
            return 'Vielen Dank!\n' +
                'Der von dir gewünschte Tarif ist für den von dir angegebenen Stromverbrauch nicht verfügbar. Für weitere Informationen bzw. zur Erstellung eines individuellen Angebotes steht dir unser Kundenservice gerne per alpiq-energie@alpiq.com oder 030 4036 74010 zur Verfügung.\n'

        }
        return true;
    }
);

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
