<script>
    export default {
        name: 'proof-countries',
        components: {},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="section section--full">
        <div class="section__header">
            Landen waar ze al mondkapjes dragen
        </div>
        <ul>
            <li>
                <div class="proof__country">
                    Oost-Azie (China, Zuid-Korea, Taiwan, Hongkong, Japan, Singapore, etc)
                </div>
                <div class="proof__sub">
                    In deze landen is het gebruikelijk gedurende het griepseizoen
                    een mondkopje te dragen. Nu tijdens de Coronacrisis
                    is op straat in veel van die landen het dragen  verplicht.
                </div>
            </li>
            <li>
                <div class="proof__country">
                    Duitsland
                </div>
                <div class="proof__sub">
                    Per 2 april veranderde Duitsland van koers. Het Rober-Koch
                    instituut (het Duitse RIVM) adviseert nu wel
                    <a target="_blank" href="https://www.tagesschau.de/inland/schutzmasken-coronavirus-103.html">tot het
                        dragen van mondkapjes</a>.
                </div>
            </li>
            <li>
                <div class="proof__country">
                    Oostenrijk
                </div>
                <div class="proof__sub">
                    Verplicht per 30 maart
                </div>
            </li>
            <li>
                <div class="proof__country">
                    Tsjechië
                </div>
                <div class="proof__sub">
                    Verplicht per 18 maart. Zie hier over hun campagne #masks4all:<br>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7yx6nT-fbUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </li>
            <li>
                <div class="proof__country">
                    Bulgarije
                </div>
                <div class="proof__sub">
                    Verplicht per 30 maart.
                </div>
            </li>
            <li>
                <div class="proof__country">
                    Slowakije
                </div>
            </li>
            <li>
                <div class="proof__country">
                    Verenigde Staten
                </div>
                <div class="proof__sub">
                    Op 3 april draait ook het CDC en adviseert iedereen om
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html" target="_blank">(katoenen) maskers te dragen</a>.
                </div>
            </li>
        </ul>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .proof {

        .proof__country {
            font-weight: 700;
        }
    }
</style>