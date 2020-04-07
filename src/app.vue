<script>
    import vHeader from "@/components/header/header";

    export default {
        name: 'app',
        components: {
            vHeader
        },
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="app">
        <v-header/>
        <router-view/>
    </div>
</template>


<style lang="scss">
    @import '@/styles/index.scss';
    @import '@/styles/variables.scss';

    .app {
        position: relative;
    }
</style>