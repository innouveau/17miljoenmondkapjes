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
                        name: 'Lorem Ipsum',
                        image: 'assets/img/not-for-production/sewers/1.png',
                        location: 'Middelburg'
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
        <div class="sewers__intro">
            Deze mensen zijn al hard aan het werk!
        </div>

        <div class="sewers__list">
            <sewer
                    v-for="sewer in sewers"
                    :sewer="sewer"/>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .sewers {
        padding: 20px;

        .sewers__list {
            padding: 10px 10px 10px 40px!important;
            border-left: 2px solid #000;
        }

        .sewers__intro {
            margin-bottom: 20px;
        }
    }
</style>