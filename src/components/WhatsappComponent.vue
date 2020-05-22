<template lang="pug">
    b-form.my-3
        b-row.m-0.p-0
            b-col.m-0.p-0( cols="12" xl="6" )
                validation-provider( rules="required" name="WhatsApp nummer" v-slot="{ errors }")
                    b-form-group.my-2( label="WhatsApp nummer*" )
                        b-input-group
                            input-mask#whatsAppNummer.claridoo_form-input.w-90.pl-3(
                                type="text" v-model="form.whatsapp"
                                :format-chars="formatChars"
                                maskChar=""
                                mask="+4900000000000"
                                placeholder="WhatsApp nummer" autocomplete="off")
                            b-input-group-append.ml-3
                                img#whatsapp-info.img-fluid( src="../assets/info.svg" alt="Claridoo Telefonnummer Info")
                                popover-component(
                                    :title="'WhatsApp'"
                                    :content="'Lorem ipsum dolorem sit amet'"
                                    :target="'whatsapp-info'"
                                    :placement="'right'"
                                )
                b-form-group.my-5
                    div.d-inline-flex.font-weight-light
                        b-form-checkbox.claridoo_checkbox-input( @change="form.whatsappconsent = !form.whatsappconsent" )
                        span.ml-3 Ich bevollmächtige claridoo by Alpiq Energie Deutschland GmbH zur Kündigung meines bestehenden Stromlieferungsvertrags für meine oben genannte Lieferstelle. Bei Nichtzustimmung werde ich selbtständig meinen voherigen Stromliefervertrag kündigen und den claridoo Kundenservice über die Kündigung informieren.
                b-form-group.my-5
                    p.text-violet.font-weight-bold Wie funktioniert das?
                    p Lorem (mit oder ohne Strom). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                b-form-group.text-center
                    b-button.claridoo_button(
                        :class="!isMobile ? 'w-75' : 'w-100'"
                        :disabled="!checkForm(form)"
                        v-b-toggle.personal-five
                        @click="stepThree"
                        type="button" ) Weiter
</template>

<script>
    export default {
        name: "WhatsappComponent",
        props: {
          isMobile: null,
          form: {}
        },
        data() {
          return {
              formatChars: {
                  '0': '[0-9]',
                  'a': '[A-Za-z]',
                  '*': '[A-Za-z0-9]'
              }
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
            stepThree() {
                let user = this.$store.getters.user;
                let object = {
                    provideMeterData: 'whatsapp',
                    whatsapp: this.form.whatsapp,
                    whatsappconsent: this.form.whatsappconsent.toString()
                };
                object = Object.assign(object, user);
                this.$root.$emit('save-step', object);
                this.$httpService.post(process.env.NODE_ENV === 'production' ? '/signup/prod/' : 'api/step-one', this.$store.getters.user)
                    .then(response => {
                        let user = this.$store.getters.user;
                        user.uuid = process.env.NODE_ENV === 'production' ? response.data.uuid : response.data.session.uuid;
                        user.step = '4';
                        this.$root.$emit('save-step', object);
                        this.$store.commit('progress', 20);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
