<script>
    import rules from "@/components/elements/rules";
    import sewers from "@/components/elements/sewers";
    import SignUp from "../elements/sign-up/sign-up";

    export default {
        name: 'home',
        components: {
            SignUp,
            sewers,
            rules
        },
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="home page">
            <div class="section">
                <div class="home__intro">
                    <p>
                        Helaas zijn mondkapjes schaars en moeten ze (natuurlijk) als eerste naar zorgpersoneel, maar het goede nieuws is:
                    </p>
                    <p>
                        je kunt ze gewoon zelf maken! Kun je niet naaien? Ook dan kun
                        je meehelpen om de mondkapjes te verspreiden. Bijvoorbeeld door s
                        toffen bij de naai(st)ers te brengen, of de zelfgemaakte mondkapjes te verdelen.
                    </p>
                    <p>
                        Samen gaan we ervoor zorgen dat iedereen in Nederland een
                        mondkapje heeft. Zodat jij, je opa, je oma, je familie en je
                        vrienden allemaal beschermd zijn tegen het coronavirus.
                    </p>
                    <p>
                        17 miljoen mondkapjes, doe je mee?
                    </p>
                </div>
               <sewers/>
            </div>
            <div class="section section--full">
                <sign-up/>
            </div>
            <div class="section">
                <rules/>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .home {

        .section {
            display: flex;
            border-bottom: 1px dashed #aaa;
            padding-bottom: 20px;
            margin-bottom: 20px;

            &.section--full {
                display: block;

                > div {
                    width: 100%;
                }
            }

            > div {
                width: 50%;

                &:first-child {
                    padding-right: 10px;
                }

                &:last-child {
                    padding-left: 10px;
                }
            }

            .home__intro {
                font-size: 16px;
                font-weight: 700;
            }
        }
    }
</style>