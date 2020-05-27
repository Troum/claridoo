<template lang="pug">
    b-col#finishing.claridoo_start.m-0.p-0( cols="12" )
        b-row.m-0.p-0.bg-tariff
            b-row.m-0.p-0.bg-tariff( v-if="!isMobile" )
                b-col.mx-auto.p-0( lg="8" xl="8" )
                    b-row.m-0.p-0
                        b-col.m-0.p-0( lg="7" xl="7" )
                            b-row.m-0.pt-3.pb-3.pl-0.pr-0
                                b-col.m-0.p-0( cols="12" )
                                    p.mb-0.claridoo_tariff-title Dein Tarif
                                    p.mb-5.claridoo_tariff-subtitle {{ $store.getters.info.tarif }}
                                b-col.m-0.p-0.border-bottom( cols="12" )
                                    b-row.m-0
                                        b-col.m-0.text-left.p-0( cols="6" )
                                            p.text-violet.font-weight-bold Monatpreis
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
                                            p.text-navy.font-weight-bold Preisgarantie / Kündigungsfrist
                                        b-col.m-0.text-right.p-0( cols="4" )
                                            p.text-darkgray.font-weight-bold {{ $store.getters.info.pricegaranty }}
                        b-col.d-flex.justify-content-center.align-items-center.m-0.p-0( lg="5" xl="5" )
                            img.img-fluid( src="../assets/tarif.svg" alt="Claridoo Tarif Logo" )
        b-row.m-0.p-0
            b-col.m-0.mx-auto.p-0( cols="11" xl="8" )
                p.h2.claridoo_title Fast geschafft!
                p.text-violet.text-center.border-bottom Bitte überprüfe nochmal deine Angaben
                validation-observer( ref="observer" v-slot="{ passes }")
                    b-form( @submit.prevent="passes(submit)" )
                        b-row.m-0.p-0
                            b-col.m-0.my-3.border-bottom.border-darkgray( cols="12" )
                                div.w-100
                                    span.claridoo_finishing-title 1. Persönliche Daten
                                    button.claridoo_finishing-editing.float-right(
                                        type="button" @click="editable.personal = !editable.personal" )
                                        font-awesome-icon.when-closed( :icon="['fas', 'pencil-alt']" )
                                div.my-4.pl-4.font-weight-bold.w-100
                                    validation-provider( rules="required" name="Andrede" v-slot="{ errors }" )
                                        b-form-group#finishingSex( v-if="editable.personal" :disabled="!editable.personal" )
                                            b-row.m-0.p-0( :class="isMobile ? 'w-100' : 'w-50'" )
                                                b-col.p-0( cols="6" )
                                                    b-form-radio.p-0.pr-1.frau( v-model="info.sex" name="sex" value="Female")
                                                b-col.p-0( cols="6" )
                                                    b-form-radio.p-0.pl-1.herr( v-model="info.sex" name="sex" value="Male")
                                        b-form-group( v-else )
                                            p.mb-0.font-weight-light {{ info.sex | sex }}
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                    validation-provider( rules="required" name="Vornamen" v-slot="{ errors }" )
                                        label.d-block.text-violet( for="firstName" v-if="editable.personal") Vornamen
                                        input#firstName( :disabled="!editable.personal" type="text"
                                            :class="editable.personal ? 'claridoo_form-input' : 'border-0'" autocomplete="off"
                                            v-model="info.firstname" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                    validation-provider( rules="required" name="Nachnamen" v-slot="{ errors }" )
                                        label.d-block.text-violet( for="lastName" v-if="editable.personal") Nachnamen
                                        input#lastName( :disabled="!editable.personal" type="text"
                                            :class="editable.personal ? 'claridoo_form-input' : 'border-0'"
                                            v-model="info.lastname" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                    validation-provider( rules="required" name="Email Adresse" v-slot="{ errors }" )
                                        label.d-block.text-violet( for="email" v-if="editable.personal") Email Adresse
                                        input#email.d-block( :disabled="!editable.personal" type="email"
                                            :class="editable.personal ? 'claridoo_form-input' : 'border-0'"
                                            v-model="info.email" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                    validation-provider( rules="required" name="Geburtsdatum" v-slot="{ errors }" )
                                        label.d-block.text-violet( for="birthdate" v-if="editable.personal") Geburtsdatum
                                        input-mask#birthdate.d-block( :disabled="!editable.personal" type="text"
                                            :format-chars="formatChars"
                                            maskChar=""
                                            mask="00.00.0000"
                                            :class="editable.personal ? 'claridoo_form-input' : 'border-0'"
                                            v-model="info.birthdate" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                    validation-provider( rules="required|germanyPhone" name="Telefonnummer" v-slot="{ errors }" )
                                        label.d-block.text-violet( for="phone" v-if="editable.personal") Telefonnummer
                                        input-mask#phone.d-block( :disabled="!editable.personal" type="text"
                                            :class="editable.personal ? 'claridoo_form-input' : 'border-0'"
                                            v-model="info.phone"
                                            :format-chars="formatChars"
                                            maskChar=""
                                            mask="+4900000000000" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                            b-col.m-0.my-3.border-bottom.border-darkgray( cols="12" )
                                div.w-100
                                    span.claridoo_finishing-title 2. Lieferadresse
                                    button.claridoo_finishing-editing.float-right(
                                        type="button" @click="editable.address = !editable.address" )
                                        font-awesome-icon.when-closed( :icon="['fas', 'pencil-alt']" )
                                div.my-4.pl-4.font-weight-bold.w-100
                                    validation-provider( rules="required" name="Postleitzeil" v-slot="{ errors }" )
                                        label.d-block.text-violet( for="zip" v-if="editable.address") Postleitzeil
                                        input#zip.d-inline-block( :disabled="!editable.address" type="text"
                                            :class="editable.address ? 'claridoo_form-input' : 'border-0'"
                                            v-model="info.zip" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                    validation-provider( rules="required" name="Postleitzeil" v-slot="{ errors }" )
                                        label.d-block.text-violet( for="city" v-if="editable.address") Stadt
                                        input#city.d-inline-block( :disabled="!editable.address" type="text"
                                            :class="editable.address ? 'claridoo_form-input' : 'border-0'"
                                            v-model="info.city" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                    validation-provider( rules="required" name="Strasse" v-slot="{ errors }" )
                                        label.d-block.text-violet( for="street" v-if="editable.address") Strasse
                                        input#street.d-inline-block( :disabled="!editable.address" type="text"
                                            :class="editable.address ? 'claridoo_form-input' : 'border-0'"
                                            v-model="info.street" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                    validation-provider( rules="required" name="Hausnummer" v-slot="{ errors }" )
                                        label.d-block.text-violet( for="house" v-if="editable.address") Hausnummer
                                        input#house.d-inline-block( :disabled="!editable.address" type="text"
                                            :class="editable.address ? 'claridoo_form-input' : 'border-0'"
                                            v-model="info.house" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                    validation-provider( rules="required" name="Hause typ" v-slot="{ errors }" )
                                        label.d-block.text-violet.my-2( v-if="editable.address" ) Du wohnst in?
                                        b-form-group#houseHolderType.mt-2.mb-4( v-if="editable.address" :disabled="!editable.address" )
                                            div.radio-container
                                                b-form-radio.p-0.house( v-model="info.householdType" name="choose" value="House")
                                            div.radio-container
                                                b-form-radio.p-0.apartment( v-model="info.householdType" name="choose" value="Apartment")
                                        b-form-group#houseHolderType( v-else )
                                            p.font-weight-light.mb-0 {{ info.householdType | house }}
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3
                                                small.font-weight-bold {{ errors[0] }}
                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" )
                                    div.my-4.pl-4.font-weight-bold.w-100( v-if="editable.address && info.invoicing_separate_address" )
                                        p.my-2 Alternate address
                                        validation-provider( rules="required" name="Alternate Postleitzeil" v-slot="{ errors }" )
                                            label.d-block.text-violet( for="alternateZip" v-if="editable.address") Alternate Postleitzeil
                                            input#alternateZip.d-block( :disabled="!editable.address" type="text"
                                                :class="editable.address ? 'claridoo_form-input' : 'border-0'"
                                                v-model="info.invoicing_zip" )
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                        validation-provider( rules="required" name="Alternate Strasse" v-slot="{ errors }" )
                                            label.d-block.text-violet( for="alternateStreet" v-if="editable.address") Alternate Strasse
                                            input#alternateStreet.d-block( :disabled="!editable.address" type="text"
                                                :class="editable.address ? 'claridoo_form-input' : 'border-0'"
                                                v-model="info.invoicing_street" )
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                        validation-provider( rules="required" name="Alternate Hausnummer" v-slot="{ errors }" )
                                            label.d-block.text-violet( for="alternateHouse" v-if="editable.address") Alternate Hausnummer
                                            input#alternateHouse.d-block( :disabled="!editable.address" type="text"
                                                :class="editable.address ? 'claridoo_form-input' : 'border-0'"
                                                v-model="info.invoicing_house" )
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                            b-col.m-0.my-3.border-bottom.border-darkgray( cols="12" )
                                div.w-100
                                    span.claridoo_finishing-title 3. Wechselgrund
                                    button.claridoo_finishing-editing.float-right(
                                        type="button" @click="editable.switch = !editable.switch" )
                                        font-awesome-icon.when-closed( :icon="['fas', 'pencil-alt']" )
                                div.my-4.pl-4.font-weight-bold.w-100( v-if="!editable.switch" )
                                    template( v-if="info.reason === 'switch'" )
                                        div
                                            span.font-weight-light Wechsel zu CLARIDOO
                                    template( v-if="info.reason === 'moving'" )
                                        div
                                            span.font-weight-light Umzug / Einzug
                                    template( v-if="info.reason === 'new'" )
                                        div
                                            span.font-weight-light Neubau
                                transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" )
                                    div.my-4.pl-4.font-weight-bold.w-100( v-if="editable.switch" )
                                        div#finishingReasons
                                            div.reason-card-container( v-for="item in $store.getters.reasons"
                                                :key="item.icon" )
                                                div.reason-card( @click="choose($event, item.reason)" :class="info.reason === 'switch' ? 'chosen' : ''")
                                                    img.img-fluid( @click="choose($event, item.reason)" :src="`${item.icon}`" )
                                                    p.h2.text-center.text-violet( @click="choose($event, item.reason)" ) {{ item.title }}
                                                    p.pr-3.pl-3.text-center( style="line-height: 1" @click="choose($event, item.reason)" )
                                                        small {{ item.description }}
                                            b-form-group.my-3( v-if="info.reason !== 'switch'")
                                                b-form-datepicker.claridoo_form-input( :min="min" locale="de" :max="max"
                                                    v-model="info.date"
                                                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                                    :placeholder="placeholder" )
                            b-col.m-0.my-3.border-bottom.border-darkgray( cols="12" )
                                div.w-100
                                    span.claridoo_finishing-title 4. Bisherige Stromlieferdaten
                                    button.claridoo_finishing-editing.float-right(
                                        type="button" @click="editable.provided = !editable.provided" )
                                        font-awesome-icon.when-closed( :icon="['fas', 'pencil-alt']" )
                                div.my-4.pl-4.font-weight-bold.w-100
                                    template( v-if="info.provideMeterData === 'direct'" )
                                        validation-provider( rules="required" name="Bisherige Zählernummer" v-slot="{ errors }" )
                                            label.d-block.text-violet( for="previousNumber" v-if="editable.provided") Bisherige Zählernummer
                                            input#previousNumber.d-block(
                                                :class="editable.provided ? 'claridoo_form-input' : 'border-0'"
                                                v-model="info.meterNumber"
                                                type="text"
                                                autocomplete="off"
                                                placeholder="Bisherige Zählernummer" )
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                        validation-provider( rules="required" name="Bisheriger Lieferant" v-slot="{ errors }" )
                                            label.d-block.text-violet( for="previousSupplier" v-if="editable.provided") Bisheriger Lieferant
                                            input#previousSupplier(
                                                :disabled="!editable.provided"
                                                :class="editable.provided ? 'claridoo_form-input' : 'border-0'"
                                                v-model="info.previousContractor"
                                                @input="findPreviousSupplier"
                                                type="text"
                                                placeholder="Bisheriger Lieferant"
                                                autocomplete="off" )
                                            b-list-group.mt-2( v-if="supplier" )
                                                b-list-group-item.autocomplete-result.pl-5( v-for="item in supplier" :key="item.bezeichnung"
                                                    @click="handlePreviousSupplier(item.bezeichnung)" ) {{ item.bezeichnung }}
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                        validation-provider( rules="required" name="Bisheriger Kundennummer" v-slot="{ errors }" )
                                            label.d-block.text-violet( for="previousContractNumber" v-if="editable.provided") Bisheriger Kundennummer
                                            input#previousContractNumber.d-block(
                                                :class="editable.provided ? 'claridoo_form-input' : 'border-0'"
                                                v-model="info.contractNumber"
                                                type="text"
                                                autocomplete="off"
                                                placeholder="Bisherige Kundennummer" )
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                    template( v-if="info.provideMeterData === 'email'" )
                                        p.font-weight-light.mb-0 Nein, reiche ich später per E-Mail nach
                                    template( v-if="info.provideMeterData === 'whatsapp'" )
                                        p.font-weight-light.mb-0 Nein, reiche ich später per WhatsApp nach
                                    button.claridoo_finishing-editing.float-right.my-4(
                                        type="button" v-if="editable.provided" @click="$root.$emit('from-where', true)" ) Änderungsart

                            b-col.m-0.my-3.border-bottom.border-darkgray( cols="12" )
                                div.w-100
                                    span.claridoo_finishing-title 5. Zahlungsinfos
                                    button.claridoo_finishing-editing.float-right(
                                        type="button" @click="editable.payment = !editable.payment; payment = false" )
                                        font-awesome-icon.when-closed( :icon="['fas', 'pencil-alt']" )
                                div.my-4.pl-4.font-weight-bold.w-100
                                    template( v-if="info.paymentMethod === 'sepa' && !payment")
                                        validation-provider( rules="required" name="Kontoinhaber/in" v-slot="{ errors }" )
                                            label.d-block.text-violet( for="sepaUser" v-if="editable.payment") Kontoinhaber/in
                                            input#sepaUser.d-block(
                                                :class="editable.payment ? 'claridoo_form-input' : 'border-0'"
                                                v-model="info.sepaFullname"
                                                type="text"
                                                autocomplete="off"
                                                placeholder="Kontoinhaber/in" )
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                        validation-provider( rules="required|iban" name="IBAN" v-slot="{ errors }" )
                                            label.d-block.text-violet( for="sepaIBAN" v-if="editable.payment") IBAN
                                            input#sepaIBAN.d-block(
                                                :class="editable.payment ? 'claridoo_form-input' : 'border-0'"
                                                v-model="info.sepaIBAN"
                                                type="text"
                                                autocomplete="off"
                                                placeholder="IBAN" )
                                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                .text-danger.pl-3
                                                    small.font-weight-bold {{ errors[0] }}
                                    template( v-if="info.paymentMethod === 'transfer' && !payment" )
                                        p.font-weight-light per Überweisung
                                    template( v-if="payment" )
                                        b-tabs#payments.claridoo_tabs-container
                                            b-tab( title="SEPA - LSV" title-item-class="font-weight-bold" @click="info.paymentMethod = 'sepa'")
                                                validation-provider( rules="required" name="Kontoinhaber/in" v-slot="{ errors }" )
                                                    input#sepaTabsUser.d-block.my-3(
                                                        :class="editable.payment ? 'claridoo_form-input' : 'border-0'"
                                                        v-model="info.sepaFullname"
                                                        type="text"
                                                        autocomplete="off"
                                                        placeholder="Kontoinhaber/in" )
                                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                        .text-danger.pl-3
                                                            small.font-weight-bold {{ errors[0] }}
                                                validation-provider( rules="required|iban" name="IBAN" v-slot="{ errors }" )
                                                    input#sepaTabsIBAN.d-block.my-3(
                                                        :class="editable.payment ? 'claridoo_form-input' : 'border-0'"
                                                        v-model="info.sepaIBAN"
                                                        type="text"
                                                        autocomplete="off"
                                                        placeholder="IBAN" )
                                                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                        .text-danger.pl-3
                                                            small.font-weight-bold {{ errors[0] }}
                                            b-tab( title="Überweisung" title-item-class="font-weight-bold" @click="info.paymentMethod = 'transfer'" )
                                                div.d-inline-flex.font-weight-light.my-3
                                                    validation-provider( rules="required" name="Überweisung" v-slot="{ errors }" )
                                                        b-form-checkbox.claridoo_checkbox-input( v-model="info.transferConsent" @change="info.transferConsent = !info.transferConsent" )
                                                        span.ml-3.my-2 Ich möchte lieber selbst jeden Monat per Überweisung zahlen.
                                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                                            .text-danger.pl-3
                                                                small.font-weight-bold {{ errors[0] }}
                                    button.claridoo_finishing-editing.float-right.my-4(
                                        type="button" v-if="editable.payment" @click="payment = true" ) Änderungsart
                        b-row.m-0.p-0
                            b-col.m-0.my-2.p-0( cols="12" )
                                div.d-inline-flex.font-weight-light
                                    b-form-checkbox.claridoo_checkbox-input( @change="acceptance.one = true" )
                                    span.ml-3 Ich akzeptiere die Allgemeinen Geschäftsbedingungen von claridoo by Alpiq Energie Deutschland GmbH.
                            b-col.m-0.my-2.p-0( cols="12" )
                                div.d-inline-flex.font-weight-light
                                    b-form-checkbox.claridoo_checkbox-input( @change="acceptance.two = true" )
                                    span.ml-3 Ich erteile claridoo by Alpiq Energie Deutschland GmbH die Vollmacht für mich einen Endkunden Messstellenvertrag auf Basis der
                                        a.open-link.d-inline &nbsp;Allgemeinen Geschäftsbedingungen der Discovergy GmbH
                                        | &nbsp;zu schließen. Im Rahmen des Messstellenbetriebs mithilfe des einzubauenden Smart Meters erteile ich auch die Einwilligung zur Datenerhebung und -speicherung durch die Discovergy GmbH und durch claridoo by Alpiq Energie Deutschland GmbH. Der Einbau des Smart Meters ist Voraussetzung für die Funktionalität von claridoo. Ich bin mir bewusst, dass von mir beauftragte, über den Standardeinbau hinausgehende Zusatzleistungen  separat in Rechnung gestellt werden. Über die anfallenden Kosten werde ich vorab informiert.
                            b-col.m-0.my-2.p-0( cols="12" )
                                div.d-inline-flex.font-weight-light
                                    b-form-checkbox.claridoo_checkbox-input( @change="acceptance.three = true" )
                                    span.ml-3 Ich erteile der Discovergy GmbH die anliegende Vollmacht zum Wechsel meines bisherigen Messstellenbetreibers und zur Kommunikation im Rahmen des Messstellenbetriebes.
                            b-col.m-0.my-2.p-0( cols="12" )
                                div.d-inline-flex.font-weight-light
                                    b-form-checkbox.claridoo_checkbox-input( @change="acceptance.four = true" )
                                    span.ml-3 Ja, um die Fördersumme von 60€ zu erhalten nehme ich zu Forschungszwecken am Förderprogramm Einsparzähler „Deutschland macht’s effizient” (Bundesministerium für Wirtschaft und Energie) teil und mache nachträglich Zusatzangaben. Die Fördersumme ist bereits im Tarifpreis enthalten.
                            b-col#finishing-tabs.m-0.my-2.p-0( cols="12" )
                                b-card.border-bottom.border-top( no-body )
                                    b-card-header(
                                        header-tag="header"
                                        role="tab" )
                                        div.d-flex.align-items-center
                                            span.claridoo_collapse-title.after-icon Preis inkl. Förderung
                                            img.ml-3.img-fluid( src="../assets/flag.svg" alt="Claridoo Flag" )
                                            button.claridoo_collapse-open-close(
                                                v-b-toggle.collapse-one
                                                type="button" )
                                                font-awesome-icon.when-opened( :icon="['fas', 'minus']" )
                                                font-awesome-icon.when-closed( :icon="['fas', 'plus']" )
                                    b-collapse#collapse-one.pt-2.pb-3(
                                        accordion="collapse-one-accordion"
                                        role="tabpanel")
                                        | Das Förderprogramm Einsparzähler „Deutschland macht’s effizient” ist eine Initiative des Bundesministeriums für Wirtschaft und Energie, um durch die Digitalisierung Energieeinsparungen bzw. Effizienzsteigerungen zu unterstützen. Die Fördersumme an dich beträgt 60€ und ist bereits im Tarif enthalten. Für deine Teilnahme fragen wir nachträglich folgende Daten über deinen Haushalt ab: Anzahl Personen, Anzahl Zimmer, Wohnfläche in m², Warmwasserart (Boiler mit Strom oder Gas, kein Boiler) und brauchen eine Kopie bzw. ein Foto deiner letzten Stromrechnung. Diese Daten übermitteln wir für Forschungszwecke über unseren Kooperationspartner (Discovergy GmbH) anonymisiert an das Bundesministerium für Wirtschaft und Energie.
                                        | Falls du nicht teilnehmen willst, ist dies vollkommen ok. Wir stellen dir dann eine Kompensationszahlung von 60€ nach Installtion des intelligenten Zählers in Rechnung.
                            b-col.m-0.p-0.my-4( cols="12" )
                                b-form-group.text-center
                                    b-button.claridoo_button(
                                        :disabled="!checkAcceptance"
                                        :class="!isMobile ? 'w-25' : 'w-100'"
                                        @click="submit"
                                        type="submit" ) Jetzt Bestellen
                            b-col.m-0.p-0.my-4( cols="12" )
                                a.open-link.d-block(  ) Bonitätsauskunft
                                a.open-link.d-block(  ) Auftragserteilung und Vollmachten
                                a.open-link.d-block(  ) Datenschutzerklärung claridoo & der Discovergy GmbH
                                a.open-link.d-block(  ) Widerrufsrecht claridoo & Widerrufserklärung von Discovergy

