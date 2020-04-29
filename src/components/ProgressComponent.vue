<template lang="pug">
    b-progress.claridoo_progress( v-if="$store.getters.progress > 0" :max="100" )
        b-progress-bar( variant="success" :value="$store.getters.progress" )
</template>

<script>
    export default {
        name: "ProgressComponent"
    }
</script>
<style lang="scss" scoped>
    .claridoo_progress {
        z-index: 2;
        height: .35rem;
        border-radius: 0;
        width: 100%;
        & .progress-bar {
            &.bg-success {
                background: linear-gradient(90deg, #86FFEA 6.5%, #4CF4CD 92.5%) !important;
            }
        }
    }
</style>
