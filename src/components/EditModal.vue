<template lang="pug">
    b-modal#edit-modal( hide-footer size="lg" centered )
        template( v-slot:modal-header )
            div.m-0.p-0.w-100
                font-awesome-icon.close-modal( :icon="['fas', 'times']"
                    @click="$bvModal.hide('edit-modal')" )
        div.text-center
            p.h2.text-violet Bearbeiten Sie Zahlungsinformationen, wenn sie benötigt werden
        validation-observer( ref="observer" )
            b-form.p-2.p-xl-4
                b-form-group
                    validation-provider( name="Kontoinhaber/in" rules="required" v-slot="{ errors }")
                        b-form-group.my-4( label="Kontoinhaber/in*" )
                            b-form-input.claridoo_form-input( type="text"
                                autocomplete="off"
                                v-model="form.name" placeholder="Kontoinhaber/in")
                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                .text-danger.pl-3( v-if="errors[0]" )
                                    small.font-weight-bold {{ errors[0] }}
                    validation-provider( name="IBAN" rules="required|min:16" v-slot="{ errors }")
                        b-form-group.my-4( label="IBAN*" )
                            b-form-input.claridoo_form-input( type="text" v-model="form.iban"
                                @input="validateIBAN"
                                autocomplete="off"
                                placeholder="IBAN" )
                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                .text-danger.pl-3( v-if="errors[0]" )
                                    small.font-weight-bold {{ errors[0] }}
                            transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                                .text-danger.pl-3( v-if="$store.getters.isValid" )
                                    small.font-weight-bold {{ $store.getters.isValid }}
                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                        div( v-if="form.info.hasOwnProperty('response')" )
                            b-form-group.my-4( label="Bank" )
                                b-form-input.claridoo_form-input( type="text" v-model="form.info.bank"
                                    autocomplete="off"
                                    placeholder="Bank" )
                    transition( enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" )
                        div( v-if="form.info.hasOwnProperty('bank')" )
                            b-form-group.my-4( label="Bank" )
                                b-form-input.claridoo_form-input( type="text" v-model="form.info.bank"
                                    autocomplete="off"
                                    placeholder="Bank" )
                            b-form-group.my-4( label="Ort" )
                                b-form-input.claridoo_form-input( type="text" v-model="form.info.ort"
                                    autocomplete="off"
                                    placeholder="Ort" )
                            b-form-group.my-4( label="BIC" )
                                b-form-input.claridoo_form-input( type="text" v-model="form.info.bic"
                                    autocomplete="off"
                                    placeholder="BIC" )
                            b-form-group.my-4( label="Postleitzeil" )
                                b-form-input.claridoo_form-input( type="text" v-model="form.info.plz"
                                    autocomplete="off"
                                    placeholder="Postleitzeil" )
                    b-form-group.my-5
                        div.d-inline-flex.font-weight-light
                            b-form-checkbox.claridoo_checkbox-input( @change="form.agree = !form.agree" )
                            span.ml-3 Durch das Angeben der IBAN ermächtige ich claridoo by Alpiq Energie Deutschland GmbH widerruflich, fällige Zahlungen von obengenanntem Konto einzuziehen.
                    b-form-group.my-5
                        div.d-inline-flex.font-weight-light
                            b-form-checkbox.claridoo_checkbox-input( @change="form.perMonth = !form.perMonth" )
                            span.ml-3 Ich möchte lieber selbst jeden Monat per Überweisung zahlen.
        b-form-group.text-center
                    b-button.claridoo_button(
                        :class="!isMobile ? 'w-75' : 'w-100'"
                        :disabled="!form.agree"
                        @click="postData"
                        type="button" ) Weiter

</template>

<script>
    export default {
        name: "EditModal",
        props: {
            isMobile: null
        },
        data() {
            const name = this.$store.getters.user.firstname || this.$store.getters.user.lastname ?
                `${this.$store.getters.user.firstname} ${this.$store.getters.user.lastname}` :
                'Erika Mustermann';
            const iban = this.$store.getters.ibanNumber ? this.$store.getters.ibanNumber : null;
            const perMonth = this.$store.getters.iban.perMonth ? this.$store.getters.iban.perMonth : false;
            const agree = this.$store.getters.iban.agree ? this.$store.getters.iban.agree : false;
            const info = this.$store.getters.iban.info ? this.$store.getters.iban.info : {};
            return {
                form: {
                    name: name,
                    iban: iban,
                    perMonth: perMonth,
                    agree: agree,
                    info: info
                }
            }
        },
        methods: {
            validateIBAN() {
                this.$httpService.get(`api/validate-iban/${this.form.iban}`)
                    .then(response => {
                        this.form.info = response.data.info;
                        this.$store.commit('iban', this.form);
                        this.$store.commit('isValid', null)
                    })
                    .catch(error => {
                        this.$store.commit('iban', error.response.data.error);
                        this.$store.commit('isValid', error.response.data.error)
                    });
            },
            postData() {
            }
        }
    }
</script>

<style scoped lang="scss">
    .close-modal {
        color: #9E9E9E;
        font-size: 28px;
        font-weight: 200;
        &:hover {
            cursor: pointer;
        }
    }
</style>
