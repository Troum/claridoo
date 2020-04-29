<template lang="pug">
    b-modal#type( hide-footer size="lg" centered )
        template( v-slot:modal-header )
            div.m-0.p-0.w-100
                font-awesome-icon.close-modal( :icon="['fas', 'times']"
                    @click="$bvModal.hide('type')" )
        div.text-center
            p.type-title {{ $store.getters.user ? $store.getters.user.firstname : '@name' }}, kennst du deine zählernummer?
        #types
            div.types-card-container( v-for="item in $store.getters.types"
                :key="item.icon" )
                div.types-card( @click="choose(item.type)" )
                    img.img-fluid( @click="choose(item.type)" :src="`./images/${item.icon}`" )
                    p.h4.text-center( @click="choose(item.type)" ) {{ item.title }}

</template>

<script>
    export default {
        name: "TypeRegistrationModal",
        methods: {
            choose(type) {
                this.$root.$emit('choose-type', type);
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
    .close-modal {
        color: #9E9E9E;
        font-size: 28px;
        font-weight: 200;
        &:hover {
            cursor: pointer;
        }
    }
    #types {
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
