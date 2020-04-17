<script>
    import signUpSewerButton from "./sign-up-sewer-button";

    export default {
        name: 'sign-up',
        components: {
            signUpSewerButton
        },
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="sign-up">
        <sign-up-sewer-button/>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .sign-up {
        padding: 10px;

        .sign-up-button {
            padding: 10px 20px;
            font-size: 40px;
            line-height: 1.2;
            color: #fff;
            background: orange;
            font-family: 'Fredoka One', sans-serif;
            cursor: pointer;
            box-shadow: 1px 1px 4px rgba(0,0,0,0.5);
            min-height: 120px;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;

            .sing-up-button__text {
                text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
                text-decoration: underline;
            }

            &:hover {
                .sing-up-button__text {
                   color: #000
                }
            }
        }

        @include tablet() {
            padding: 0;
        }
    }
</style>