<script>
    import scrollTools from '@/tools/scroll';

    export default {
        name: 'sign-up-sewer-button',
        components: {},
        props: {},
        computed: {},
        methods: {
            goto() {
                scrollTools.scrollToAnchor('form-sewer');
            }
        }
    }
</script>


<template>
    <div
        :style="{'background-image': 'url(assets/img/patterns/1.png)'}"
        @click="goto()"
        class="sign-up-sewer-button sign-up-button">
        <span class="sing-up-button__text">
            → Ja, ik wil mondkapjes naaien!
        </span>

    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .sign-up-sewer-button {
        background-size: cover;
        background-position: 50% 50%;
    }
</style>