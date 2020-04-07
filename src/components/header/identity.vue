<script>
    export default {
        name: 'identity',
        components: {},
        props: {},
        data() {
            return {
                i: 1,
                l: 12
            }
        },
        computed: {
            pattern() {
                return 'assets/img/patterns/' + this.i + '.png';
            }
        },
        methods: {
            next() {
                this.i++;
                if (this.i > this.l) {
                    this.i = 1;
                }
            }
        },
        mounted() {
            setInterval(() => {
                this.next();
            }, 2000)
        }
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