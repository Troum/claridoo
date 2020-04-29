<template lang="pug">
    b-col.claridoo_header( cols="12" :class="isMobile ? 'shadow-sm' : ''")
        b-navbar.claridoo_navbar( toggleable="lg" )
            b-navbar-brand( @click="$routerService.routeTo('home')" )
                img.img-fluid( v-if="!isMobile" src="../assets/logo.svg" alt="Claridoo Logo")
                img.img-fluid( v-else src="../assets/mobile-logo.svg" alt="Claridoo Mobile Logo")
            b-collapse#navCollapse( is-nav )
                b-navbar-nav.claridoo_navbar-nav
                    b-nav-item(
                        v-for="item in $store.getters.menu"
                        :key="item.title" ) {{ item.title }}
</template>

<script>
    export default {
        name: "HeaderComponent",
        props: {
            isMobile: null
        }
    }
</script>

<style scoped>

</style>
