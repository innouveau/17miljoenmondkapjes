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
        computed: {
            isHome() {
                return this.$route.name === 'home';
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="header">
            <div class="header__top">
                <identity/>
                <div
                    v-if="isHome"
                    class="header__text">
                    <p>
                        <span class="highlight">Handen wassen</span>,
                        <span  class="highlight">afstand houden</span> en vooral zoveel mogelijk
                        <span  class="highlight">thuis blijven</span> - we doen het inmiddels allemaal.
                    </p>
                    <p>
                        Maar er is nog meer wat je kunt doen en het is heel makkelijk:
                        <span  class="highlight">een mondkapje dragen</span>.
                        Hiermee bescherm je jezelf, maar ook
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
            display: flex;

            .identity {
                width: 512px;
            }

            .header__text {
                width: calc(100% - 512px);
                font-size: 18px;
                padding-left: 20px;

                p {

                    &:first-child {
                        margin-top: 0;
                    }
                }
            }
        }


    }
</style>