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

        <div class="popup">
            We zijn hard bezig 17miljoenmondkapjes.nl uit de grond aan het stampen.<br>
            Hopelijk zijn we over 48 uur klaar om (echt) live te gaan.
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/index.scss';
    @import '@/styles/variables.scss';

    .app {
        position: relative;
        margin-top: 80px;

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