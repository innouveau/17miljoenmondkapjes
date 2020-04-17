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
        <div class="pagewrap">
            <div class="content">
                Wij ondersteunen het initiatief
                <a href="https://www.mondkapjesmakennederland.nl">www.mondkapjesmakennederland.nl</a>.
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';
    @import '@/styles/index.scss';

    .app {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;

        .popup {
            position: fixed;
            lefT: 0;
            top: 0;
            width: 100%;
            background: yellow;
            padding: 10px;
        }
    }
</style>