<script>
    export default {
        name: 'sewer',
        components: {},
        props: {
            sewer: {
                type: Object,
                required: true
            }
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="sewer">
        <div
            :style="{'background-image': 'url(' + sewer.image + ')'}"
            class="sewer__image">
        </div>
        <div class="sewer__text">
            <div class="sewer__name">
                {{sewer.name}}
            </div>
            <div class="sewer__location">
                {{sewer.location}}
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .sewer {
        display: flex;
        background: #fff;
        //box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
        border: 1px dashed #555;
        padding: 16px;

        .sewer__image {
            width: 120px;
            height: 120px;
            background-size: cover;
            background-position: 50% 50%;
            background-repeat: no-repeat;
        }

        .sewer__text {
            width: calc(100% - 120px);
            padding-left: 20px;

            .sewer__name {
                font-size: 16px;
                font-weight: 700;
            }
        }
    }
</style>