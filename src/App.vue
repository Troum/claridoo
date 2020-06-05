<template lang="pug">
  b-container#app.m-0.p-0( fluid )
    b-row.m-0.p-0
        header-component( :isMobile="isMobile" )
        progress-component( v-if="isMobile" )
        alert-component( v-if="isMobile" )
    b-row.m-0.p-0
        transition(
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in" )
            router-view( :isMobile="isMobile" )
    b-row.claridoo_footer( v-if="$route.name !== 'home'" )
        b-col.m-0.claridoo_footer-info
            p.mb-0 &copy;&nbsp;2010 &mdash;&nbsp;{{new Date().getFullYear()}} Privacy &mdash; Terms
    type-modal( :isMobile="isMobile" )
    edit-modal( :isMobile="isMobile" )
</template>
<script>
    import {isMobile} from "mobile-device-detect";
    export default {
        data() {
            return {
                isMobile: isMobile
            }
        }
    }
</script>
<style lang="scss" scoped>
    .claridoo_footer {
        height: 120px;
        background: #fff;
        margin: 0;
        padding: 0;
        & .claridoo_footer-info {
            padding-top: 53px;
            padding-left: 53px;
            color: #616161;
            font-size: 16px;
            font-weight: normal;
        }
    }
</style>
