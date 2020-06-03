<template lang="pug">
    b-col.claridoo_register.min-vh-100.bg-tariff( cols="12" )
        b-row.m-0.p-0.bg-tariff( v-if="!isMobile" )
            b-col.mx-auto.p-0( lg="8" xl="8" )
                b-row.m-0.p-0
                    b-col.m-0.p-0( lg="7" xl="7" )
                        b-row.m-0.pt-3.pb-3.pl-0.pr-0
                            b-col.m-0.p-0( cols="12" )
                                p.mb-0.claridoo_tariff-title Dein claridoo Smart Strom Tarif
                                p.mb-5.claridoo_tariff-subtitle {{ $store.getters.info.tarif }}
                            b-col.m-0.p-0.border-bottom( cols="12" )
                                b-row.m-0
                                    b-col.m-0.text-left.p-0( cols="6" )
                                        p.text-violet.font-weight-bold Monatspreis
                                    b-col.m-0.text-right.p-0( cols="6" )
                                        p.text-darkgray.font-weight-bold
                                            font-awesome-icon( :icon="['fas', 'euro-sign']" class="text-violet")
                                            span.text-violet &nbsp;{{ $store.getters.month }}&nbsp;
                                            span.brackets
                                                font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                | &nbsp;{{ $store.getters.year }} / Jahr
                            b-col.m-0.p-0( cols="12" )
                                b-row.m-0.p-0
                                    b-col.m-0.text-left.p-0.pt-3( cols="6" )
                                        p.text-navy.font-weight-bold Grundpreis
                                    b-col.m-0.text-right.p-0.pt-3( cols="6" )
                                        p.text-darkgray.font-weight-bold
                                            font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                            | &nbsp;{{ $store.getters.user.basePrice }}&nbsp;
                                            span.brackets
                                                font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                | &nbsp;{{ $filtersService.currencyFormat($filtersService.roundNumber($store.getters.info.gp_brutto)) }} / Jahr
                            b-col.m-0.p-0( cols="12" )
                                b-row.m-0.p-0
                                    b-col.m-0.text-left.p-0( cols="4" )
                                        p.text-navy.font-weight-bold Arbeitspreis
                                    b-col.m-0.text-right.p-0( cols="8" )
                                        p.text-darkgray.font-weight-bold {{ $store.getters.info.ap_brutto ? $filtersService.currencyFormat($filtersService.roundNumber($store.getters.info.ap_brutto)) : '' }} cent/kWh&nbsp;
                                            span.brackets
                                                font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                                | &nbsp;{{ $filtersService.currencyFormat($filtersService.roundNumber($store.getters.workPrice)) }} / Jahr
                            b-col.m-0.p-0( cols="12" )
                                b-row.m-0.p-0
                                    b-col.m-0.text-left.p-0( cols="6" )
                                        p.text-navy.font-weight-bold Neukundenbonus
                                    b-col.m-0.text-right.p-0( cols="6" )
                                        p.text-darkgray.font-weight-bold
                                            font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                            | &nbsp;{{ $store.getters.info.neukundenbonus_brutto ? $filtersService.currencyFormat($filtersService.roundNumber($store.getters.info.neukundenbonus_brutto)) : '' }}
                            b-col.m-0.p-0( cols="12" )
                                b-row.m-0.p-0
                                    b-col.m-0.text-left.p-0( cols="6" )
                                        p.text-navy.font-weight-bold Einsparförderung
                                    b-col.m-0.text-right.p-0( cols="6" )
                                        p.text-darkgray.font-weight-bold
                                            font-awesome-icon( :icon="['fas', 'euro-sign']" )
                                            | &nbsp;60,00
                            b-col.m-0.p-0( cols="12" )
                                b-row.m-0.p-0
                                    b-col.m-0.text-left.p-0( cols="8" )
                                        p.text-navy.font-weight-bold Preisgarantie / Mindestvertragslaufzeit
                                    b-col.m-0.text-right.p-0( cols="4" )
                                        p.text-darkgray.font-weight-bold {{ $store.getters.info.pricegaranty }}
                    b-col.d-flex.justify-content-center.align-items-center.m-0.p-0( lg="5" xl="5" )
                        img.img-fluid( src="../assets/tarif.svg" alt="Claridoo Tarif Logo" )
        b-row.m-0.p-0.bg-tariff
            b-col#register.mx-auto.p-0( cols="12" v-if="!isMobile")
                b-card( no-body :class="[(opened.one ? 'bg-white' : 'bg-tariff'),(checkForm(formCollapseOne) && !opened.one  ? 'bg-white filled' : '')]" )
                    b-card-header.w-67.mx-auto(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 1. Persönliche Daten
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-one
                                type="button" )
                                font-awesome-icon.when-closed( v-if="checkForm(formCollapseOne)" :icon="['fas', 'pencil-alt']" )
                    b-collapse.w-67.mx-auto#personal-one(
                        accordion="personal-accordion"
                        visible
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes, valid }" )
                            b-form.my-3
                                .my-2.claridoo_personal-data
                                    .claridoo_personal-data-item
                                        validation-provider( rules="required" name="Vornamen" v-slot="{ errors }")
                                            b-form-group( label-for="name" label="Vornamen*" )
                                                b-form-input.claridoo_form-input#name( type="text" autocomplete="off"
                                                    v-model="formCollapseOne.name"
                                                    placeholder="Erika" )
                                            transition(  enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                    .claridoo_personal-data-item
                                        validation-provider( rules="required" name="Nachnamen" v-slot="{ errors }")
                                            b-form-group( label-for="surname" label="Nachnamen*" )
                                                b-form-input.claridoo_form-input#surname( type="text" autocomplete="off"
                                                    v-model="formCollapseOne.surname"
                                                    placeholder="Mustermann")
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                    .claridoo_personal-data-item
                                        validation-provider( rules="required" name="Anrede" v-slot="{ errors }")
                                            b-form-group( label="Anrede*" )
                                                b-row.m-0.p-0.w-100
                                                    b-col.m-0.p-0( cols="12" )
                                                        b-form-group
                                                            b-row.m-0.p-0#sex
                                                                b-col.p-0( cols="6" )
                                                                    b-form-radio.p-0.pr-1.frau( v-model="formCollapseOne.sex" name="sex" value="Female")
                                                                b-col.p-0( cols="6" )
                                                                    b-form-radio.p-0.pl-1.herr( v-model="formCollapseOne.sex" name="sex" value="Male")
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}

                                    .claridoo_personal-data-item
                                        b-form-group( label="Geburtsdatum*" )
                                            b-row.m-0.p-0.w-100.d-flex.justify-content-between
                                                b-col.pl-1.pr-1( cols="4" )
                                                    validation-provider( rules="required|integer|between:1,31" name="DD" v-slot="{ errors }")
                                                        b-form-input.claridoo_form-input.w-100.text-center#day( type="text" autocomplete="off"
                                                            v-model="formCollapseOne.day"
                                                            placeholder="DD")
                                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                            .text-danger.pl-3
                                                                small.font-weight-bold {{ errors[0] }}
                                                b-col.pl-1.pr-1( cols="4" )
                                                    validation-provider( rules="required|integer|between:1,12" name="MM" v-slot="{ errors }")
                                                        b-form-input.claridoo_form-input.w-100.text-center#month( type="text" autocomplete="off"
                                                            v-model="formCollapseOne.month"
                                                            placeholder="MM")
                                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                            .text-danger.pl-3
                                                                small.font-weight-bold {{ errors[0] }}
                                                b-col.pl-1.pr-1( cols="4" )
                                                    validation-provider( rules="required|integer|between:1900,2020" name="YYYY" v-slot="{ errors }")
                                                        b-form-input.claridoo_form-input.w-100.text-center#year( type="text" autocomplete="off"
                                                            v-model="formCollapseOne.year"
                                                            placeholder="YYYY")
                                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                            .text-danger.pl-3
                                                                small.font-weight-bold {{ errors[0] }}

                                    .claridoo_personal-data-item
                                        validation-provider( rules="required|email" name="Email" v-slot="{ errors }")
                                            b-form-group( label="Email*" )
                                                b-input-group
                                                    b-form-input.claridoo_form-input.border-radius-right( type="email" placeholder="Email Adresse" v-model="formCollapseOne.email" autocomplete="off" )
                                                    b-input-group-append.ml-2
                                                        img#email-info.img-fluid( src="../assets/info.svg" alt="Claridoo Email Info")
                                                        popover-component(
                                                            :title="'Email'"
                                                            :content="'Wir nutzen Deine E-Mail Adresse um dir wichtige Dokumente zu deiner Claridoo Smart Strom Bestellung zu senden, z.B. die Vertragsunterlagen.'"
                                                            :target="'email-info'"
                                                            :placement="'bottomright'"
                                                        )
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                    .claridoo_personal-data-item
                                        validation-provider( rules="required|germanyPhone" name="Telefonnummer" v-slot="{ errors }")
                                            b-form-group( label="Telefonnummer*" )
                                                b-input-group
                                                    input-mask#phone.claridoo_form-input.pl-3.w-90(
                                                        type="text" v-model="formCollapseOne.phone"
                                                        :format-chars="formatChars"
                                                        maskChar=""
                                                        mask="+49 0000 0000000"
                                                        placeholder="+49 1577 0000000" autocomplete="off")
                                                    b-input-group-append.ml-2
                                                        img#telefonnummer-info.img-fluid( src="../assets/info.svg" alt="Claridoo Telefonnummer Info")
                                                        popover-component(
                                                            :title="'Telefonnummer'"
                                                            :content="'Wir nutzen Deine Handynummer nur um deine claridoo Smart Strom Bestellung abzuwickeln, z.B. um mit dir den Termin für die Installation des intelligenten Zählers zu vereinbaren.'"
                                                            :target="'telefonnummer-info'"
                                                            :placement="'bottomright'"
                                                        )
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                b-form-group.my-4
                                    div.d-inline-flex.font-weight-light
                                        b-form-checkbox.claridoo_checkbox-input( @change="formCollapseOne.emailconsent = !formCollapseOne.emailconsent" )
                                        span.ml-2 Ich bin damit einverstanden, dass claridoo mich über Neuigkeiten und exklusive Angebote per E-Mail informiert. Du kannst dich jederzeit wieder vom Newsletter abmelden. Weitere Informationen findest du in unserer Datenschutzerklärung.
                                b-form-group.my-5.text-left
                                    b-button.claridoo_button.mb-3.w-35(
                                        :disabled="!checkForm(formCollapseOne) && !checkPhone() || !valid"
                                        v-b-toggle.personal-one.personal-two
                                        @click="stepOne"
                                        type="button" ) Weiter
                b-card( no-body :class="[(opened.two ? 'bg-white' : 'bg-tariff'),(checkForm(formCollapseTwo) && !opened.two  ? 'bg-white filled' : '')]" )
                    b-card-header.w-67.mx-auto(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 2. Lieferadresse
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-two
                                type="button" )
                                font-awesome-icon.when-closed( v-if="checkForm(formCollapseTwo)" :icon="['fas', 'pencil-alt']" )
                    b-collapse.w-67.mx-auto#personal-two(
                        accordion="personal-accordion"
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes, valid }" )
                            b-form.my-3
                                b-row.m-0.p-0
                                    b-col.pl-0( xl="5" )
                                        validation-provider( rules="required" name="Postleitzahl" v-slot="{ errors }")
                                            b-form-group.my-2( label-for="postcode" label="Postleitzahl*" )
                                                b-form-input.claridoo_form-input#postcode( type="text" autocomplete="off"
                                                    v-model="formCollapseTwo.postcode"
                                                    disabled)
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                        validation-provider( rules="required" name="Strasse" v-slot="{ errors }")
                                            b-form-group.my-2( label-for="street" label="Strasse*" )
                                                b-form-input.claridoo_form-input#street( type="text" autocomplete="off"
                                                    v-model="formCollapseTwo.street"
                                                    placeholder="Strasse")
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                    b-col( xl="5" )
                                        validation-provider( rules="required" name="Stadt" v-slot="{ errors }")
                                            b-form-group.my-2( label-for="city" label="Stadt*" )
                                                b-form-input.claridoo_form-input#city( type="text" autocomplete="off"
                                                    v-model="formCollapseTwo.city"
                                                    disabled)
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                        validation-provider( rules="required" name="Hausnummer" v-slot="{ errors }")
                                            b-form-group.my-2( label-for="building" label="Hausnummer*" )
                                                b-form-input.claridoo_form-input#building( type="text" autocomplete="off"
                                                    v-model="formCollapseTwo.building"
                                                    placeholder="Hausnummer")
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                b-form-group.my-4
                                    div.d-inline-flex.align-items-center.font-weight-light
                                        b-form-checkbox.claridoo_checkbox-input( @change="alternate = !alternate" )
                                        span.ml-2.pt-2.text-violet.font-weight-bold Alternative Rechnungsadresse
                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                    b-row.m-0.p-0( v-if="alternate" )
                                        b-col.pl-0( xl="5" )
                                            validation-provider( rules="required" name="Postleitzahl" v-slot="{ errors }")
                                                b-form-group.my-2.position-relative( label-for="name" label="Postleitzahl*" )
                                                    b-form-input.claridoo_form-input#altPostcode( type="text" autocomplete="off"
                                                        @input="search()"
                                                        v-model="formCollapseTwoAlternate.altPostcode"
                                                        placeholder="Postleitzahl")
                                                    b-list-group.mt-2.position-absolute( v-if="altCities.length > 0" style="top: calc(52px + 2rem); width: 100%" )
                                                        b-list-group-item.autocomplete-result.pl-5( v-for="item in altCities" :key="item" @click="handleCity(item)" ) {{ item }}
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3
                                                        small.font-weight-bold {{ errors[0] }}
                                            validation-provider( rules="required" name="Strasse" v-slot="{ errors }")
                                                b-form-group.my-2( label-for="altStreet" label="Strasse*" )
                                                    b-form-input.claridoo_form-input#altStreet( type="text" autocomplete="off"
                                                        v-model="formCollapseTwoAlternate.altStreet"
                                                        placeholder="Strasse" )
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3
                                                        small.font-weight-bold {{ errors[0] }}
                                        b-col( xl="5" )
                                            validation-provider( rules="required" name="Stadt" v-slot="{ errors }")
                                                b-form-group.my-2( label-for="altStreet" label="Stadt*" )
                                                    b-form-input.claridoo_form-input#altStreet( type="text" autocomplete="off"
                                                        v-model="formCollapseTwoAlternate.altCity"
                                                        placeholder="Stadt" )
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3
                                                        small.font-weight-bold {{ errors[0] }}
                                            validation-provider( rules="required" name="Hausnummer" v-slot="{ errors }")
                                                b-form-group.my-2( label-for="altBuilding" label="Hausnummer*" )
                                                    b-form-input.claridoo_form-input#altBuilding( type="text" autocomplete="off"
                                                        v-model="formCollapseTwoAlternate.altBuilding"
                                                        placeholder="Hausnummer")
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3
                                                        small.font-weight-bold {{ errors[0] }}
                                validation-provider( rules="required" name="Hause typ" v-slot="{ errors }")
                                    b-form-group.my-2#choose( label="Du wohnst in*" )
                                        div.radio-container
                                            b-form-radio.p-0.house( v-model="formCollapseTwo.choose" name="choose" value="House")
                                            p.mt-2.text-center einem Haus
                                        div.radio-container
                                            b-form-radio.p-0.apartment( v-model="formCollapseTwo.choose" name="choose" value="Apartment")
                                            p.mt-2.text-center einer Wohnung
                                b-form-group.my-3.text-left
                                    b-button.claridoo_button.mb-3.w-35(
                                        :disabled="!checkForm(formCollapseTwo) || !valid"
                                        v-b-toggle.personal-two.personal-three
                                        @click="stepTwo"
                                        type="button" ) Weiter
                b-card( no-body :class="[(opened.three ? 'bg-white' : 'bg-tariff'),(checkForm(formCollapseThree) && !opened.three  ? 'bg-white filled' : '')]" )
                    b-card-header.w-67.mx-auto(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 3. Wechselgrund
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-three
                                type="button" )
                                font-awesome-icon.when-closed( v-if="checkForm(formCollapseThree)" :icon="['fas', 'pencil-alt']" )

                    b-collapse.w-67.mx-auto#personal-three(
                        accordion="personal-accordion"
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes, valid }" )
                            b-form.my-3#reasons
                                div.reason-card-container( v-for="item in reasons"
                                    :key="item.icon" )
                                    div.reason-card( @click="choose($event); setDate(item.reason)" )
                                        img.img-fluid( @click="choose($event); setDate(item.reason)" :src="`${item.icon}`" )
                                        p.h2.text-center.text-violet( @click="choose($event); setDate(item.reason)" ) {{ item.title }}
                                        p.pr-3.pl-3.text-center( style="line-height: 1" @click="choose($event); setDate(item.reason)" )
                                            small {{ item.description }}
                            validation-provider( rules="required" name="Gewünschter Belieferungsstart" v-slot="{ errors }" )
                                b-form-group.my-3( label="Gewünschter Belieferungsstart" v-if="reason !== 'switch'")
                                    b-form-datepicker.claridoo_form-input.w-35( :min="min" locale="de" :max="max"
                                        v-model="formCollapseThree.date"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        :placeholder="placeholder" )
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                b-form-group.my-2( v-else )
                                    div.d-inline-flex.align-items-start.font-weight-light
                                        b-form-checkbox.claridoo_checkbox-input( v-model="formCollapseThree.choose" @change="formCollapseThree.chose = !formCollapseThree.choose" )
                                        span.ml-2.pt-2.text-gray Ich bevollmächtige claridoo by Alpiq Energie Deutschland GmbH mich&nbsp;
                                            strong zum nächstmöglichen Zeitpunkt zu claridoo zu wechseln und zur Kündigung meines bestehenden Stromlieferungsvertrags
                                            | &nbsp;für meine im Weiteren genannte Lieferstelle. Bei Nichtzustimmung werde ich selbstständig meinen vorherigen Stromliefervertrag kündigen und den claridoo Kundenservice über die Kündigung informieren.
                            b-form-group.my-3.text-left
                                b-button.claridoo_button.mb-3.w-35.claridoo_form-input(
                                    v-b-toggle.personal-three
                                    :disabled="!checkForm(formCollapseThree) && !valid"
                                    @click="showModal"
                                    type="button" ) Weiter
                b-card( no-body
                :class="[(opened.four ? 'bg-white' : 'bg-tariff'),((checkForm(formCollapseFour) && !opened.four) || (checkForm(formCollapseFive) && !opened.four) || (checkForm(formCollapseSix) && !opened.four) || (notCounter && !opened.four)  ? 'bg-white filled' : '')]" )
                    b-card-header.w-67.mx-auto(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 4. Bisherige Stromlieferdaten
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-four
                                type="button" )
                                template( v-if="type === 'direct'" )
                                    font-awesome-icon.when-closed( v-if="checkForm(formCollapseFour)" :icon="['fas', 'pencil-alt']" )
                                template( v-else )
                                    font-awesome-icon.when-closed( @click="showModal" v-if="notCounter" :icon="['fas', 'pencil-alt']" )
                    b-collapse.w-67.mx-auto#personal-four(
                        accordion="personal-accordion"
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes, valid }" )
                            counter-component( :valid="valid" :isMobile="isMobile" :form="formCollapseFour" v-if="type === 'direct'" )
                b-card( no-body :class="[(opened.five ? 'bg-white' : 'bg-tariff'),(checkForm(formCollapseSeven) && !opened.five  ? 'bg-white filled' : '')]")
                    b-card-header.w-67.mx-auto(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 5. Zahlungsinfos
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-five
                                type="button" )
                                font-awesome-icon.when-closed( v-if="checkForm(formCollapseSeven) || formCollapseEight.transferConsent"
                                    :icon="['fas', 'pencil-alt']" )
                    b-collapse.w-67.mx-auto#personal-five(
                        accordion="personal-accordion"
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes }" )
                            payment-component( :isMobile="isMobile"
                                :finishing="finishing"
                                :formSepa="formCollapseSeven"
                                :formTransfer="formCollapseEight")
            b-col#register.mx-auto.p-0( cols="12" v-else)
                b-card.pt-3.pl-3.pr-3( no-body :class="[(opened.one ? 'bg-white' : 'bg-tariff'),(checkForm(formCollapseOne) && !opened.one  ? 'bg-white filled' : '')]" )
                    b-card-header(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 1. Persönliche Daten
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-one
                                type="button" )
                                font-awesome-icon.when-closed( v-if="checkForm(formCollapseOne)" :icon="['fas', 'pencil-alt']" )
                    b-collapse#personal-one(
                        accordion="personal-accordion"
                        visible
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes, valid }" )
                            b-form.my-3
                                validation-provider( rules="required" name="Vornamen" v-slot="{ errors }")
                                    b-form-group.my-2( label-for="name" label="Vornamen*" )
                                        b-form-input.claridoo_form-input#name( type="text" autocomplete="off"
                                            v-model="formCollapseOne.name"
                                            placeholder="Erika" )
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                validation-provider( rules="required" name="Nachnamen" v-slot="{ errors }")
                                    b-form-group.my-2( label-for="surname" label="Nachnamen*" )
                                        b-form-input.claridoo_form-input#surname( type="text" autocomplete="off"
                                            v-model="formCollapseOne.surname"
                                            placeholder="Mustermann")
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                validation-provider( rules="required" name="Anrede" v-slot="{ errors }")
                                    b-form-group.my-2( label="Anrede*" )
                                        b-row.m-0.p-0.w-100
                                            b-col.m-0.p-0( cols="12" )
                                                b-form-group
                                                    b-row.m-0.p-0#sex
                                                        b-col.p-0( cols="6" )
                                                            b-form-radio.p-0.pr-1.frau( v-model="formCollapseOne.sex" name="sex" value="Female")
                                                        b-col.p-0( cols="6" )
                                                            b-form-radio.p-0.pl-1.herr( v-model="formCollapseOne.sex" name="sex" value="Male")
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                b-form-group.my-2( label="Geburtsdatum*" )
                                    b-row.m-0.p-0.w-100.d-flex.justify-content-between
                                        b-col.m-0.p-0( cols="3" )
                                            validation-provider( rules="required|integer|between:1,31" name="DD" v-slot="{ errors }")
                                                b-form-input.claridoo_form-input.w-100.text-center#day( type="text" autocomplete="off"
                                                    v-model="formCollapseOne.day"
                                                    placeholder="DD")
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3.day
                                                        small.font-weight-bold {{ errors[0] }}
                                        b-col.m-0.p-0( cols="3" )
                                            validation-provider( rules="required|integer|between:1,12" name="MM" v-slot="{ errors }")
                                                b-form-input.claridoo_form-input.w-100.text-center#month( type="text" autocomplete="off"
                                                    v-model="formCollapseOne.month"
                                                    placeholder="MM")
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3.month
                                                        small.font-weight-bold {{ errors[0] }}
                                        b-col.m-0.p-0( cols="3" )
                                            validation-provider( rules="required|integer|between:1900,2020" name="YYYY" v-slot="{ errors }")
                                                b-form-input.claridoo_form-input.w-100.text-center#year( type="text" autocomplete="off"
                                                    v-model="formCollapseOne.year"
                                                    placeholder="YYYY")
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3.year
                                                        small.font-weight-bold {{ errors[0] }}
                                validation-provider( rules="required|email" name="Email" v-slot="{ errors }")
                                    b-form-group.my-2( label="Email*" )
                                        b-input-group
                                            b-form-input.claridoo_form-input.border-radius-right( type="email"
                                                placeholder="Email Adresse"
                                                v-model="formCollapseOne.email" autocomplete="off" )
                                            b-input-group-append.ml-2
                                                img#email-info.img-fluid( src="../assets/info.svg" alt="Claridoo Email Info")
                                                popover-component(
                                                    :title="'Email'"
                                                    :content="'Wir nutzen Deine E-Mail Adresse um dir wichtige Dokumente zu deiner Claridoo Smart Strom Bestellung zu senden, z.B. die Vertragsunterlagen.'"
                                                    :target="'email-info'"
                                                    :placement="'bottomright'"
                                                )
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                validation-provider( rules="required|germanyPhone" name="Telefonnummer" v-slot="{ errors }")
                                    b-form-group.my-2( label="Telefonnummer*" )
                                        b-input-group
                                            input-mask#phone.claridoo_form-input.pl-3.w-90(
                                                type="text" v-model="formCollapseOne.phone"
                                                :format-chars="formatChars"
                                                maskChar=""
                                                mask="+49 0000 0000000"
                                                placeholder="+49 1577 0000000" autocomplete="off")
                                            b-input-group-append.ml-2
                                                img#telefonnummer-info.img-fluid( src="../assets/info.svg" alt="Claridoo Telefonnummer Info")
                                                popover-component(
                                                    :title="'Telefonnummer'"
                                                    :content="'Wir nutzen Deine Handynummer nur um deine claridoo Smart Strom Bestellung abzuwickeln, z.B. um mit dir den Termin für die Installation des intelligenten Zählers zu vereinbaren.'"
                                                    :target="'telefonnummer-info'"
                                                    :placement="'bottomright'"
                                                )
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                b-form-group.my-4
                                    div.d-inline-flex.font-weight-light
                                        b-form-checkbox.claridoo_checkbox-input
                                        span.ml-2 Ich bin damit einverstanden, dass claridoo mich über Neuigkeiten und exklusive Angebote per E-Mail informiert. Du kannst dich jederzeit wieder vom Newsletter abmelden. Weitere Informationen findest du in unserer Datenschutzerklärung.
                                b-form-group.my-5.text-left
                                    b-button.claridoo_button.mb-3.w-100(
                                        v-b-toggle.personal-one.personal-two
                                        :disabled="!checkForm(formCollapseOne) && checkPhone() && !valid"
                                        @click="stepOne"
                                        type="button" ) Weiter
                b-card.pt-3.pl-3.pr-3( no-body :class="[(opened.two ? 'bg-white' : 'bg-tariff'),(checkForm(formCollapseTwo) && !opened.two  ? 'bg-white filled' : '')]" )
                    b-card-header(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 2. Lieferadresse
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-two
                                type="button" )
                                font-awesome-icon.when-closed( v-if="checkForm(formCollapseTwo)" :icon="['fas', 'pencil-alt']" )
                    b-collapse#personal-two(
                        accordion="personal-accordion"
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes, valid }" )
                            b-form.my-3
                                validation-provider( rules="required" name="Postleitzahl" v-slot="{ errors }")
                                    b-form-group.my-2( label-for="postcode" label="Postleitzahl" )
                                        b-form-input.claridoo_form-input#postcode( type="text" autocomplete="off"
                                            v-model="formCollapseTwo.postcode"
                                            disabled)
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                validation-provider( rules="required" name="Stadt*" v-slot="{ errors }")
                                    b-form-group.my-2( label-for="stadt" label="Stadt*" )
                                        b-form-input.claridoo_form-input#stadt( type="text" autocomplete="off"
                                            v-model="formCollapseTwo.city"
                                            placeholder="Stadt"
                                            disabled)
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                validation-provider( rules="required" name="Strasse" v-slot="{ errors }")
                                    b-form-group.my-2( label-for="street" label="Strasse*" )
                                        b-form-input.claridoo_form-input#street( type="text" autocomplete="off"
                                            v-model="formCollapseTwo.street"
                                            placeholder="Strasse")
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                validation-provider( rules="required" name="Hausnummer" v-slot="{ errors }")
                                    b-form-group.my-2( label-for="building" label="Hausnummer*" )
                                        b-form-input.claridoo_form-input#building( type="text" autocomplete="off"
                                            v-model="formCollapseTwo.building"
                                            placeholder="Hausnummer")
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                b-form-group.my-4
                                    div.d-inline-flex.align-items-center.font-weight-light
                                        b-form-checkbox.claridoo_checkbox-input( @change="alternate = !alternate" )
                                        span.ml-2.pt-2.text-violet.font-weight-bold Alternative Rechnungsadresse
                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                    b-row.m-0.p-0( v-if="alternate" )
                                        b-col.pl-0( cols="12" xl="5" )
                                            validation-provider( rules="required" name="Postleitzahl" v-slot="{ errors }")
                                                b-form-group.my-2( label-for="name" label="Postleitzahl*" )
                                                    b-form-input.claridoo_form-input#altPostcode( type="text" autocomplete="off"
                                                        v-model="formCollapseTwoAlternate.altPostcode"
                                                        @input="search()"
                                                        placeholder="Postleitzahl")
                                                    b-list-group.mt-2.position-absolute( v-if="altCities.length > 0" style="top: calc(52px + 2rem); width: 100%" )
                                                        b-list-group-item.autocomplete-result.pl-5( v-for="item in altCities" :key="item" @click="handleCity(item)" ) {{ item }}
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3
                                                        small.font-weight-bold {{ errors[0] }}
                                            validation-provider( rules="required" name="Stadt" v-slot="{ errors }")
                                                b-form-group.my-2( label-for="altStreet" label="Stadt*" )
                                                    b-form-input.claridoo_form-input#altStreet( type="text" autocomplete="off"
                                                        v-model="formCollapseTwoAlternate.altCity"
                                                        placeholder="Stadt" )
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3
                                                        small.font-weight-bold {{ errors[0] }}
                                        b-col.pl-0( cols="12" xl="5" )
                                            validation-provider( rules="required" name="Strasse" v-slot="{ errors }")
                                                b-form-group.my-2( label-for="altStreet" label="Strasse*" )
                                                    b-form-input.claridoo_form-input#altStreet( type="text" autocomplete="off"
                                                        v-model="formCollapseTwoAlternate.altStreet"
                                                        placeholder="Strasse" )
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3
                                                        small.font-weight-bold {{ errors[0] }}
                                            validation-provider( rules="required" name="Hausnummer" v-slot="{ errors }")
                                                b-form-group.my-2( label-for="altBuilding" label="Hausnummer*" )
                                                    b-form-input.claridoo_form-input#altBuilding( type="text" autocomplete="off"
                                                        v-model="formCollapseTwoAlternate.altBuilding"
                                                        placeholder="Hausnummer")
                                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                    .text-danger.pl-3
                                                        small.font-weight-bold {{ errors[0] }}
                                validation-provider( rules="required" name="Anrede" v-slot="{ errors }")
                                    b-form-group.my-2#choose( label="Du wohnst in*" )
                                        div.radio-container
                                            b-form-radio.p-0.house( v-model="formCollapseTwo.choose" name="choose" value="House")
                                            p.mt-2.text-center einem Haus
                                        div.radio-container
                                            b-form-radio.p-0.apartment( v-model="formCollapseTwo.choose" name="choose" value="Apartment")
                                            p.mt-2.text-center einer Wohnung
                                b-form-group.my-3.text-center
                                    b-button.claridoo_button.mb-3.w-100(
                                        :disabled="!checkForm(formCollapseTwo) && !valid"
                                        @click="stepTwo"
                                        v-b-toggle.personal-two.personal-three
                                        type="button" ) Weiter
                b-card.pt-3.pl-3.pr-3.mb-xl-4( no-body :class="[(opened.three ? 'bg-white' : 'bg-tariff'),(checkForm(formCollapseThree) && !opened.three  ? 'bg-white filled' : '')]" )
                    b-card-header(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 3. Wechselgrund
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-three
                                type="button" )
                                font-awesome-icon.when-closed( v-if="checkForm(formCollapseThree)" :icon="['fas', 'pencil-alt']" )
                    b-collapse#personal-three(
                        accordion="personal-accordion"
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes, valid }" )
                            b-form.my-3#reasons
                                div.reason-card-container( v-for="item in reasons" @click="choose($event); setDate(item.reason)"
                                    :key="item.icon" )
                                    div.reason-card( @click="choose($event); setDate(item.reason)" )
                                        img.img-fluid( @click="choose($event); setDate(item.reason)" :src="`${item.icon}`" )
                                        p.text-xl-center.text-violet( @click="choose($event); setDate(item.reason)" ) {{ item.title }}
                                        p.pr-xl-3.pl-xl-3.text-xl-center( style="line-height: 1"  @click="choose($event); setDate(item.reason)" )
                                            small( @click="choose($event); setDate(item.reason)" ) {{ item.description }}
                            validation-provider( rules="required" name="Gewünschter Belieferungsstart" v-slot="{ errors }")
                                b-form-group.my-3( label="Gewünschter Belieferungsstart" v-if="reason !== 'switch'")
                                    b-form-datepicker.claridoo_form-input( :min="min" locale="de" :max="max"
                                        v-model="formCollapseThree.date"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        :placeholder="placeholder" )
                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                        .text-danger.pl-3
                                            small.font-weight-bold {{ errors[0] }}
                                b-form-group.my-2( v-else )
                                    div.d-inline-flex.align-items-start.font-weight-light
                                        b-form-checkbox.claridoo_checkbox-input( v-model="formCollapseThree.choose" @change="formCollapseThree.chose = !formCollapseThree.choose" )
                                        span.ml-2.pt-2.text-gray Ich bevollmächtige claridoo by Alpiq Energie Deutschland GmbH mich&nbsp;
                                            strong zum nächstmöglichen Zeitpunkt zu claridoo zu wechseln und zur Kündigung meines bestehenden Stromlieferungsvertrags
                                            | &nbsp;für meine im Weiteren genannte Lieferstelle. Bei Nichtzustimmung werde ich selbstständig meinen vorherigen Stromliefervertrag kündigen und den claridoo Kundenservice über die Kündigung informieren.
                                b-form-group.my-3
                                    b-button.claridoo_button.mb-3.w-100.claridoo_form-input(
                                        :disabled="!checkForm(formCollapseThree) && !valid"
                                        v-b-toggle.personal-three
                                        @click="showModal"
                                        type="button" ) Weiter
                b-card.pt-3.pl-3.pr-3.mb-xl-4( no-body
                :class="[(opened.four ? 'bg-white' : 'bg-tariff'),((checkForm(formCollapseFour) && !opened.four) || (checkForm(formCollapseFive) && !opened.four) || (checkForm(formCollapseSix) && !opened.four) || (notCounter && !opened.four) ? 'bg-white filled' : '')]" )
                    b-card-header(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 4. Bisherige Stromlieferdaten
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-four
                                type="button" )
                                template( v-if="type === 'direct'" )
                                    font-awesome-icon.when-closed( v-if="checkForm(formCollapseFour)" :icon="['fas', 'pencil-alt']" )
                                template( v-else )
                                    font-awesome-icon.when-closed( @click="showModal" v-if="notCounter" :icon="['fas', 'pencil-alt']" )
                    b-collapse#personal-four(
                        accordion="personal-accordion"
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes }" )
                            counter-component( :isMobile="isMobile" :form="formCollapseFour" v-if="type === 'direct'" )
                b-card.pt-3.pl-3.pr-3.mb-xl-4( no-body :class="[(opened.five ? 'bg-white' : 'bg-tariff'),(checkForm(formCollapseSeven) && !opened.five  ? 'bg-white filled' : '')]" )
                    b-card-header(
                        header-tag="header"
                        role="tab" )
                        div
                            span.claridoo_collapse-title 5. Zahlungsinfos
                            button.claridoo_collapse-open-close.float-right(
                                v-b-toggle.personal-five
                                type="button" )
                                font-awesome-icon.when-closed( v-if="checkForm(formCollapseSeven) || formCollapseEight.transferConsent"
                                    :icon="['fas', 'pencil-alt']" )
                    b-collapse#personal-five(
                        accordion="personal-accordion"
                        role="tabpanel")
                        validation-observer( ref="observer" v-slot="{ passes }" )
                            payment-component( :isMobile="isMobile"
                                :finishing="finishing"
                                :formSepa="formCollapseSeven"
                                :formTransfer="formCollapseEight")

