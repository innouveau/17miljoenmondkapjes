<script>
    import patternMixin from '@/mixins/pattern-mixin';

    export default {
        name: 'identity',
        components: {},
        mixins: [patternMixin],
        props: {},
        computed: {},
        methods: {},
        mounted() {}
    }
</script>


<template>
    <div class="identity">
        <router-link
                :to="{name: 'home'}">
            <img
                class="identity__img-pattern"
                :src="pattern"/>
            <img
                class="identity__img-main"
                src="assets/img/17-miljoen-mondkapjes-frame.png"/>
        </router-link>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .identity {
        position: relative;

        a {

            .identity__img-pattern {
                position: absolute;
                left: 277px;
                top: 76px;
                z-index: 0;
                width: 126px;
                transform: rotate(-8deg);
                height: 63px;
            }

            .identity__img-main {
                width: 100%;
                position: relative;
                left: 0;
                top: 0;
                z-index: 1;
            }
        }


    }
</style>