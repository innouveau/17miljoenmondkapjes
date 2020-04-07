<script>
    export default {
        name: 'instructions',
        components: {},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="instructions">
            <div class="instruction">
                <div class="instruction__number">
                    1
                </div>
                <div class="instruction__text">
                    <div class="instruction__title">
                        Koken
                    </div>
                    <div class="instruction__description">
                        Voordat je je mondkapje draagt, kook hem eerst in een pan
                        met water en wat allesreiniger voor minimaal 15 minuten
                        of in de wasmachine op kookwas (95 graden).<br>
                        Haal hem er aan de touwtjes uit en laat hem drogen op een theedoek.
                    </div>
                </div>
            </div>

            <div class="instruction">
                <div class="instruction__number">
                    2
                </div>
                <div class="instruction__text">
                    <div class="instruction__title">
                        Raak het mondkapje niet aan
                    </div>
                    <div class="instruction__description">
                        Was je handen (20 sec. met zeep en water) en pak het
                        mondkapje bij de touwtjes beet en knoop hem op deze
                        manier om je gezicht.<br>
                        Raak dus het mondkapje zelf en je gezicht niet aan.<br>
                        Zorg dat het mondkapje goed aansluit; er mogen geen grote
                        openingen aan de zijkant zitten.
                    </div>
                </div>
            </div>

            <div class="instruction">
                <div class="instruction__number">
                    3
                </div>
                <div class="instruction__text">
                    <div class="instruction__title">
                        Dragen
                    </div>
                    <div class="instruction__description">
                        Draag het mondkapje als je naar een openbare ruimte.<br>
                        Thuis is dit niet nodig (tenzij 1 van je huisgenoten
                        besmet is. Zorgvuldige maatregelen waaronder het dragen
                        van mondkapjes (tesamen met scheiden van badkamer, toilet,
                        keuken in zoverre mogelijk) biedt een kans om ook binnen
                        een huishouden besmetting te voorkomen).
                    </div>
                </div>
            </div>

            <div class="instruction">
                <div class="instruction__number">
                    4
                </div>
                <div class="instruction__text">
                    <div class="instruction__title">
                        Frequentie
                    </div>
                    <div class="instruction__description">
                       Het mondkapje gebruik je 1 dag of 1x bezoek buitenshuis.<br>
                       Daarna was je het mondkapje weer opnieuw (zie stap 1).
                    </div>
                </div>
            </div>

            <i>Dit wordt nog aangevuld en verbeterd (geupdate: 7 apr. 2020).</i>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .instructions {

        .instruction {
            display: flex;
            align-items: center;
            padding: 20px;
            margin-bottom: 20px;
            color: #000;
            background: #ddd;

            .instruction__number {
                font-size: 80px;
                font-family: 'Fredoka One', sans-serif;
                width: 60px;
                text-align: center;
                margin-right: 30px;
                border-bottom: 4px solid #000;
                line-height: 1;
            }

            .instruction__text {

                .instruction__title {
                    margin-bottom: 4px;
                    font-size: 22px;
                    font-weight: 700;
                }

                .instruction__description {
                    font-weight: 300;
                }
            }
        }
    }
</style>