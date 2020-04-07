<script>
    import { Tweet } from 'vue-tweet-embed'
    import proofCountries from "./proof-countries";
    import proofExperts from "./proof-experts";

    export default {
        name: 'proof',
        components: {
            proofExperts,
            proofCountries,
            Tweet
        },
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="content">
            <div class="proof">
                <div class="proof__intro">
                    <p>
                        Er is in Nederland al redelijk wat discussie geweest.
                        <b>Helpt een monddoekje nou wel? Of niet?</b>
                    </p>
                    <p>
                        Het RIVM heeft vanaf het begin het standpunt ingenomen,
                        dat monddoekjes bij fout gebruik juist een risico zijn op extra
                        verspreiding.
                    </p>
                    <p>
                        Dat klopt. Maar we hebben de afgelopen weken gezien dat de
                        Nederlanders graag willen helpen, willen leren en zich willen
                        en kunnen aanpassen
                    </p>
                    <p>
                        Daarom - <router-link :to="{name: 'instructions'}">bij juist gebruik</router-link>
                        - kan het dragen van een mondkapje een enorme bijdrage
                        leveren aan het afremmen van de verspreiding van het virus. En zou
                        het één van de wapens kunnen zijn in het opnieuw openen van
                        onze samenleving.
                    </p>
                    <p>
                        Een recente Duitse studie (bron?) laat zien dat overdracht via
                        oppervlaktes miniem/onwaarschijnlijk is. En dus dat de meeste
                        besmetting direct van mens tot mens gaat.<br>
                        Daarnaast is duidelijk dat veel besmettingen plaatsvinden
                        bij mensen die nog helemaal niet doorhebben dat ze Corona hebben
                        (<a href="https://www.ndr.de/nachrichten/info/27-Coronavirus-Update-Handy-Apps-koennen-eine-Perspektive-bieten,podcastcoronavirus172.html" target="_blank">Duits onderzoek komt op 46%</a>). Juist voor deze gevallen
                        kan het een enorme winst zijn, als de onbewuste drager van het
                        virust een mondkapje draagt.
                    </p>
                </div>


                <proof-countries/>

                <proof-experts/>

                <div class="proof__section">
                    Dankbaar gebruik gemaakt van dit overzichtelijke draadje:<br>
                    <Tweet id="1244228036938981381"></Tweet>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .proof {

        .proof__intro {
            font-size: 16px;
            margin-bottom: 50px;
        }

        .proof__section {
            margin-bottom: 50px;

            .proof__section-head {
                font-size: 24px;
                font-weight: 300;
                margin-bottom: 20px;
            }

            .proof__country {
                font-weight: 700;
                font-size: 15px;
            }
        }
    }
</style>