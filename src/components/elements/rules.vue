<script>
    export default {
        name: 'rules',
        components: {},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="rules">
        <div class="rule">
            <div class="rule__nr">
                1
            </div>
            <div class="rule__text">
                <div class="rule__title">
                    Bijf 1.5m afstand houden!
                </div>
                <div class="rule__description">
                    Dit is nog steeds het belangrijkste
                    wapen tegen de verspreiding.
                </div>
            </div>
        </div>

        <div class="rule">
            <div
                class="rule__nr">
                2
            </div>
            <div class="rule__text">
                <div class="rule__title">
                    Bijf je handen wassen!
                </div>
                <div class="rule__description">
                    Juíst ook als je een
                    mondkapje draagt.
                </div>
            </div>
        </div>

        <div class="rule">
            <div class="rule__nr">
                3
            </div>
            <div class="rule__text">
                <div class="rule__title">
                    Draag een mondkapje!
                </div>
                <div class="rule__description">
                    <router-link :to="{name: 'instructions'}">
                    Maar zorg dat je dit op
                    de goede manier doet.
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .rules {
        padding: 20px;

        .rule {
            display: flex;
            align-items: center;
            padding: 20px;
            margin-bottom: 20px;
            color: #000;
            background: #ddd;

            .rule__nr {
                font-size: 80px;
                font-family: 'Fredoka One', sans-serif;
                width: 60px;
                text-align: center;
                margin-right: 30px;
                border-bottom: 4px solid #000;
                line-height: 1;
            }

            .rule__text {

                .rule__title {
                    margin-bottom: 4px;
                    font-size: 22px;
                    font-weight: 700;
                }

                .rule__description {
                    font-weight: 300;
                }
            }
        }
    }
</style>