</template>

<script>
    export default {
        name: "FinishingComponent",
        props: {
            isMobile: null
        },
        filters: {
            sex(value) {
                switch (value) {
                    case 'Male':
                        return 'Herr';
                    case 'Female':
                        return 'Frau';
                }
            },
            house(value) {
                switch (value) {
                    case 'House':
                        return 'Haus';
                    case 'Apartment':
                        return 'Wohnung';
                }
            }
        },
        data() {
            const now = new Date();
            return {
                user: null,
                formatChars: {
                    '0': '[0-9]',
                    'a': '[A-Za-z]',
                    '*': '[A-Za-z0-9]'
                },
                holdTypeOptions: [
                    {text: 'Haus', value: 'House'},
                    {text: 'Wohnung', value: 'Apartment'}
                ],
                sexOptions: [
                    {text: 'Frau', value: 'Female'},
                    {text: 'Herr', value: 'Male'},
                ],
                info: {
                    zip: this.$store.getters.postcode,
                    city: this.$store.getters.user.city,
                    firstname: this.$store.getters.user.firstname,
                    lastname: this.$store.getters.user.lastname,
                    email: this.$store.getters.user.email,
                    phone: this.$store.getters.user.phone,
                    sex: this.$store.getters.user.sex,
                    birthdate: this.$store.getters.user.birthdate,
                    street: this.$store.getters.user.street,
                    house: this.$store.getters.user.house,
                    householdType: this.$store.getters.user.householdType,
                    invoicing_separate_address: this.$store.getters.user.invoicing_separate_address,
                    invoicing_zip: this.$store.getters.user.invoicing_zip,
                    invoicing_street: this.$store.getters.user.invoicing_street,
                    invoicing_house: this.$store.getters.user.invoicing_house,
                    reason: this.$store.getters.user.reason,
                    date: this.$store.getters.user.date,
                    provideMeterData: this.$store.getters.user.provideMeterData,
                    provideMeterDataEmail: this.$store.getters.user.provideMeterDataEmail,
                    whatsapp: this.$store.getters.user.whatsapp,
                    meterNumber: this.$store.getters.user.meterNumber,
                    previousContractor: this.$store.getters.user.previousContractor,
                    contractNumber: this.$store.getters.user.contractNumber,
                    registerAuthorization: this.$store.getters.user.registerAuthorization,
                    paymentMethod: this.$store.getters.user.paymentMethod,
                    sepaFullname: this.$store.getters.user.sepaFullname,
                    sepaIBAN: this.$store.getters.user.sepaIBAN,
                    transferConsent: this.$store.getters.user.transferConsent,
                    whatsappconsent: this.$store.getters.user.whatsappconsent,
                    emailconsentMeterData: this.$store.getters.user.emailconsentMeterData,
                    uuid: this.$store.getters.user.uuid,
                    step: this.$store.getters.user.step,
                },
                acceptance: {
                    one: null,
                    two: null,
                    three: null,
                    four: null,
                },
                editable: {
                    personal: false,
                    address: false,
                    switch: false,
                    provided: false,
                    payment: false
                },
                supplier: [],
                reasonOptions: [
                    {text: 'Wechsel zu CLARIDOO', value: 'switch'},
                    {text: 'Umzug / Einzug', value: 'moving'},
                    {text: 'Neubau', value: 'new'},
                ],
                min: null,
                max: null,
                placeholder: `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`,
                payment: false
            }
        },
        mounted() {
            this.user = this.$store.getters.user;
            this.resizeInput('firstName');
            this.$root.$on('choose-edited-type', (type) => {
                this.$bvModal.hide('type');
                this.info.provideMeterData = type;
            })
        },
        methods: {
            submit() {
                this.checkInfoObject();
                let object = this.info;
                object = Object.assign(this.user, object);
                this.$store.commit('user', object);
                this.$httpService.post(process.env.NODE_ENV === 'production' ? '/signup/prod/' : 'api/step-one', this.$store.getters.user)
                    .then(response => {
                        let user = this.$store.getters.user;
                        user.uuid = process.env.NODE_ENV === 'production' ? response.data.uuid : response.data.session.uuid;
                        user.step = '6';
                        this.$store.commit('user', user);
                        this.$store.commit('progress', 20);
                        this.$router.push({name: 'register.end'});
                    })
                    .catch(error => {
                        // eslint-disable-next-line no-prototype-builtins
                        if (error.hasOwnProperty('response')) {
                            switch (error.response.status) {
                                case 502:
                                    this.messages.error = error.response.data.error;
                                    return;
                                case 404:
                                    this.messages.notFound = error.response.data.error;
                                    return;
                            }
                        }
                    })
            },
            resizeInput(id) {
                const input = document.getElementById(id)
                input.setAttribute('size', input.value.length);
            },
            setReason() {
                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const minDate = new Date(today);
                const maxDate = new Date(today);
                switch (this.info.reason) {
                    case 'switch':
                        return;
                    case 'moving':
                        minDate.setMonth(minDate.getMonth() - 6);
                        maxDate.setMonth(maxDate.getMonth() + 6);
                        this.max = maxDate;
                        this.min = minDate;
                        return;
                    case 'new':
                        maxDate.setMonth(maxDate.getMonth() + 6);
                        this.max = maxDate;
                        this.min = minDate;
                        return;
                }
            },
            onContext(ctx) {
                this.info.date = ctx.selectedYMD.split('-').reverse().join('.')
            },
            findPreviousSupplier() {
                this.$httpService.get(process.env.NODE_ENV === 'production' ? `/ep/prod/?filter=${this.info.previousContractor}` : `api/supplier/${this.info.previousContractor}`)
                    .then(response => {
                        this.supplier = process.env.NODE_ENV === 'production' ? response.data : response.data.supplier;
                    })
                    .catch(error => {
                        console.log(error.response.data.error);
                    })
            },
            handlePreviousSupplier(supplier) {
                this.info.previousContractor = supplier;
                this.supplier = [];
            },
            checkInfoObject() {
                switch (this.info.provideMeterData) {
                    case 'email':
                        delete this.info.whatsapp;
                        delete this.info.previousContractor;
                        delete this.info.contractNumber;
                        delete this.info.meterNumber;
                        delete this.info.registerAuthorization;
                        delete this.info.whatsappconsent;
                        delete this.user.whatsapp;
                        delete this.user.previousContractor;
                        delete this.user.contractNumber;
                        delete this.user.meterNumber;
                        delete this.user.registerAuthorization;
                        delete this.user.whatsappconsent;
                        break;
                    case 'direct':
                        delete this.info.whatsapp;
                        delete this.info.provideMeterDataEmail;
                        delete this.info.whatsappconsent;
                        delete this.user.whatsapp;
                        delete this.user.provideMeterDataEmail;
                        delete this.user.whatsappconsent;
                        break;
                    case 'whatsapp':
                        delete this.info.provideMeterDataEmail;
                        delete this.info.previousContractor;
                        delete this.info.contractNumber;
                        delete this.info.meterNumber;
                        delete this.info.registerAuthorization;
                        delete this.info.emailconsentMeterData;
                        delete this.user.provideMeterDataEmail;
                        delete this.user.previousContractor;
                        delete this.user.contractNumber;
                        delete this.user.meterNumber;
                        delete this.user.registerAuthorization;
                        delete this.user.emailconsentMeterData;
                        break;
                }
                switch (this.info.paymentMethod) {
                    case 'sepa':
                        delete this.info.transferConsent;
                        delete this.user.transferConsent;
                        break;
                    case 'transfer':
                        delete this.info.sepaFullname;
                        delete this.info.sepaIBAN;
                        delete this.user.sepaFullname;
                        delete this.user.sepaIBAN;
                        break;
                }
                for (const key in this.info) {
                    if (!this.info[key]) {
                        delete this.info[key]
                    }
                }
            },
            choose(event, reason) {
                this.info.reason = reason;
                document.querySelectorAll('.reason-card-container').forEach(item => {
                    item.classList.contains('chosen') ?
                        item.classList.remove('chosen') : null;
                });
                if (event.target.classList.contains('reason-card-container')) {
                    event.target.classList.add('chosen');
                } else {
                    event.target.closest('.reason-card-container').classList.add('chosen')
                }
                const now = new Date();
                const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const minDate = new Date(today);
                const maxDate = new Date(today);
                switch (reason) {
                    case 'switch':
                        this.info.reason = reason;
                        return;
                    case 'moving':
                        minDate.setMonth(minDate.getMonth() - 6);
                        maxDate.setMonth(maxDate.getMonth() + 6);
                        this.max = maxDate;
                        this.min = minDate;
                        this.info.reason = reason;
                        return;
                    case 'new':
                        this.info.reason = reason;
                        maxDate.setMonth(maxDate.getMonth() + 6);
                        this.max = maxDate;
                        this.min = minDate;
                        return;
                }
            },
        },
        computed: {
            checkAcceptance() {
                for (let o in this.acceptance)
                    if (!this.acceptance[o]) return false;
                return true;
            }
        }
    }