</template>

<script>
    export default {
        name: "Register",
        props: {
            isMobile: null
        },
        data() {
            const now = new Date();
            return {
                notCounter: false,
                alternate: false,
                reason: 'switch',
                finishing: false,
                altCities: [],
                opened: {
                    one: false,
                    two: false,
                    three: false,
                    four: false,
                    five: false,
                },
                formCollapseOne: {
                    sex: null,
                    name: null,
                    surname: null,
                    day: null,
                    month: null,
                    year: null,
                    phone: null,
                    email: null,
                    emailconsent: false
                },
                formCollapseTwo: {
                    city: this.$store.getters.user.city,
                    street: null,
                    building: null,
                    postcode: this.$store.getters.postcode,
                    choose: null
                },
                formCollapseTwoAlternate: {
                    altCity: null,
                    altStreet: null,
                    altBuilding: null,
                    altPostcode: null,
                },
                formCollapseThree: {
                    choose: null,
                    date: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                    reason: 'switch'
                },
                formCollapseFour: {
                    counterNumber: null,
                    previousSupplier: null,
                    previousCustomerNumber: null,
                    previousCodenummer: null,
                    agree: false
                },
                formCollapseFive: {
                    whatsapp: null,
                    whatsappconsent: false
                },
                formCollapseSix: {
                    email: null,
                    emailconsentMeterData: false
                },
                formCollapseSeven: {
                    sepaFullname: this.$store.getters.user.firstname && this.$store.getters.user.lastname ? `${this.$store.getters.user.firstname} ${this.$store.getters.user.lastname}` : null,
                    sepaIBAN: null,
                    sepaConsent: false,
                    sepaBIC: this.$store.getters.iban ? this.$store.getters.iban.bic : ''
                },
                formCollapseEight: {
                    transferConsent: false
                },
                reasons: this.$store.getters.reasons,
                min: null,
                max: null,
                placeholder: `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`,
                type: null,
                paymentMethod: null,
                formatChars: {
                    '0': '[0-9]',
                    'a': '[A-Za-z]',
                    '*': '[A-Za-z0-9]'
                }
            }
        },
        mounted() {

            Object.keys(this.$store.getters.user).length > 0 ? null : this.$router.push({name: 'home'});

            this.$store.commit('progress', 20);

            this.$root.$emit('show-alert');

            this.$root.$on('choose-type', (type) => {
                this.type = type;
                switch (type) {
                    case 'email':
                        this.notCounter = true;
                        break;
                    case 'whatsapp':
                        this.notCounter = true;
                        break;
                    case 'direct':
                        this.notCounter = false;
                        break;
                }
                let user = this.$store.getters.user;
                let object = {
                    date: this.formCollapseThree.date,
                    reason: this.formCollapseThree.reason,
                    provideMeterData: this.type,
                    step: '4'
                };
                object = Object.assign(object, user);
                this.$store.commit('user', object);
            });

            this.$root.$on('bv::collapse::state', (collapseId, isJustShown) => {
                switch (collapseId) {
                    case 'personal-one':
                        this.opened.one = isJustShown;
                        break;
                    case 'personal-two':
                        this.opened.two = isJustShown;
                        break;
                    case 'personal-three':
                        this.opened.three = isJustShown;
                        break;
                    case 'personal-four':
                        this.opened.four = isJustShown;
                        break;
                    case 'personal-five':
                        this.opened.five = isJustShown;
                        break;
                }
            });

            this.$root.$on('register', (paymentMethod) => {
                this.stepFour(paymentMethod);
                this.$store.commit('progress', 20);
                this.$router.push({name: 'register.finishing'})
            });

            this.$root.$on('save-step', (data) => {
                this.$store.commit('user', data);
            });

            let user = this.$store.getters.user;
            let object = {step: "1"};
            object = Object.assign(user, object);
            this.$root.$emit('save-step', object);

            this.formCollapseOne = {
                sex: this.$store.getters.user.sex ? this.$store.getters.user.sex : null,
                name: this.$store.getters.user.firstname ? this.$store.getters.user.firstname : null,
                surname: this.$store.getters.user.lastname ? this.$store.getters.user.lastname : null,
                day: this.$store.getters.user.birthdate ? this.$store.getters.user.birthdate.split('.')[0] : null,
                month: this.$store.getters.user.birthdate ? this.$store.getters.user.birthdate.split('.')[1]: null,
                year: this.$store.getters.user.birthdate ? this.$store.getters.user.birthdate.split('.')[2] : null,
                phone: this.$store.getters.user.phone ? this.$store.getters.user.phone : null,
                email: this.$store.getters.user.email ? this.$store.getters.user.email : null,
                emailconsent: this.$store.getters.user.emailconsent ? this.$store.getters.user.emailconsent : false
            };
            this.alternate = this.$store.getters.user.invoicing_separate_address ? this.$store.getters.user.invoicing_separate_address : false
            this.formCollapseTwo = {
                    city: this.$store.getters.user.city,
                    street: this.$store.getters.user.street ? this.$store.getters.user.street : null,
                    building: this.$store.getters.user.house ? this.$store.getters.user.house : null,
                    postcode: this.$store.getters.postcode ? this.$store.getters.postcode : null,
                    choose: this.$store.getters.user.householdType ? this.$store.getters.user.householdType : null
            };
            this.formCollapseTwoAlternate = {
                    altCity: this.$store.getters.user.invoicing_city ? this.$store.getters.user.invoicing_city : null,
                    altStreet: this.$store.getters.user.invoicing_street ? this.$store.getters.user.invoicing_street : null,
                    altBuilding: this.$store.getters.user.invoicing_house ? this.$store.getters.user.invoicing_house : null,
                    altPostcode: this.$store.getters.user.invoicing_zip ? this.$store.getters.user.invoicing_zip : null,
            }
        },
        methods: {
            showModal() {
                this.$bvModal.show('type');
            },
            checkPhone() {
              if (this.formCollapseOne.phone) {
                  if (this.formCollapseOne.phone.length > 12) {
                      return true;
                  }
              } else {
                  return false;
              }
              return false;
            },
            checkForm(form) {
                const values = Object.values(form);
                return !values.includes(null);
            },
            stepOne() {
                if (this.isMobile) {
                    this.scrollTo('personal-two');
                }
                let user = this.$store.getters.user;
                let object = {
                    firstname: this.formCollapseOne.name,
                    lastname: this.formCollapseOne.surname,
                    sex: this.formCollapseOne.sex,
                    birthdate: `${this.formCollapseOne.day}.${this.formCollapseOne.month}.${this.formCollapseOne.year}`,
                    email: this.formCollapseOne.email,
                    emailconsent: this.formCollapseOne.emailconsent,
                    phone: this.formCollapseOne.phone
                };
                object = Object.assign(user, object);
                this.$root.$emit('save-step', object);
                this.$httpService.post(process.env.NODE_ENV === 'production' ? '/signup/prod/' : 'api/step-one', this.$store.getters.user)
                .then(response => {
                    let user = this.$store.getters.user;
                    user.uuid = process.env.NODE_ENV === 'production' ? response.data.uuid : response.data.session.uuid;
                    user.step = '2';
                    this.$root.$emit('save-step', object);
                    this.$store.commit('progress', 20);
                })
            },
            stepTwo() {
                if (this.isMobile) {
                    this.scrollTo('personal-three');
                }
                this.formCollapseThree.choose = true;
                this.formCollapseThree.reason = 'switch';
                document.querySelectorAll('.reason-card-container')[0].classList.add('chosen');
                let user = this.$store.getters.user;
                let object = {
                    city: this.formCollapseTwo.city,
                    street: this.formCollapseTwo.street,
                    house: this.formCollapseTwo.building,
                    householdType: this.formCollapseTwo.choose,
                    invoicing_separate_address: false,
                };
                if (this.alternate) {
                    let alternate = {
                        invoicing_zip: this.formCollapseTwoAlternate.altPostcode,
                        invoicing_city: this.formCollapseTwoAlternate.altCity,
                        invoicing_street: this.formCollapseTwoAlternate.altStreet,
                        invoicing_house: this.formCollapseTwoAlternate.altBuilding
                    };
                    object = Object.assign(object, alternate);
                }
                object = Object.assign(object, user);
                this.$root.$emit('save-step', object);
                this.$httpService.post(process.env.NODE_ENV === 'production' ? '/signup/prod/' : 'api/step-one', this.$store.getters.user)
                    .then(response => {
                        let user = this.$store.getters.user;
                        user.uuid = process.env.NODE_ENV === 'production' ? response.data.uuid : response.data.session.uuid;
                        user.step = '3';
                        this.$root.$emit('save-step', object);
                        this.$store.commit('progress', 20);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            setDate(reason) {
                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const minDate = new Date(today);
                const maxDate = new Date(today);
                switch (reason) {
                    case 'switch':
                        this.reason = reason;
                        break;
                    case 'moving':
                        this.reason = reason;
                        minDate.setMonth(minDate.getMonth() - 6);
                        maxDate.setMonth(maxDate.getMonth() + 6);
                        this.max = maxDate;
                        this.min = minDate;
                        break;
                    case 'new':
                        this.reason = reason;
                        maxDate.setMonth(maxDate.getMonth() + 6);
                        this.max = maxDate;
                        this.min = minDate;
                        break;
                }
            },
            choose(event) {

                document.querySelectorAll('.reason-card-container').forEach(item => {
                    item.classList.contains('chosen') ?
                        item.classList.remove('chosen') : null;
                });

                if (event.target.classList.contains('reason-card-container')) {
                    event.target.classList.add('chosen');
                } else {
                    event.target.closest('.reason-card-container').classList.add('chosen')
                }
            },
            stepFour(paymentMethod){
                if (this.isMobile) {
                    this.scrollTo('personal-five');
                }
                let user = this.$store.getters.user;
                let object = {};
                switch (paymentMethod) {
                    case 'sepa':
                        object = {
                            paymentMethod: paymentMethod,
                            sepaFullname: this.formCollapseSeven.sepaFullname,
                            sepaIBAN: this.formCollapseSeven.sepaIBAN,
                            sepaConsent: this.formCollapseSeven.sepaConsent,
                            sepaBIC: this.$store.getters.iban.sepaBIC
                        };
                        break;
                    case 'transfer':
                        object = {
                            paymentMethod: paymentMethod,
                            transferConsent: this.formCollapseEight.transferConsent
                        };
                }
                object = Object.assign(object, user);
                this.$store.commit('user', object);
                this.$httpService.post(process.env.NODE_ENV === 'production' ? '/signup/prod/' : 'api/step-one', this.$store.getters.user)
                    .then(response => {
                        let user = this.$store.getters.user;
                        user.uuid = process.env.NODE_ENV === 'production' ? response.data.uuid : response.data.session.uuid;
                        user.step = '5';
                        this.$root.$emit('save-step', object);
                        this.$store.commit('progress', 20);
                    })
            },
            scrollTo(id) {
                this.$scrollTo(`#${id}`)
            },
            search() {
                if (this.formCollapseTwoAlternate.altPostcode.length < 5) {
                    return;
                }
                this.$httpService.get(process.env.NODE_ENV === 'production' ? `/plz/prod/?PLZ=${this.formCollapseTwoAlternate.altPostcode}` : `api/city/${this.formCollapseTwoAlternate.altPostcode}`)
                    .then(response => {
                        this.altCities = process.env.NODE_ENV === 'production' ? response.data : response.data.city;
                    })
            },
            handleCity(city) {
                this.formCollapseTwoAlternate.altCity = city;
                this.altCities = [];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-group {
        margin: 0;
    }
    #reasons {
        display: grid;
        grid-template-columns: repeat(3, 260px);
        grid-template-rows: 1fr;
        @media (max-width: 992px) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, auto);
            grid-row-gap: .5rem;
        }
        & .reason-card-container {
            display: block;
            margin-top: 0;
            &:hover {
                cursor: pointer;
            }
            &.chosen {
                & .reason-card {
                    border: 2px solid #7907E7;
                }
            }
            & .reason-card {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(3, calc(100% / 3));
                border: 2px solid #a9a9a9;
                border-radius: 10px;
                justify-items: center;
                align-items: center;
                width: 243px;
                height: 329px;
                @media (max-width: 992px) {
                    width: 100%;
                    height: auto;
                    grid-template-columns: 20% 80%;
                    grid-template-rows: 1fr 1fr;
                    &:nth-of-type(2) {
                        margin-top: .5rem;
                        margin-bottom: .5rem;
                    }
                    & :nth-child(1) {
                        grid-row: 1 / -1;
                        grid-column: 1 / 2;
                    }
                    & :nth-child(2) {
                        align-self: end;
                        justify-self: start;
                        font-size: 1.2rem;
                        font-weight: 600;
                        grid-row: 1 / 2;
                        grid-column: 2 / -1;
                    }
                    & :nth-child(3) {
                        grid-row: 2 / -1;
                        grid-column: 2 / -1;
                        align-self: start;
                        justify-self: start;
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
        .year {
            width: 100vw;
            margin-left: -70.5vw;
            margin-top: 0;
        }
        .month {
            width: 100vw;
            margin-left: -36vw;
            margin-top: .75rem;
        }
        .day {
            width: 100vw;
            margin-left: -1.5vw;
            margin-top: 1.6rem;
        }
    }

</style>
