<template lang="pug">
    b-col.claridoo_start( cols="12" xl="6" )
        img.img-fluid.d-block.mx-auto.my-5( src="../assets/congrats.svg" alt="Claridoo Congrats")
        p.h2.claridoo_title.my-4 Super!
        div.font-weight-bold.text-navy.text-justify.mt-5
            p.text-violet.font-weight-bold.border-bottom.h2 So geht es weiter
            p Wir senden dir am nächsten Werktag einen Uploadlink, damit du uns noch folgende Infos geben kannst:
            ul.claridoo_end
                li.d-flex.justify-content-start.align-items-center
                    b-input-group.d-flex.justify-content-start.align-items-center
                        b-input-group-prepend.mr-2
                            img.img-fluid( src="../assets/checkmark.svg" alt="Claridoo Email Info")
                        small.mb-0 Foto deines alten Zälers
                        b-input-group-append.ml-2
                            img#infoOne.img-fluid( src="../assets/info.svg" alt="Claridoo Email Info")
                            popover-component(
                                :title="''"
                                :content="'Wir nutzen das Foto deines alten Zählers um den sog. Precheck durchzuführen, also um zu sehen, ob deine Zähleraufhängung für den neuen, intelligenten Zähler geeignet ist. Falls du uns deine alte Zählernummer noch nicht gegeben hast, können wir diese so ebenfalls ermitteln'"
                                :target="'infoOne'"
                                :placement="'bottomright'"
                            )
                li.d-flex.justify-content-start.align-items-center
                    b-input-group.d-flex.justify-content-start.align-items-center
                        b-input-group-prepend.mr-2
                            img.img-fluid( src="../assets/checkmark.svg" alt="Claridoo Email Info")
                        small.mb-0 Foto deiner letzten Jahresrechnung
                        b-input-group-append.ml-2
                            img#infoTwo.img-fluid( src="../assets/info.svg" alt="Claridoo Email Info")
                            popover-component(
                                :title="''"
                                :content="'Wir brauchen das Foto deiner letzten Jahresrechnung damit du an der Einsparförderung “Deutschland macht’s effizient” teilnehmen kannst. Falls du nicht teilnehmen willst, musst du uns das Foto natürlich nicht senden. Falls du uns die Kundenummer deines Vorversorgers noch nicht gegeben hast, können wir diese so ebenfalls ermitteln.'"
                                :target="'infoTwo'"
                                :placement="'bottomright'"
                            )
                li.d-flex.justify-content-start.align-items-center
                    b-input-group.d-flex.justify-content-start.align-items-center
                        b-input-group-prepend.mr-1( :class="isMobile ? 'w-5' : ''" )
                            img.img-fluid( src="../assets/checkmark.svg" alt="Claridoo Email Info")
                        small.mb-0( :class="isMobile ? 'w-75' : ''"  ) Beantwortung von 5 einfachen Fragen zu Deinem aktuellen Stromverbrauch
                        b-input-group-append.ml-xl-2( :class="isMobile ? 'w-10' : ''"  )
                            img#infoThree.img-fluid( src="../assets/info.svg" alt="Claridoo Email Info")
                            popover-component(
                                :title="''"
                                :content="'Wir brauchen die Antworten auf die 5 einfachen Fragen, damit du an der Einsparförderung “Deutschland macht’s effizient” teilnehmen kannst. Falls du nicht teilnehmen willst, musst du uns die Fragen natürlich nicht beantworten. Das Förderprogramm Einsparzähler „Deutschland macht’s effizient” ist eine Initiative des Bundesministeriums für Wirtschaft und Energie, um durch die Digitalisierung Energieeinsparungen bzw. Effizienzsteigerungen zu unterstützen. Die potenzielle Fördersumme an dich beträgt 60€ und ist bereits in deinem Tarif enthalten. Für deine Teilnahme fragen wir folgende Daten über deinen Haushalt ab: Anzahl Zimmer, Wohnfläche in m², Anzahl Personen, Warmwasserart (Boiler mit Strom oder Gas, kein Boiler) und brauchen eine Kopie bzw. ein Foto deiner letzten Stromrechnung. Diese Daten übermitteln wir für Forschungszwecke über unseren Kooperationspartner (Discovergy GmbH) anonymisiert an das Bundesministerium für Wirtschaft und Energie.'"
                                :target="'infoThree'"
                                :placement="'bottom'"
                            )
        p.text-violet.font-weight-bold.border-bottom.h2.mt-5 Per WhatsApp nachreichen
        p.text-navy.font-weight-bold Du kannst mit uns auch für alles Weitere auf WhatsApp schreiben und deine Fotos dort senden.
        p.text-navy.font-weight-bold Schreibe uns unter 0170 9339513
            span( v-if="isMobile" ) &nbsp;oder verbinde dich jetzt direkt:
        b-button.claridoo_button.mx-auto.w-100(
            v-if="isMobile"
            @click="whatsApp"
            type="button" )
            font-awesome-icon( :icon="['fab', 'whatsapp']" size="2x")
            span( style="font-size: 22px" ) &nbsp;&nbsp;Jetzt WhatsApp
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
        methods: {
            whatsApp() {
                window.location.replace('https://wa.me/4901709339513')
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
</style>
