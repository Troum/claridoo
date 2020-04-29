<template lang="pug">
    b-col.claridoo_start( cols="12" xl="4" )
        p.h2.claridoo_title Fast geschafft!
        p.text-violet.text-center Bitte überprüfe nochmal deine Angaben
        p.h2.claridoo_title.border-bottom.my-5 5. Bisherige Zählernummer
        b-row.m-0.p-0
            b-col.m-0.p-0( cols="6" v-if="$store.getters.user.paymentMethod === 'sepa'" )
                p.text-violet.text-uppercase.font-weight-bold SEPA - LSV
            b-col.m-0.p-0( cols="6" v-if="$store.getters.user.paymentMethod === 'sepa'" )
                font-awesome-icon.edit-info.float-right.text-violet(
                    @click="openEdit"
                    role="button"
                    :icon="['fas', 'pencil-alt']" )
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
                        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor doloribus ducimus eaque esse eveniet ex exercitationem facilis nisi saepe! Consequatur culpa doloribus earum iusto obcaecati odit repudiandae sapiente ullam?
            b-col.m-0.p-0.my-4( cols="12" )
                b-form-group.text-center
                    b-button.claridoo_button(
                        :disabled="!checkAcceptance"
                        :class="!isMobile ? 'w-75' : 'w-100'"
                        @click="postData"
                        type="button" ) Jetzt Bestellen
            b-col.m-0.p-0.my-4( cols="12" )
                a.open-link.d-block(  ) Bonitätsauskunft
                a.open-link.d-block(  ) Auftragserteilung und Vollmachten
                a.open-link.d-block(  ) Datenschutzerklärung claridoo & der Discovergy GmbH
                a.open-link.d-block(  ) Widerrufsrecht claridoo & Widerrufserklärung von Discovergy

</template>

<script>
    export default {
        name: "Finishing",
        props: {
          isMobile: null
        },
        data() {
            return {
                acceptance: {
                    one: null,
                    two: null,
                    three: null,
                    four: null,
                }
            }
        },
        methods: {
            openEdit() {
                this.$bvModal.show('edit-modal');
            },
            postData() {
                this.$httpService.post(process.env.NODE_ENV === 'production' ? '/signup/prod/' : 'api/step-one', this.$store.getters.user)
                    .then(response => {
                        let user = this.$store.getters.user;
                        user.uuid = process.env.NODE_ENV === 'production' ? response.data.uuid : response.data.session.uuid;
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
            }
        },
        computed: {
            checkAcceptance() {
                for(let o in this.acceptance)
                    if(!this.acceptance[o]) return false;
                return true;
            }
        }
    }
</script>

<style scoped lang="scss">
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
</style>
