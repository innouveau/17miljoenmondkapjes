<script>
    export default {
        name: 'pattern-mixin',
        components: {},
        props: {},
        data() {
            let l = 12;
            return {
                i: Math.floor(Math.random() * (l - 1)),
                l: l
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


<template></template>


<style lang="scss"></style>