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
        <div class="sewer__images">
            <div
                    :style="{'background-image': 'url(' + sewer.image2 + ')'}"
                    class="sewer__image">
            </div>
            <div
                    :style="{'background-image': 'url(' + sewer.image1 + ')'}"
                    class="sewer__image">
            </div>
        </div>

        <div class="sewer__text">
            <div class="sewer__name">
                <b>{{sewer.name}}</b> {{sewer.location}}
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .sewer {
        display: flex;

        //border: 1px dashed #555;
        //padding: 16px;
        margin-bottom: 10px;
        position: relative;

        .sewer__images {
            display: flex;
            align-items: center;

            .sewer__image {
                width: 120px;
                height: 120px;
                background-size: cover;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                box-shadow: 2px 2px 8px rgba(0,0,0,0.2);

                &:first-child {
                    width: 160px;
                    height: 160px;
                }
            }
        }

        .sewer__text {
            position: absolute;
            right: 10px;
            top: 10px;
            width: calc(100% - 120px);
            display: flex;

            .sewer__name {
                font-size: 12px;
                padding: 4px;
                background: yellow;
            }
        }
    }
</style>