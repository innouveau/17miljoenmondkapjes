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
        <div class="content">
            <div class="instructions">
                <div class="instruction">
                    <div class="instruction__number">
                        1
                    </div>
                    <div class="instruction__text">
                        <div class="instruction__title">
                            Koken!
                        </div>
                        <div class="instruction__description">
                            Voordat je je mondkapje kunt dragen,
                            kook je het eerst minimaal 15 minuten in een pan met
                            water en wat allesreiniger.<br>
                            Je kunt het ook op kookwas (95 graden) wassen in de wasmachine.<br>
                            Haal je mondkapje er aan de touwtjes uit en laat het op een theedoek drogen.

                        </div>
                    </div>
                </div>

                <div class="instruction">
                    <div class="instruction__number">
                        2
                    </div>
                    <div class="instruction__text">
                        <div class="instruction__title">
                            Niet aanraken!
                        </div>
                        <div class="instruction__description">
                            Was je handen goed (20 seconden met water en zeep),
                            pak het mondkapje bij de touwtjes vast en knoop het op
                            deze manier om je gezicht.<br>
                            Raak dus het mondkapje zelf en je gezicht niet aan! <br>
                            Zorg dat het mondkapje goed aansluit: er mogen geen grote openingen aan de zijkanten zitten.
                        </div>
                    </div>
                </div>

                <div class="instruction">
                    <div class="instruction__number">
                        3
                    </div>
                    <div class="instruction__text">
                        <div class="instruction__title">
                            Dragen!
                        </div>
                        <div class="instruction__description">
                            Draag het mondkapje als je naar een openbare ruimte gaat.
                            Thuis hoef je geen mondkapje te dragen.<br>
                            Let op: draag je mondkapje thuis wél als een van je
                            huisgenoten besmet is. Zorgvuldige maatregelen,
                            waaronder het dragen van mondkapjes
                            (tezamen met het scheiden van badkamer, toilet en keuken,
                            voor zover mogelijk), bieden een kans om ook binnen een
                            huishouden besmetting te voorkomen.

                        </div>
                    </div>
                </div>

                <div class="instruction">
                    <div class="instruction__number">
                        4
                    </div>
                    <div class="instruction__text">
                        <div class="instruction__title">
                            Herhalen!
                        </div>
                        <div class="instruction__description">
                            Gebruik je mondkapje één dag of bij één bezoek buitenshuis. <br>
                            Daarna was je het mondkapje weer (zie stap 1). Na het wassen kun je het opnieuw dragen.
                        </div>
                    </div>
                </div>

                <i>Dit wordt nog aangevuld en verbeterd (geupdate: 8 apr. 2020).</i>
            </div>
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
            width: 600px;
            max-width: 100%;

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