<script>
    import rules from "@/components/elements/rules";
    import sewers from "@/components/elements/sewers";
    import SignUp from "@/components/elements/sign-up/sign-up";
    import formSewer from "@/components/elements/sign-up/forms/form-sewer";

    export default {
        name: 'home',
        components: {
            formSewer,
            SignUp,
            sewers,
            rules
        },
        props: {},
        computed: {
            isLaunched() {
                return true;
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="home page">
            <div class="section">
                <div class="sub-section sub-section__50 home__intro">
                    <div class="section--home-1">
                        <p>
                            Helaas zijn mondkapjes schaars en moeten ze (natuurlijk) als eerste naar zorgpersoneel, maar het goede nieuws is:
                        </p>
                        <p>
                            <span  class="highlight">Je kunt ze gewoon zelf maken!</span><br>
                            Kun je niet naaien? Ook dan kun
                            je meehelpen om de mondkapjes te verspreiden. Bijvoorbeeld door
                            stoffen bij de naai(st)ers te brengen, of de zelfgemaakte mondkapjes te verdelen.
                        </p>
                    </div>
                    <div class="section--home-2">
                        <p>
                            Samen gaan we ervoor zorgen dat iedereen in Nederland een
                            mondkapje heeft. Zodat jij, je opa, je oma, je familie en je
                            vrienden allemaal beschermd zijn tegen het coronavirus.
                        </p>
                        <p>
                            <span  class="highlight">17 miljoen mondkapjes</span>, doe je mee?
                        </p>
                    </div>

                </div>
                <div class="sub-section">
                    <sign-up v-if="isLaunched"/>
                </div>
            </div>
            <div class="section sub-section--with-sub-section-tablet">
                <div class="sub-section sub-section__50 sub-section--tablet--50">
                    <rules/>

                </div>
                <div class="sub-section sub-section__50 sub-section--tablet--50">
                    <sewers/>
                </div>
            </div>
            <div class="section" v-if="isLaunched">
                <div class="sub-section sub-section__25 sub-section--with-sub-section-tablet">
                    <div class="sub-section--tablet--50">
                        <p>
                            <b>Super dat je wilt helpen!<br>
                                Laat je adresgegevens hier achter.</b>
                        </p>
                        <p>
                            Maak gebruik van
                            <router-link target="_blank" :to="{name: 'pattern'}">het patroon met uitleg</router-link>
                            om te beginnen met mondkapjes te naaien. Dit kan in een
                            tempo en hoeveelheid die je zelf prettig vindt.
                        </p>
                        <p>
                            We gaan in de loop van de komende tijd plannen maken
                            om te zorgen voor verspreiding van de door jou gemaakte
                            mondkapjes.
                        </p>
                    </div>
                    <div class="sub-section--tablet--50">
                        <p>
                            Leuk idee: in Tsjechië hadden ze zogenaamde mondkapjes-bomen
                            om gemaakte mondkapjes achter te laten om mee te nemen.
                        </p>
                        <p>
                            <img style="width: 300px" src="assets/img/stories/17-miljoen-mondkapjes-boom.png">
                        </p>
                    </div>
                </div>

                <div class="sub-section sub-section__75">
                    <a name="form-sewer"></a>
                    <form-sewer/>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .home {

        .home__intro {
            font-size: 16px;
        }

        @include mobile() {

            .section--home-1 {
                display: none;
            }
        }
    }
</style>