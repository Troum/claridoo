<template lang="pug">
    b-col.claridoo_start( cols="12" xl="6" )
        img.img-fluid.d-block.mx-auto.my-5( src="../assets/congrats.svg" alt="Claridoo Congrats")
        p.h2.claridoo_title.my-4 Super!
        div.font-weight-bold.text-navy.text-left.mt-5
            p.text-violet.font-weight-bold.border-bottom.h2 So geht es weiter
            p Wir senden dir am nächsten Werktag einen Uploadlink, damit du uns noch folgende Infos geben kannst:
            ul.claridoo_end
                li.d-flex.justify-content-start.align-items-center
                    b-input-group.d-flex.justify-content-start.align-items-center.checkmark
                        div.d-inline-block.mb-0.pl-2( style="line-height: 1" )
                            small &nbsp;&nbsp;Foto deines alten Zälers
                        b-input-group-append.ml-2
                            img#infoOne.img-fluid( src="../assets/info.svg" alt="Claridoo Email Info")
                            popover-component(
                                :title="''"
                                :content="'Wir nutzen das Foto deines alten Zählers um den sog. Precheck durchzuführen, also um zu sehen, ob deine Zähleraufhängung für den neuen, intelligenten Zähler geeignet ist. Falls du uns deine alte Zählernummer noch nicht gegeben hast, können wir diese so ebenfalls ermitteln'"
                                :target="'infoOne'"
                                :placement="'bottomright'"
                            )
                li.d-flex.justify-content-start.align-items-center.checkmark
                    b-input-group.d-flex.justify-content-start.align-items-center
                        div.d-inline-block.mb-0.pl-2( style="line-height: 1" )
                            small &nbsp;&nbsp;Foto deiner letzten Jahresrechnung
                        b-input-group-append.ml-2
                            img#infoTwo.img-fluid( src="../assets/info.svg" alt="Claridoo Email Info")
                            popover-component(
                                :title="''"
                                :content="'Wir brauchen das Foto deiner letzten Jahresrechnung damit du an der Einsparförderung “Deutschland macht’s effizient” teilnehmen kannst. Falls du nicht teilnehmen willst, musst du uns das Foto natürlich nicht senden. Falls du uns die Kundenummer deines Vorversorgers noch nicht gegeben hast, können wir diese so ebenfalls ermitteln.'"
                                :target="'infoTwo'"
                                :placement="'bottomright'"
                            )
                li.d-flex.justify-content-start.align-items-center
                    b-input-group.d-flex.justify-content-start.align-items-center.checkmark
                        div.d-inline-block.mb-0.pl-2( style="line-height: 1" )( :class="isMobile ? 'w-85' : ''"  )
                            small &nbsp;&nbsp;Beantwortung von 5 einfachen Fragen zu Deinem aktuellen Stromverbrauch
                        b-input-group-append.ml-xl-2( :class="isMobile ? 'w-10' : ''"  )
                            img#infoThree.img-fluid( src="../assets/info.svg" alt="Claridoo Email Info")
                            popover-component(
                                :title="''"
                                :content="'Wir brauchen die Antworten auf die 5 einfachen Fragen, damit du an der Einsparförderung “Deutschland macht’s effizient” teilnehmen kannst. Falls du nicht teilnehmen willst, musst du uns die Fragen natürlich nicht beantworten. Das Förderprogramm Einsparzähler „Deutschland macht’s effizient” ist eine Initiative des Bundesministeriums für Wirtschaft und Energie, um durch die Digitalisierung Energieeinsparungen bzw. Effizienzsteigerungen zu unterstützen. Die potenzielle Fördersumme an dich beträgt 60€ und ist bereits in deinem Tarif enthalten. Für deine Teilnahme fragen wir folgende Daten über deinen Haushalt ab: Anzahl Zimmer, Wohnfläche in m², Anzahl Personen, Warmwasserart (Boiler mit Strom oder Gas, kein Boiler) und brauchen eine Kopie bzw. ein Foto deiner letzten Stromrechnung. Diese Daten übermitteln wir für Forschungszwecke über unseren Kooperationspartner (Discovergy GmbH) anonymisiert an das Bundesministerium für Wirtschaft und Energie.'"
                                :target="'infoThree'"
                                :placement="isMobile ? 'left' : 'right'"
                            )
        p.text-violet.font-weight-bold.border-bottom.h2.mt-5 Per WhatsApp nachreichen
        p.text-navy.font-weight-bold Du kannst mit uns auch für alles Weitere auf WhatsApp schreiben und deine Fotos dort senden.
        p.text-navy.font-weight-bold Schreibe uns unter 0170 9339513
            span( v-if="isMobile" ) &nbsp;oder verbinde dich jetzt direkt:
        b-form-group.my-3.text-center
            b-button(
                :class="isMobile ? 'claridoo_button mb-3 w-100' : 'claridoo_button mb-3 w-35'"
                @click="whatsApp"
                type="button" )
                font-awesome-icon( v-if="isMobile" :icon="['fab', 'whatsapp']" size="2x")
                span( style="font-size: 22px" ) &nbsp;&nbsp;{{isMobile ? 'Jetzt WhatsApp' : 'Ende'}}
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
        },
        mounted() {
            Object.keys(this.$store.getters.user).length > 0 ? null : this.$router.push({name: 'home'});
        },
        methods: {
            whatsApp() {
                this.isMobile ?
                window.location.replace('https://wa.me/491709339513?text=Hallo%20claridoo%20Team%21') :
                    window.location.replace('https://claridoo.de')
            }
        }
    }
</script>

<style scoped lang="scss">
    .claridoo_end {
        display: block;
        width: 100%;
        list-style: none;
        padding-left: 0;
        text-align: left;
    }
    .checkmark {
        &::before {
            display: inline-block;
            content: url('~@/assets/checkmark.svg');
        }
    }
</style>
