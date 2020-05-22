<template lang="pug">
    b-col.claridoo_start( cols="12" xl="4" )
        p.h1.claridoo_title Smart, Fair und Günstig
        p.h3.claridoo_subtitle Alles in nur einem Tarif
        b-overlay.overlay-rounded( :show="overlay.main" rounded="sm")
            validation-observer( ref="observer" v-slot="{ passes }" )
                b-form( @submit.prevent="passes(submit)" )
                    b-row.m-0.p-0
                        b-col.p-0.mx-xl-auto( cols="12" xl="11" )
                            validation-provider( name="Postleitzahl" rules="required|min:5|notFound" v-slot="{ errors }")
                                b-form-group.mt-2.mb-2.mt-xl-1.mb-xl-1.claridoo_city-container
                                    b-overlay( opacity="0" :show="overlay.postcode" rounded="sm")
                                        b-form-input.claridoo_form-input#postcode(
                                            @input="search"
                                            v-model="postcode"
                                            @keypress="integer"
                                            type="text"
                                            autocomplete="off"
                                            name="postcode"
                                            placeholder="Postleitzahl und Ort" )
                                        b-list-group.mt-2( v-if="city" )
                                            b-list-group-item.autocomplete-result.pl-5( v-for="item in city" :key="item" @click="handleCity(item)" ) {{ item }}
                                    span.claridoo_city( v-if="postcode.length >= 5" ) {{ selectedCity }}
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3.city
                                            small.font-weight-bold {{ errors[0] }}
                            b-form-group.mt-3.my-xl-3
                                .claridoo_persons-title Wieviele personen wohnen im haushalt?
                            validation-provider( name="Personen" rules="required|previous:@Postleitzahl" v-slot="{ errors }")
                                b-form-radio-group#persons.claridoo_persons(
                                    @input="choose"
                                    v-model="selected"
                                    :options="$store.getters.persons"
                                    name="persons-options")
                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                    .text-danger.pl-3
                                        small.font-weight-bold {{ errors[0] }}
                            validation-provider( name="Jahresverbrauch" rules="required|min_value:500|max_value:10000" v-slot="{ errors }")
                                b-form-group.mt-2.mb-2.mt-xl-1.mb-xl-1
                                    b-form-input#kilowats.claridoo_form-input( placeholder="Jahresverbrauch kWh"
                                        autocomplete="off"
                                        v-model="kw")
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                            b-form-group.mt-4.mb-2.mt-xl-3.mb-xl-3.text-center
                                b-button.claridoo_button(
                                    :class="!isMobile ? 'w-75' : 'w-100'"
                                    type="submit" @click="submit" ) Tarif Berechnen
                            b-form-group#tarif-button.mt-2.mb-2.mt-xl-1.mb-xl-1.text-center( v-if="entries" )
                                p.claridoo_gradient-text.price.font-weight-bold
                                    i.fas.fa-gradient.fa-euro-sign
                                    | &nbsp;{{ month }}&nbsp;
                                p.brackets.claridoo_gradient-text
                                    i.fas.fa-gradient.fa-euro-sign
                                    | &nbsp;{{ year }} / Jahr
                            b-form-group.mt-3.mb-4( v-if="entries" )
                                b-tabs#home-tabs.claridoo_tabs-container
                                    b-tab( title="Dein Claridoo" title-item-class="font-weight-bold" )
                                        b-row.m-0.pt-3.pb-3.pl-0.pr-0
                                            b-col.m-0.p-0( cols="12" )
                                                b-row.m-0.p-0
                                                    b-col.m-0.text-left.pl-0( cols="5" xl="4" )
                                                        p.text-violet.font-weight-bold Monatpreis
                                                    b-col.m-0.text-right.pr-0( cols="7" xl="8" )
                                                        p.text-violet.font-weight-bold
                                                            font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                            | &nbsp;{{ month }}&nbsp;
                                                            span.brackets
                                                                font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                                | &nbsp;{{ year }} / Jahr
                                            b-col.m-0.p-0( cols="12" )
                                                b-card( no-body )
                                                    b-card-header(
                                                        header-tag="header"
                                                        role="tab" )
                                                        div
                                                            span.claridoo_collapse-title 100% Ökostrom aus Wasserkraft
                                                            button.claridoo_collapse-open-close(
                                                                v-b-toggle.collapse-one
                                                                type="button" )
                                                                font-awesome-icon.when-opened( :icon="['fas', 'minus']" )
                                                                font-awesome-icon.when-closed( :icon="['fas', 'plus']" )
                                                    b-collapse#collapse-one(
                                                        accordion="collapse-one-accordion"
                                                        role="tabpanel")
                                                        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor doloribus ducimus eaque esse eveniet ex exercitationem facilis nisi saepe! Consequatur culpa doloribus earum iusto obcaecati odit repudiandae sapiente ullam?
                                            b-col.m-0.p-0( cols="12" )
                                                b-card( no-body )
                                                    b-card-header(
                                                        header-tag="header"
                                                        role="tab" )
                                                        div
                                                            span.claridoo_collapse-title 24 Monate Preisgarantie
                                                            button.claridoo_collapse-open-close(
                                                                v-b-toggle.collapse-two
                                                                type="button" )
                                                                font-awesome-icon.when-opened( :icon="['fas', 'minus']" )
                                                                font-awesome-icon.when-closed( :icon="['fas', 'plus']" )
                                                    b-collapse#collapse-two(
                                                        accordion="collapse-one-accordion"
                                                        role="tabpanel")
                                                        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor doloribus ducimus eaque esse eveniet ex exercitationem facilis nisi saepe! Consequatur culpa doloribus earum iusto obcaecati odit repudiandae sapiente ullam?
                                            b-col.m-0.p-0( cols="12" )
                                                b-card( no-body )
                                                    b-card-header(
                                                        header-tag="header"
                                                        role="tab" )
                                                        div
                                                            span.claridoo_collapse-title Rundum Kundenservice
                                                            button.claridoo_collapse-open-close(
                                                                v-b-toggle.collapse-three
                                                                type="button" )
                                                                font-awesome-icon.when-opened( :icon="['fas', 'minus']" )
                                                                font-awesome-icon.when-closed( :icon="['fas', 'plus']" )
                                                    b-collapse#collapse-three(
                                                        accordion="collapse-one-accordion"
                                                        role="tabpanel")
                                                        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor doloribus ducimus eaque esse eveniet ex exercitationem facilis nisi saepe! Consequatur culpa doloribus earum iusto obcaecati odit repudiandae sapiente ullam?
                                            b-col.m-0.p-0( cols="12" )
                                                b-card( no-body )
                                                    b-card-header(
                                                        header-tag="header"
                                                        role="tab" )
                                                        div
                                                            span.claridoo_collapse-title Intelligenter Stromzähler
                                                                br
                                                                | Inkl. Installation
                                                            button.claridoo_collapse-open-close(
                                                                v-b-toggle.collapse-four
                                                                type="button" )
                                                                font-awesome-icon.when-opened( :icon="['fas', 'minus']" )
                                                                font-awesome-icon.when-closed( :icon="['fas', 'plus']" )
                                                    b-collapse#collapse-four(
                                                        accordion="collapse-one-accordion"
                                                        role="tabpanel")
                                                        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor doloribus ducimus eaque esse eveniet ex exercitationem facilis nisi saepe! Consequatur culpa doloribus earum iusto obcaecati odit repudiandae sapiente ullam?
                                            b-col.m-0.p-0( cols="12" )
                                                b-card.border-bottom( no-body )
                                                    b-card-header(
                                                        header-tag="header"
                                                        role="tab" )
                                                        div
                                                            span.claridoo_collapse-title Preis inkl. Förderung
                                                            button.claridoo_collapse-open-close(
                                                                v-b-toggle.collapse-five
                                                                type="button" )
                                                                font-awesome-icon.when-opened( :icon="['fas', 'minus']" )
                                                                font-awesome-icon.when-closed( :icon="['fas', 'plus']" )
                                                    b-collapse#collapse-five(
                                                        accordion="collapse-one-accordion"
                                                        role="tabpanel")
                                                        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor doloribus ducimus eaque esse eveniet ex exercitationem facilis nisi saepe! Consequatur culpa doloribus earum iusto obcaecati odit repudiandae sapiente ullam?
                                    b-tab( title="Tarifdetails" title-item-class="font-weight-bold")
                                        b-row.m-0.pt-3.pb-3.pl-0.pr-0
                                            b-col.m-0.p-0.border-bottom( cols="12" )
                                                b-row.m-0.p-0
                                                    b-col.m-0.text-left.pl-0( cols="5" xl="4")
                                                        p.text-violet.font-weight-bold Monatpreis
                                                    b-col.m-0.text-right.pr-0( cols="7" xl="8")
                                                        p.text-darkgray.font-weight-bold
                                                            font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                            | &nbsp;{{ month }}&nbsp;
                                                            span.brackets
                                                                font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                                | &nbsp;{{ year }} / Jahr
                                            b-col.m-0.pt-2.pb-2.pr-0.pl-0( cols="12" )
                                                b-row.m-0.p-0
                                                    b-col.m-0.text-left.pl-0( cols="5" xl="4" )
                                                        p.text-navy.font-weight-bold Grundpreis
                                                    b-col.m-0.text-right.pr-0( cols="7" xl="8" )
                                                        p.text-darkgray.font-weight-bold
                                                            font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                            | &nbsp;{{ basePrice }}&nbsp;
                                                            span.brackets
                                                                font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                                | &nbsp;{{ $filtersService.currencyFormat($filtersService.roundNumber($store.getters.info.gp_brutto)) }} / Jahr
                                            b-col.m-0.pt-2.pb-2.pr-0.pl-0( cols="12" )
                                                b-row.m-0.p-0
                                                    b-col.m-0.text-left.pl-0( cols="7" xl="3" )
                                                        p.text-navy.font-weight-bold Arbeitspreis
                                                    b-col.m-0.text-right.pr-0( cols="5" xl="9" )
                                                        p.text-darkgray.font-weight-bold {{ $store.getters.info.ap_brutto ? $filtersService.currencyFormat($filtersService.roundNumber($store.getters.info.ap_brutto)) : '' }} cent/kWh&nbsp;
                                                            span.brackets
                                                                font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                                | &nbsp;{{ workPrice }} / Jahr
                                            b-col.m-0.pt-2.pb-2.pr-0.pl-0( cols="12" )
                                                b-row.m-0.p-0
                                                    b-col.m-0.text-left.pl-0( cols="6" )
                                                        p.text-navy.font-weight-bold Neukundenbonus*
                                                    b-col.m-0.text-right.pr-0( cols="6" )
                                                        p.text-darkgray.font-weight-bold
                                                            font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                            | &nbsp;{{ $store.getters.info.neukundenbonus_brutto ? $filtersService.currencyFormat($filtersService.roundNumber($store.getters.info.neukundenbonus_brutto)) : '' }}
                                            b-col.m-0.pt-2.pb-2.pr-0.pl-0( cols="12" )
                                                b-row.m-0.p-0
                                                    b-col.m-0.text-left.pl-0( cols="6" )
                                                        p.text-navy.font-weight-bold Einsparförderung**
                                                    b-col.m-0.text-right.pr-0( cols="6" )
                                                        p.text-darkgray.font-weight-bold
                                                            font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                            | &nbsp;60,00
                                            b-col.m-0.pt-2.pb-2.pr-0.pl-0( cols="12" )
                                                b-row.m-0.p-0
                                                    b-col.m-0.text-left.pl-0( cols="6" )
                                                        p.text-navy.font-weight-bold Preisgarantie*** / Kündigungsfrist
                                                    b-col.m-0.text-right.pr-0( cols="6" )
                                                        p.text-darkgray.font-weight-bold {{ $store.getters.info.pricegaranty }}
                                            b-col.m-0.pt-2.pb-2.pr-0.pl-0( cols="12" )
                                                p.mb-0.text-justify *&nbsp;
                                                    span.text-lightgreen Dein Geschenk im ersten Jahr!
                                                    | &nbsp;Wird Dir nach den ersten 3 Monaten auf Dein Konto ausgezahlt. Kann mit x verrechnet werden.
                                                p.mb-0.text-justify **&nbsp;
                                                    span.text-lightgreen Förderung für Deinen Forschungsbeitrag!
                                                    | &nbsp;Ist bereits im Tarifpreis enthalten. Bei Nichtteilnahme wird dir nach Installation eine Kompensationszahlung in Höhe von € 60,00 in Rechnung gestellt.
                                                p.mb-0.text-justify *** lorem ipsum sum sum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            b-form-group.mt-2.mb-2.mt-xl-1.mb-xl-1.text-center( v-if="entries" )
                                b-button.claridoo_button(
                                    :class="!isMobile ? 'w-75' : 'w-100'"
                                    type="button" @click="toRegister") Jetzt Wechseln
                            b-form-group.my-2.my-xl-4( v-if="entries" )
                                a.document-link( href="#" ) Allgemeine Gaschäftsbedingungen (149 KB)
                                a.document-link( href="#" ) Stromzusammensetzung (522 KB)
