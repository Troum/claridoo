<template lang="pug">
    b-row.m-0.p-0
        b-col.m-0.p-0( cols="12" xl="6" )
            b-form.my-3
                validation-provider( rules="required|email" name="Email" v-slot="{ errors }")
                    b-form-group.my-2( label="Email*" )
                        b-input-group
                            b-form-input.claridoo_form-input.w-85#email-direct(
                                type="email"
                                autocomplete="off"
                                v-model="form.email"
                                placeholder="Email"
                            )
                            b-input-group-append.ml-3
                                img#email-info-component.img-fluid( src="../assets/info.svg" alt="Claridoo Telefonnummer Info")
                                popover-component(
                                    :title="'Email'"
                                    :content="'Lorem ipsum dolorem sit amet'"
                                    :target="'email-info-component'"
                                    :placement="'right'"
                                )
                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                        .text-danger.pl-3( v-if="errors[0]" )
                            small.font-weight-bold {{ errors[0] }}
                b-form-group.my-5
                    div.d-inline-flex.font-weight-light
                        b-form-checkbox.claridoo_checkbox-input( @change="form.emailconsentMeterData = !form.emailconsentMeterData" )
                        span.ml-3 Ich bin damit einverstanden Post von claridoo zu erhalten. Wir behandeln Deine Daten sicher gemäß Datenschutz. Du kannst Dich jederzeit vom Newsletter abmelden.
                b-form-group.my-5
                    p.text-violet.font-weight-bold Wie funktioniert das?
                    p Lorem (mit oder ohne Strom). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                b-form-group.text-center.text-xl-left
                    b-button.claridoo_button(
                        :disabled="!checkForm(form)"
                        :class="!isMobile ? 'w-75' : 'w-100'"
                        v-b-toggle.personal-five
                        @click="stepThree"
                        type="button" ) Weiter
</template>

<script>
    export default {
        name: "EmailComponent",
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
            stepThree() {
                let user = this.$store.getters.user;
                let object = {
                    provideMeterData: 'email',
                    emailconsentMeterData: this.form.emailconsentMeterData.toString()
                };
                object = Object.assign(object, user);
                this.$root.$emit('save-step', object);
            }
        }
    }
</script>

<style scoped>

</style>
