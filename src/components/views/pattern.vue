<script>
    export default {
        name: 'pattern',
        components: {},
        props: {},
        computed: {},
        methods: {},
        mounted() {
            console.log('hello pattern');
        }
    }
</script>


<template>
    <div class="pagewrap">
        <div class="pattern">
            <a
                target="_blank"
                href="https://www.uza.be/mondmaskers?fbclid=IwAR3XRm5Ml1ZgYQw6V1ZD6znHlqWtWCdMTiEdjtC5KPgRxr9X9ApxYtHNR9c">
                Download het patroon
            </a><br>
            Video met aanpassing op bovenstaand patroon,
            <a
                target="_blank"
                href="https://www.youtube.com/watch?v=YUVp2kDkMiE&fbclid=IwAR06gcTKqWTWgp1KsV5RK25UwXdRcsHxTNYHsMzx1WZJvTOtg66xG9u-m4Y&app=desktop">
                bekijk</a>.
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .pattern {

    }
</style>