</script>

<style scoped lang="scss">
    label {
        margin-top: .5rem;
        margin-bottom: .1rem;
        &.text-violet {
            color: #7907E7;
        }
    }

    @media (max-width: 992px) {
        p {
            padding-left: .7rem;
        }
    }

    .claridoo_form-input {
        width: 100%;
        border-radius: 100px!important;
        border: 2px solid #a1a1a1;
        height: 52px;
        font-weight: 500;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        &:focus {
            border-color: #a1a1a1;
            box-shadow: none;
            outline: none;
        }
        &::placeholder {
            font-weight: 500;
            color: #a1a1a1;
        }

    }

    .open-link {
        text-decoration: #9E9E9E underline;
        &:hover {
            cursor: pointer;
            text-decoration: #9E9E9E underline;
        }
    }
    .edit-info {
        font-size: 1.5rem;
        &:hover {
            cursor: pointer;
        }
    }
    #finishing-tabs {
        .claridoo_collapse-title {
            display: inline-block;
            float: left;
            color: #000A79;
        }

        .claridoo_collapse-open-close {
            display: inline-block;
            margin-left: auto;
            background: transparent;
            border: none;
            color: #7907E7!important;
        }

        button {
            &.claridoo_collapse-open-close {
                &.collapsed {
                    border: none;
                    background: transparent;
                    color: #7907E7;
                    & > .when-opened {
                        display: none;
                    }
                }
                &:not(.collapsed) {
                    border: none;
                    background: transparent;
                    & > .when-closed {
                        display: none;
                    }
                }
            }
        }

        & .card {
            border-radius: 0!important;
            border-left: none;
            border-right: none;
            border-bottom: none;
            border-top: 2px solid #4CF4CD;
            & header {
                &.card-header {
                    padding: 1rem 0 1rem 0;
                    border-bottom: none;
                    background: #fff;
                    font-weight: 600;
                }
            }
        }
    }
    input[type="text"][disabled="disabled"] {
        color: #000!important;
        -webkit-text-fill-color: #000!important;
        opacity: 1!important;
    }

    input[type="email"][disabled="disabled"] {
        color: #000!important;
        -webkit-text-fill-color: #000!important;
        opacity: 1!important;
    }

</style>
