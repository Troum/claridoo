<template lang="pug">
    b-col.claridoo_header( cols="12" :class="isMobile && $store.getters.progress > 0 ? 'shadow' : ''")
        b-container( v-if="!isMobile" )
            b-navbar.claridoo_navbar( toggleable="lg" :class="isMobile && $store.getters.progress > 0 ? 'shadow' : ''")
                b-navbar-brand( @click="toHome" style="margin-right: 1rem; max-width: 160px")
                    img.img-fluid( @click="toHome" v-if="!isMobile" src="../assets/logo.svg" alt="Claridoo Logo")
                    img.img-fluid( @click="toHome" v-else src="../assets/mobile-logo.svg" alt="Claridoo Mobile Logo")
                b-collapse#navCollapse( is-nav )
                    b-navbar-nav.claridoo_navbar-nav
                        b-nav-item.mr-4.font-weight-bold(
                            v-for="item in $store.getters.menu"
                            :key="item.title" ) {{ item.title }}
        b-navbar.claridoo_navbar( v-if="isMobile" toggleable="lg" :class="isMobile ? 'shadow' : ''")
            b-navbar-brand( @click="toHome" )
                img.img-fluid( @click="toHome" v-if="!isMobile" src="../assets/logo.svg" alt="Claridoo Logo")
                img.img-fluid( @click="toHome" v-else src="../assets/mobile-logo.svg" alt="Claridoo Mobile Logo")
            b-collapse#navCollapse( is-nav )
                b-navbar-nav.claridoo_navbar-nav
                    b-nav-item.mr-4.font-weight-bold(
                        v-for="item in $store.getters.menu"
                        :key="item.title" ) {{ item.title }}
</template>

<script>
    export default {
        name: "HeaderComponent",
        props: {
            isMobile: null
        },
        methods: {
            toHome() {
                window.location.replace('https://claridoo.de')
            }
        }
    }
</script>

<style scoped>

</style>
