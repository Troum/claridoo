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
                                    :content="'Wir brauchen deine bisherige Zählernummer um deine Messstelle eindeutig zuordnen zu können.'"
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
                                    :content="'Um dich mit claridoo Smart Strom beliefern zu können, müssen wir wissen von wem du bisher deinen Strom beziehst.'"
                                    :target="'previous-supplier-info'"
                                    :placement="'right'"
                                )
                        b-form-input.claridoo_form-input#previousSupplier(
                            v-model="form.previousSupplier"
                            @input="findPreviousSupplier"
                            type="text"
                            autocomplete="off"
                            placeholder="Bisheriger Lieferant" )
                        b-list-group.mt-2( v-if="supplier" )
                            b-list-group-item.autocomplete-result.pl-5( v-for="item in supplier" :key="item.bezeichnung" @click="handlePreviousSupplier(item.bezeichnung, item.codenummer)" ) {{ item.bezeichnung }}
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
                                    :content="'Um dich mit claridoo Smart Strom beliefern zu können, müssen wir dich bei deinem vorherigen Lieferanten eindeutig zuordnen können.'"
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
                    b-button.claridoo_button(
                        :class="!isMobile ? 'w-75' : 'w-100'"
                        :disabled="!checkForm(form) || !valid"
                        v-b-toggle.personal-five
                        @click="stepThree"
                        type="button" ) Weiter
</template>

<script>
    export default {
        name: "CounterComponent",
        props: {
          isMobile: null,
          form: {},
          valid: null
        },
        data() {
            return {
                supplier: [],
                selectedSupplier: ''
            }
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
                    registerAuthorization: true,
                    previousCodenummer: this.form.previousCodenummer
                };
                object = Object.assign(object, user);
                this.$root.$emit('save-step', object);
                this.$httpService.post(process.env.NODE_ENV === 'production' ? '/signup/prod/' : 'api/step-one', this.$store.getters.user)
                    .then(response => {
                        let user = this.$store.getters.user;
                        user.uuid = process.env.NODE_ENV === 'production' ? response.data.uuid : response.data.session.uuid;
                        this.$root.$emit('save-step', object);
                        this.$store.commit('progress', 20);
                    })
            },
            findPreviousSupplier() {
                this.$httpService.get(process.env.NODE_ENV === 'production' ? `/ep/prod/?filter=${this.form.previousSupplier}` : `api/supplier/${this.form.previousSupplier}`)
                    .then(response => {
                        this.supplier = process.env.NODE_ENV === 'production' ? response.data : response.data.supplier;
                    })
            },
            handlePreviousSupplier(supplier, nummer) {
                this.form.previousSupplier = supplier;
                this.form.previousCodenummer = nummer;
                this.supplier = [];
            }
        }
    }
</script>

<style scoped>

</style>
