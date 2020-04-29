<template lang="pug">
        b-form.my-3
            b-form-group.my-5
                b-tabs#payments-tabs.claridoo_tabs-container
                    b-tab( title="SEPA - LSV" title-item-class="font-weight-bold" @click="choosePayment" )
                        b-row.m-0.p-0
                            b-col.p-0.m-0( cols="12" xl="6" )
                                validation-provider( name="Kontoinhaber/in" rules="required" v-slot="{ errors }")
                                    b-form-group.my-4( label="Kontoinhaber/in*" )
                                        b-form-input.claridoo_form-input( type="text"
                                            autocomplete="off"
                                            v-model="formSepa.sepaFullname" placeholder="Kontoinhaber/in")
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3( v-if="errors[0]" )
                                                small.font-weight-bold {{ errors[0] }}
                                validation-provider( name="IBAN" rules="required|min:16|iban" v-slot="{ errors }")
                                    b-form-group.my-4( label="IBAN*" )
                                        b-form-input.claridoo_form-input( type="text" v-model="formSepa.sepaIban"
                                            autocomplete="off"
                                            placeholder="IBAN" )
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3( v-if="errors[0]" )
                                                small.font-weight-bold {{ errors[0] }}
                                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                            .text-danger.pl-3( v-if="$store.getters.isValid" )
                                                small.font-weight-bold {{ $store.getters.isValid }}
                                b-form-group.my-5
                                    div.d-inline-flex.font-weight-light
                                        b-form-checkbox.claridoo_checkbox-input( @change="formSepa.sepaConsent = !formSepa.sepaConsent" )
                                        span.ml-3 Durch das Angeben der IBAN ermächtige ich claridoo by Alpiq Energie Deutschland GmbH widerruflich, fällige Zahlungen von obengenanntem Konto einzuziehen.
                                b-form-group.text-center.text-xl-left
                                    b-button.claridoo_button(
                                        :class="!isMobile ? 'w-75' : 'w-100'"
                                        :disabled="!checkForm(formSepa)"
                                        @click="$root.$emit('register', paymentMethod)"
                                        type="button" ) Weiter
                    b-tab( title="Überweisung" @click="choosePayment" title-item-class="font-weight-bold")
                        b-row.m-0.p-0
                            b-col.p-0.m-0( cols="12" xl="6" )
                                b-form-group.my-5
                                    div.d-inline-flex.font-weight-light
                                        b-form-checkbox.claridoo_checkbox-input( @change="formTransfer.transferConsent = !formTransfer.transferConsent" )
                                        span.ml-3 Ich möchte lieber selbst jeden Monat per Überweisung zahlen.
                                b-form-group.text-center.text-xl-left
                                    b-button.claridoo_button(
                                        :class="!isMobile ? 'w-75' : 'w-100'"
                                        :disabled="!formTransfer.transferConsent"
                                        @click="$root.$emit('register', paymentMethod)"
                                        type="button" ) Weiter
</template>

<script>
    export default {
        name: "Payment",
        props: {
          isMobile: null,
          formSepa: {},
          formTransfer:{}
        },
        data() {
          return {
              paymentMethod: null
          }
        },
        methods: {
            checkForm(form) {
                const values = Object.values(form);
                return !values.includes(null);
            },
            choosePayment(event) {
                switch (event.target.getAttribute('aria-posinset')) {
                    case '1':
                        this.paymentMethod = 'sepa';
                        break;
                    case '2':
                        this.paymentMethod = 'transfer';
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>
