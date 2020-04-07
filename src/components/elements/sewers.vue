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
                        image1: 'assets/img/not-for-production/sewers/1.png',
                        image2: 'assets/img/not-for-production/sewers/1.png',
                        location: 'Middelburg'
                    }, {
                        name: 'Joke',
                        image1: 'assets/img/naaiers/joke-amersfoort-1.jpg',
                        image2: 'assets/img/naaiers/joke-amersfoort-2.jpg',
                        location: 'Amersfoort'
                    }, {
                        name: 'Ria',
                        image1: 'assets/img/not-for-production/sewers/1.png',
                        image2: 'assets/img/not-for-production/sewers/1.png',
                        location: 'Ouddorp'
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
                Deze mensen zijn al hard aan het werk!
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