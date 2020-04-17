<script>
    export default {
        name: 'confirmation-sewer',
        components: {},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="content">
            <div class="confirmation-sewer">
                <div class="confirmation">
                    <div class="confirmation__section">
                        <p>
                            <b>Bedankt voor je aanmelding en super dat je wilt helpen!</b>
                        </p>
                        <p>
                            Als het goed is heb je een bevestigingsmail gekregen (het zou kunnen dat deze in je spamfolder terecht is gekomen).<br>
                            <b>Bevestig je deelname via deze mail.</b>
                        </p>
                    </div>
                    <div class="confirmation__section">
                        <p>
                            Maak gebruik van
                            <router-link target="_blank" :to="{name: 'pattern'}">het patroon met uitleg</router-link>
                            om te beginnen met mondkapjes te naaien. Dit kan in een
                            tempo en hoeveelheid die je zelf prettig vindt.
                        </p>
                    </div>
                    <div class="confirmation__section">
                        <p>
                            Volg ons op twitter
                            <a href="https://twitter.com/17Mmondkapjes" target="_blank" class="twitter-button">@17Mmondkapjes</a>
                        </p>
                        <p>
                            We zouden het leuk vinden om foto's van het naaien te ontvangen.
                        </p>
                    </div>
                    <div class="confirmation__section">
                        <p>
                            We gaan in de loop van de komende tijd plannen maken
                            om te zorgen voor verspreiding van de door jou gemaakte
                            mondkapjes.
                        </p>
                    </div>

                    <div class="confirmation__section">
                        <p>
                            Leuk idee: in Tsjechië hadden ze zogenaamde mondkapjes-bomen
                            om gemaakte mondkapjes achter te laten om mee te nemen.
                        </p>
                        <p>
                            <img style="width:300px" src="assets/img/stories/17-miljoen-mondkapjes-boom.png">
                        </p>
                    </div>


                </div>

            </div>
        </div>
    </div>

</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .confirmation-sewer {

    }
</style>