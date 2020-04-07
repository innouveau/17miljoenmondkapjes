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
                <div class="section section--full">
                    <div class="section__header">
                        De discussie
                    </div>
                    <div class="proof__intro">
                        <p>
                            Er is in Nederland al redelijk wat discussie geweest.
                            <span class="highlight">Helpt een monddoekje nou wel? Of niet?</span>
                            Het RIVM heeft vanaf het begin het standpunt ingenomen,
                            dat monddoekjes bij goed gebruik wel een positief effect
                            hebben, maar bij fout gebruik juist een risico zijn op extra
                            verspreiding.
                        </p>
                        <p>
                            Dat klopt.<br><span  class="highlight">Maar we hebben de afgelopen weken gezien dat de
                            Nederlanders graag willen helpen, willen leren en zich willen
                            en kunnen aanpassen.</span>
                        </p>
                        <p>
                            Daarom - <router-link :to="{name: 'instructions'}" class="highlight">bij juist gebruik</router-link>
                            - kan het dragen van een mondkapje een enorme bijdrage
                            leveren aan het afremmen van de verspreiding van het virus. En zou
                            het één van de wapens kunnen zijn in het opnieuw openen van
                            onze samenleving.
                        </p>
                    </div>
                </div>


                <proof-countries/>

                <proof-experts/>

                <div class="section section--full">
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