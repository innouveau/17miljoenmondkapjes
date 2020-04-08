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
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="home page">
            <div class="section">
                <div class="section__50 home__intro">
                    <p>
                        Helaas zijn mondkapjes schaars en moeten ze (natuurlijk) als eerste naar zorgpersoneel, maar het goede nieuws is:
                    </p>
                    <p>
                        <span  class="highlight">Je kunt ze gewoon zelf maken!</span><br>
                        Kun je niet naaien? Ook dan kun
                        je meehelpen om de mondkapjes te verspreiden. Bijvoorbeeld door
                        stoffen bij de naai(st)ers te brengen, of de zelfgemaakte mondkapjes te verdelen.
                    </p>
                    <p>
                        Samen gaan we ervoor zorgen dat iedereen in Nederland een
                        mondkapje heeft. Zodat jij, je opa, je oma, je familie en je
                        vrienden allemaal beschermd zijn tegen het coronavirus.
                    </p>
                    <p>
                        <span  class="highlight">17 miljoen mondkapjes</span>, doe je mee?
                    </p>
                </div>
                <sign-up/>

               <sewers/>
            </div>
            <div class="section section--full">
                <rules/>
            </div>
            <div class="section section--full">
                <form-sewer/>
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
    }
</style>