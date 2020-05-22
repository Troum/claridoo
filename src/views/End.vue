<template lang="pug">
    b-col.claridoo_start( cols="12" xl="4" )
        img.img-fluid.d-block.mx-auto.my-5( src="../assets/congrats.svg" alt="Claridoo Congrats")
        p.text-navy.h5 Deine Bestellung ist bei uns eingegangen und wir haben Dir eine Auftragsbestaätigung per E-Mail geschickt.
        p.text-navy.h5 In den nächsten Tagen melden wir uns bei Dir.
        p.h2.claridoo_title.border-bottom.my-4 Per WhatsApp nachreichen
        validation-observer( ref="observer" v-slot="{ passes }" )
            b-form.my-3
                validation-provider( rules="required" name="WhatsApp nummer" v-slot="{ errors }")
                    b-form-group.my-2( label="WhatsApp nummer*" )
                        b-input-group
                            input-mask#whatsAppPhone.claridoo_form-input.pl-3.w-90(
                                type="text" v-model="form.phone"
                                :format-chars="formatChars"
                                maskChar=""
                                mask="+4900000000000"
                                placeholder="Telefonnummer" autocomplete="off")
                            b-input-group-append.ml-3
                                img#whatsApp-info.img-fluid( src="../assets/info.svg" alt="Claridoo WhatsApp nummer Info")
                                popover-component(
                                    :title="'WhatsApp nummer'"
                                    :content="'Lorem ipsum dolorem sit amet'"
                                    :target="'whatsApp-info'"
                                    :placement="'right'"
                                )
                b-form-group.my-5
                    div.d-inline-flex.font-weight-light
                        b-form-checkbox.claridoo_checkbox-input( @change="form.agree = !form.agree" )
                        span.ml-3 Ich bin damit einverstanden Post von claridoo zu erhalten.
                b-form-group.my-5
                    p.text-violet.font-weight-bold Wie funktioniert das?
                    p Lorem (mit oder ohne Strom). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                b-form-group.text-center
                    b-button.claridoo_button(
                        :class="!isMobile ? 'w-75' : 'w-100'"
                        @click=""
                        type="button" ) Jetzt Whatsapp
</template>

<script>
    export default {
        name: "End",
        props: {
            isMobile: null
        },
        data() {
            const phone = this.$store.getters.user.phone ? this.$store.getters.user.phone : null;
            return {
                form: {
                    phone: phone,
                    agree: false
                },
                formatChars: {
                    '0': '[0-9]',
                    'a': '[A-Za-z]',
                    '*': '[A-Za-z0-9]'
                }
            }
        }
    }
</script>

<style scoped>

</style>
