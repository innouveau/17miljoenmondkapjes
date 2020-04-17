<script>
    import sewer from "./sewer";

    export default {
        name: 'sewers',
        components: {
            sewer
        },
        data() {
            return {
                sewers: [
                    {
                        name: 'Dominique',
                        image1: 'assets/img/naaiers/dominique-middelburg-1.jpg',
                        image2: 'assets/img/naaiers/dominique-middelburg-2.jpg',
                        location: 'Middelburg'
                    }, {
                        name: 'Joke',
                        image1: 'assets/img/naaiers/joke-amersfoort-1.jpg',
                        image2: 'assets/img/naaiers/joke-amersfoort-2.jpg',
                        location: 'Amersfoort'
                    }
                ]
            }
        },
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="sewers">
        <div class="section section--full">
            <div class="section__header">
                Deze mensen zijn al aan de slag!
            </div>

            <div class="sewers__list">
                <sewer
                    v-for="sewer in sewers"
                    :sewer="sewer"/>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .sewers {
        padding: 20px;

        .sewers__intro {
            margin-bottom: 20px;
        }
    }
</style>