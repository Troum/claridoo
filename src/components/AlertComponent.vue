<template lang="pug">
    b-alert.shadow-sm.claridoo_alert-position( v-if="$store.getters.month" v-model="show" variant="secondary")
        b-row.m-0.h-100
            b-col.p-2.mh-100( cols="6" )
                p.font-weight-bold.mb-0 {{$store.getters.info.tarif}}&nbsp;
                p.font-weight-light.mb-0
                    small bei {{ $store.getters.info.quantity }} kWh / Jahr
            b-col.p-2.mh-100( cols="4" )
                p.font-weight-bold.month-price.mb-0.text-right {{ $filtersService.currencyFormat($store.getters.month) }}&nbsp;
                    font-awesome-icon( :icon="['fas', 'euro-sign']" )
                    small.d-block &nbsp;/ Monat
            b-col.mh-100.d-flex.justify-content-center.align-items-center( cols="2" )
                button.claridoo_dismiss-alert( type="button" @click="dismissAlert" )
                    font-awesome-icon( :icon="['fas', 'times']" )

</template>

<script>
    export default {
        name: "AlertComponent",
        data() {
            return {
                show: false
            }
        },
        mounted() {
            this.$root.$on('show-alert', () => {
                this.show = true;
            })
        },
        methods: {
            dismissAlert() {
                this.show = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .claridoo_alert-position {
        width: 100%;
        position: relative;
        margin: 0 0 auto 0;
        border-radius: 0;
        border: none;
        z-index: 9999;
        height: 66px;
        background-color: #fff;
        padding: 0;
        & .month-price {
            font-size: 1.2rem;
            & i.fas {
                font-size: 1rem;
            }
        }
        & .claridoo_dismiss-alert {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: none;
            background-color: rgba(118, 118, 128, 0.12);
            color: rgba(60, 60, 67, 0.6);
            &:focus {
                outline: none;
                box-shadow: none;
            }
        }
    }
</style>