</template>
<script>
    import IMask from "imask"
    export default {
        props: {
            isMobile: null
        },
        mounted() {
            this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
                if(isJustShown) {
                    const parent = document.getElementById(collapseId).closest('.card');
                    const title = parent.querySelector('span.claridoo_collapse-title');
                    title.classList.add('claridoo_gradient-text');
                } else {
                    const parent = document.getElementById(collapseId).closest('.card');
                    const title = parent.querySelector('span.claridoo_collapse-title');
                    title.classList.remove('claridoo_gradient-text');
                }
            });
            IMask(document.getElementById('kilowats'), {mask: '00000'})
        },
        data() {

            return {
                postcode: '',
                city: [],
                selectedCity: '',
                response: {},
                kw: null,
                selected: '',
                messages: {
                    postcode: null,
                    notFound: null,
                    error: null,
                    personsNotFound: null,
                    personsError: null
                },
                overlay: {
                    postcode: false,
                    main: false
                },
                number: null,
                form: {}
            }
        },
        methods: {
            choose() {
                this.kw = this.selected;
                this.$store.getters.persons.filter(item => {
                    item.value === this.selected ? this.number = item.text : null;
                });
                document.querySelectorAll('.custom-control-input').forEach(item => {
                    item.closest('.custom-radio').querySelector('.custom-control-label').querySelector('span').classList.remove('font-weight-bold');
                    item.closest('.custom-radio').querySelector('.custom-control-label').querySelector('span').classList.remove('text-dark');
                });
                const checked = document.querySelector('.custom-control-input:checked').closest('.custom-radio').querySelector('.custom-control-label').querySelector('span');
                checked.classList.add('font-weight-bold');
                checked.classList.add('text-dark');

            },
            search() {
                this.overlay.postcode = true;
                this.selectedCity ? this.selectedCity = '' : null;
                this.$httpService.get(process.env.NODE_ENV === 'production' ? `/plz/prod/?PLZ=${this.postcode}` : `api/city/${this.postcode}`)
                    .then(response => {
                        this.city = process.env.NODE_ENV === 'production' ? response.data : response.data.city;
                        this.$store.commit('postcode', this.postcode);
                    })
                    .catch(error => {
                        this.messages.postcode = error.response.data.error;
                    })
                    .finally(() => this.overlay.postcode = false)
            },
            submit() {
                this.overlay.main = true;
                this.$httpService.get(process.env.NODE_ENV === 'production' ? `/pricing/prod/?PLZ=${this.postcode}&Quantity=${parseFloat(this.kw)}` : `api/pricing/${this.postcode}/${parseFloat(this.kw)}`)
                    .then(response => {
                        this.$store.commit('info', process.env.NODE_ENV === 'production' ? response.data : response.data.info);
                        this.form = {
                            zip: this.postcode,
                            city: this.selectedCity,
                            kWh: this.kw.toString(10),
                            basePrice: this.$store.getters.basePrice.toString(10),
                            consumptionPrice: this.$store.getters.workPrice.toString(10),
                            bonus: this.$store.getters.info.neukundenbonus_brutto.toString(10),
                            step: "1"
                        };
                        if (this.number) {
                            this.form.nubmersOfPeople = this.number;
                        }
                        this.$store.commit('user', this.form);
                    })
                    .catch(error => {
                        // eslint-disable-next-line no-prototype-builtins
                        if (error.hasOwnProperty('response')) {
                            switch(error.response.status) {
                                case 400:
                                    this.messages.error = error.response.data.error;
                                    return;
                                case 404:
                                    this.messages.notFound = error.response.data.error;
                                    return;
                            }
                        }
                    })
                    .finally(() => {
                        this.overlay.main = false;
                        this.$scrollTo('#tarif-button');
                    })
            },
            toRegister(){
                this.overlay.main = true;
                this.$httpService.post(process.env.NODE_ENV === 'production' ? `/signup/prod/` : `api/step-one`, this.$store.getters.user)
                    .then(response => {
                        let user = this.$store.getters.user;
                        user = {...user, uuid: process.env.NODE_ENV === 'production' ? response.data.uuid : response.data.session.uuid};
                        this.$store.commit('user', user);
                        this.$router.push({name: 'register'});
                    })
                    .catch(error => {
                        // eslint-disable-next-line no-prototype-builtins
                        if (error.hasOwnProperty('response')) {
                            switch(error.response.status) {
                                case 502:
                                    this.messages.error = error.response.data.error;
                                    return;
                                case 404:
                                    this.messages.notFound = error.response.data.error;
                                    return;
                            }
                        }
                    })
                    .finally(() => this.overlay.main = false)
            },
            handleCity(city) {
                this.selectedCity = city;
                this.city = [];
            },
            integer(event) {
                event = (event) ? event : window.event;
                let charCode = (event.which) ? event.which : event.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    event.preventDefault();
                } else {
                    return true;
                }
            }
        },
        computed: {
            entries() {
                return this.$store.getters.info ? Object.entries(this.$store.getters.info).length > 0 : false;
            },
            month() {
                const x = parseFloat(this.$store.getters.info.ap_brutto) * parseFloat(this.$store.getters.info.quantity);
                const y = x / 100;
                const z = y + parseFloat(this.$store.getters.info.gp_brutto);
                const result = z / 12;
                this.$store.commit('month', this.$filtersService.currencyFormat(this.$filtersService.roundNumber(result)));
                return this.$filtersService.currencyFormat(this.$filtersService.roundNumber(result));
            },
            year() {
                const x = parseFloat(this.$store.getters.info.ap_brutto) * parseFloat(this.$store.getters.info.quantity);
                const y = x / 100;
                const z = y + parseFloat(this.$store.getters.info.gp_brutto);
                const result = z - parseFloat(this.$store.getters.info.neukundenbonus_brutto) - parseFloat(this.$store.getters.info.sofortbonus_brutto);
                this.$store.commit('year', this.$filtersService.currencyFormat(this.$filtersService.roundNumber(result)));
                return this.$filtersService.currencyFormat(this.$filtersService.roundNumber(result));
            },
            basePrice() {
                const result = parseFloat(this.$store.getters.info.gp_brutto) / 12;
                this.$store.commit('basePrice', this.$filtersService.roundNumber(result));
                return this.$filtersService.currencyFormat(this.$filtersService.roundNumber(result));
            },
            workPrice() {
                const x = parseFloat(this.$store.getters.info.ap_brutto) * parseFloat(this.$store.getters.info.quantity);
                const result = x / 100;
                this.$store.commit('workPrice', this.$filtersService.roundNumber(result));
                return this.$filtersService.currencyFormat(this.$filtersService.roundNumber(result));
            }
        }
    }
</script>
