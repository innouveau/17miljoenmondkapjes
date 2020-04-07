<script>
    export default {
        name: 'faq',
        components: {},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="faq">
            <div class="content">
                <h2>
                    Veelgestelde Vragen
                </h2>

                <div class="faq__set">
                    <div class="faq__question">
                        Helpen mondkapjes nou wel?
                    </div>
                    <div class="faq__answer">
                        Ja. MITS ze goed gebruikt worden.<br>
                        Lees meer over de <router-link :to="{name: 'proof'}">achtergrond</router-link> en
                        lees hier over hoe je een <router-link :to="{name: 'instructions'}">mondkapje moet gebruiken</router-link>.
                    </div>
                </div>

                <div class="faq__set">
                    <div class="faq__question">
                        Hoe kan ik helpen?
                    </div>
                    <div class="faq__answer">
                        Graag!<br>
                        Je kunt zelf naaien.<br>
                        Of helpen met verspreiding<br>
                        Maar we hebben ook materiaal nodig. Heb je nog stof liggen of verkoop je toevallig stof (markt, winkel, etc): graag. Alles helpt!
                    </div>
                </div>

                <div class="faq__set">
                    <div class="faq__question">
                        Wat kost het om mondkapjes voor mijn gezin te bestellen?
                    </div>
                    <div class="faq__answer">
                        We vragen een vrijwillige bijdrage. Bedenk dat de onkosten voor 1 mondkapje een paar euro zijn.<br>
                        Al het geld gaat via een notaris.
                    </div>
                </div>

                <div class="faq__set">
                    <div class="faq__question">
                        Wat gebeurt er met het opgebrachte geld?
                    </div>
                    <div class="faq__answer">
                        We gaan hier nog in detail over beslissen. Het idee is vooralsnog:<br>
                        Serverkosten om deze website draaiende te houden, dan materiaalonkosten.
                        Wat overblijft kan naar een (nader te bepalen) goed doel (in de gezondheidssectie).<br>
                        Professionals die meewerken aan dit project doen dit allen op vrijwillige basis.
                    </div>
                </div>

                <div class="faq__set">
                    <div class="faq__question">
                        Namens wie is dit initiatief?
                    </div>
                    <div class="faq__answer">
                        Wij zijn een groep vrijwilligers van voornamelijke freelancers,
                        begaan met hoe Nederland door de Corona crisis komt.<br>
                        We zijn niet verbonden aan de Overheid, maar staan open voor
                        elke vorm van samenwerking.<br>
                    </div>
                </div>

                <div class="faq__set">
                    <div class="faq__question">
                        Hoe kan ik jullie bereiken?
                    </div>
                    <div class="faq__answer">
                        Als je wil naaien, distribueren of materiaal wilt voorzien,
                        meld je dan ajb aan via de
                        <router-link :to="{name: 'home'}">formulieren op de homepage</router-link>.<br>
                        Heb je andere vragen, stel ze via twitter: <a href="https://twitter.com/17Mmondkapjes">@17Mmondkapjes</a>.
                    </div>
                </div>

                <div class="faq__set">
                    <div class="faq__question">
                        Hoe is de privacy geregeld?
                    </div>
                    <div class="faq__answer">
                        Lees hier onze
                        <router-link :to="{name: 'privacy'}">privacyverklaring</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .faq {

        .faq__set {
            margin-bottom: 30px;

            .faq__question {
                font-weight: 700;
            }

            .faq__answer {

            }
        }
    }
</style>