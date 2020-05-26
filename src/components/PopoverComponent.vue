<template lang="pug">
    b-popover(
        :content="content"
        :target="`${target}`" :placement="placement"
        fallback-placement="clockwise" triggers="hover")
        template( v-slot:title )
            p.text-violet.font-weight-bold.mb-0.text-center.bg-white {{ title }}
</template>

<script>
    export default {
        name: "PopoverComponent",
        props: {
            target: null,
            title: null,
            content: null,
            placement: null
        }
    }
</script>

