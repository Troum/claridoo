<template lang="pug">
    b-modal#type( hide-footer hide-header no-close-on-backdrop size="lg" centered )
        div.text-center
            p.type-title {{ $store.getters.user ? $store.getters.user.firstname : '@name' }}, kennst du deine zählernummer?
        #types( v-if="!fromWhere" )
            div.types-card-container
                div.types-card( @click="choose($store.getters.types[0].type)" v-b-toggle.personal-four)
                    img.img-fluid( :src="`${$store.getters.types[0].icon}`" )
                    p.h4.text-center {{ $store.getters.types[0].title }}
            div.types-card-container
                div.types-card( @click="choose($store.getters.types[1].type)" v-b-toggle.personal-five)
                    img.img-fluid( :src="`${$store.getters.types[1].icon}`" )
                    p.h4.text-center {{ $store.getters.types[1].title }}
            div.types-card-container
                div.types-card( @click="choose($store.getters.types[2].type)" v-b-toggle.personal-five)
                    img.img-fluid( :src="`${$store.getters.types[2].icon}`" )
                    p.h4.text-center {{ $store.getters.types[2].title }}
        #fromWhere( v-else )
            div.types-card-container( v-for="item in $store.getters.types"
                :key="item.icon" )
                div.types-card( @click="chooseEdited(item.type)" )
                    img.img-fluid( @click="chooseEdited(item.type)" :src="`${item.icon}`" )
                    p.h4.text-center( @click="chooseEdited(item.type)" ) {{ item.title }}

</template>

<script>
    export default {
        name: "TypeRegistrationModal",
        data() {
            return {
                publicPath: process.env.BASE_URL,
                fromWhere: false
            }
        },
        mounted() {
            this.$root.$on('from-where', (info = null) => {
                if (info) {
                    this.fromWhere = true;
                    this.$bvModal.show('type')
                }
            })
        },
        methods: {
            choose(type) {
                this.$root.$emit('choose-type', type);
                this.$bvModal.hide('type');
            },
            chooseEdited(type) {
                this.$root.$emit('choose-edited-type', type);
            }
        }
    }
</script>

<style scoped lang="scss">
    .type-title {
        margin: 1.5rem auto 1.5rem auto;
        text-align: center;
        color: #000;
        font-weight: 500;
        font-size: 50px;
        @media (max-width: 992px) {
            font-size: 28px;
        }
    }
    #types, #fromWhere {
        display: grid;
        grid-template-columns: repeat(3, 260px);
        grid-template-rows: 1fr;
        margin-bottom: 10.75rem;
        @media (max-width: 992px) {
            width: 100%;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, auto);
            grid-row-gap: 5px;
        }
        & .types-card-container {
            display: block;
            margin-top: 0;
            &:hover {
                cursor: pointer;
            }
            &.chosen {
                & .types-card {
                    border: 2px solid #7907E7;
                }
            }
            & .types-card {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(3, calc(100% / 3));
                border: 2px solid #a9a9a9;
                border-radius: 10px;
                justify-items: center;
                align-items: center;
                width: 243px;
                height: 278px;
                @media (max-width: 992px) {
                    width: 100%;
                    height: auto;
                    grid-template-rows: repeat(2, calc(100% / 2));
                }
            }
        }
    }
</style>
