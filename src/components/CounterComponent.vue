<template lang="pug">
    b-form.my-3
        b-row.m-0.p-0
            b-col.p-0.m-0( cols="12" xl="6" )
                validation-provider( name="Bisherige Zählernummer" rules="required" v-slot="{ errors }")
                    b-form-group.my-2
                        b-input-group.my-2.d-flex.justify-content-start.align-items-center
                            label.mb-0 Bisherige Zählernummer**
                            b-input-group-append
                                img#counter-info.img-fluid.ml-2( src="../assets/info.svg" alt="Claridoo Email Info")
                                popover-component(
                                    :title="'Bisherige Zählernummer'"
                                    :content="'Lorem ipsum dolorem sit amet'"
                                    :target="'counter-info'"
                                    :placement="'right'"
                                )
                        b-form-input.claridoo_form-input#counterNumber(
                            v-model="form.counterNumber"
                            type="text"
                            autocomplete="off"
                            placeholder="Bisherige Zählernummer" )
                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                            .text-danger.pl-3( v-if="errors[0]" )
                                small.font-weight-bold {{ errors[0] }}
                validation-provider( name="Bisheriger Lieferant" rules="required" v-slot="{ errors }")
                    b-form-group.my-2
                        b-input-group.my-2.d-flex.justify-content-start.align-items-center
                            label.mb-0 Bisheriger Lieferant*
                            b-input-group-append
                                img#previous-supplier-info.img-fluid.ml-2( src="../assets/info.svg" alt="Claridoo Email Info")
                                popover-component(
                                    :title="'Bisheriger Lieferant*'"
                                    :content="'Lorem ipsum dolorem sit amet'"
                                    :target="'previous-supplier-info'"
                                    :placement="'right'"
                                )
                        b-form-input.claridoo_form-input#previousSupplier(
                            v-model="form.previousSupplier"
                            type="text"
                            autocomplete="off"
                            placeholder="Bisheriger Lieferant" )
                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                            .text-danger.pl-3( v-if="errors[0]" )
                                small.font-weight-bold {{ errors[0] }}
                validation-provider( name="Bisherige Kundennummer" rules="required" v-slot="{ errors }")
                    b-form-group.my-2
                        b-input-group.my-2.d-flex.justify-content-start.align-items-center
                            label.mb-0 Bisherige Kundennummer*
                            b-input-group-append
                                img#previous-customer-number.img-fluid.ml-2( src="../assets/info.svg" alt="Claridoo Email Info")
                                popover-component(
                                    :title="'Bisherige Kundennummer'"
                                    :content="'Lorem ipsum dolorem sit amet'"
                                    :target="'previous-customer-number'"
                                    :placement="'right'"
                                )
                        b-form-input.claridoo_form-input#previousCustomerNumber(
                            v-model="form.previousCustomerNumber"
                            type="text"
                            autocomplete="off"
                            placeholder="Bisherige Kundennummer" )
                        transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                            .text-danger.pl-3( v-if="errors[0]" )
                                small.font-weight-bold {{ errors[0] }}
                b-form-group.my-5
                    div.d-inline-flex.font-weight-light
                        b-form-checkbox.claridoo_checkbox-input( @change="form.agree = !form.agree" )
                        span.ml-3 Ich bevollmächtige claridoo by Alpiq Energie Deutschland GmbH zur Kündigung meines bestehenden Stromlieferungsvertrags für meine oben genannte Lieferstelle. Bei Nichtzustimmung werde ich selbtständig meinen voherigen Stromliefervertrag kündigen und den claridoo Kundenservice über die Kündigung informieren.
                b-form-group.my-5
                    b-button.claridoo_button(
                        :class="!isMobile ? 'w-75' : 'w-100'"
                        :disabled="!checkForm(form)"
                        v-b-toggle.personal-five
                        @click="stepThree"
                        type="button" ) Weiter
</template>

<script>
    export default {
        name: "CounterComponent",
        props: {
          isMobile: null,
          form: {}
        },
        mounted() {
            this.$store.commit('progress', 20);
        },
        methods: {
            checkForm(form) {
                const values = Object.values(form);
                return !values.includes(null);
            },
            stepThree(){
                let user = this.$store.getters.user;
                let object = {
                    provideMeterData: 'direct',
                    meterNumber: this.form.counterNumber,
                    previousContractor: this.form.previousSupplier,
                    contractNumber: this.form.previousCustomerNumber,
                    registerAuthorization: this.form.agree.toString()
                };
                object = Object.assign(object, user);
                this.$root.$emit('save-step', object);
            }
        }
    }
</script>

<style scoped>

</style>
