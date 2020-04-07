<script>
    import identity from "./identity";
    import vMenu from "./menu";

    export default {
        name: 'v-header',
        components: {
            vMenu,
            identity
        },
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="header">
            <div class="header__top">
                <identity/>
                <div class="header__text">
                    <p>
                        <b>Handen wassen</b>, <b>afstand houden</b> en vooral zoveel mogelijk
                        <b>thuis blijven</b> - we doen het inmiddels allemaal.
                    </p>
                    <p>
                        Maar er is nog meer wat je kunt doen en het is heel makkelijk:
                        <b>een mondkapje dragen</b>. Hiermee bescherm je jezelf, maar ook
                        anderen. Want ook als je geen klachten hebt, kun jij toch het
                        corona-virus al bij je dragen. Met een mondkapje maak je de
                        kans dat je iemand anders besmet een heel stuk kleiner.
                    </p>
                </div>
            </div>
        </div>
        <v-menu/>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .header {
        margin-bottom: 40px;

        .header__top {

            .identity {
                width: 700px;
            }

            .header__text {
                width: 100%;
                font-size: 18px;

                b {
                    color: #BC4087;
                }

                p {

                    &:first-child {
                        margin-top: 0;
                    }
                }
            }
        }


    }
</style>