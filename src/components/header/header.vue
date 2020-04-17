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
            </div>
        </div>
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
                max-width: 100%;
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

        @include tablet() {

            .header__top {
                display: block;

                .header__text {
                    width: 100%;
                    padding: 0;
                }

            }
        }

        @include mobile() {


            .header__top {

                .header__text {
                    display: none;
                }

            }
        }
    }
</style>