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
        computed: {

        },
        methods: {
            getRotation() {
                let range = 15;
                return Math.random() * range - (range / 2);
            }
        }
    }
</script>


<template>
    <div class="sewer">
        <div class="sewer__images">
            <div
                    :style="{'background-image': 'url(' + sewer.image2 + ')', 'transform': 'rotate(' + getRotation() + 'deg)'}"
                    class="sewer__image">
            </div>
            <div
                    :style="{'background-image': 'url(' + sewer.image1 + ')', 'transform': 'rotate(' + getRotation() + 'deg)'}"
                    class="sewer__image">
            </div>
        </div>

        <div class="sewer__text">
            <div class="sewer__name">
                {{sewer.name}}
            </div>
            <div class="sewer__location">
                <div>
                    <img src="assets/img/tools/pin.svg"> {{sewer.location}}
                </div>
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
        margin-bottom: 20px;
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


            .sewer__name {
                font-size: 12px;
                padding: 4px;
                background: yellow;
                font-weight: 700;
                display: inline-block;
                position: absolute;
                left: 90px;
                top: 10px;
            }

            .sewer__location {
                display: inline-block;
                align-items: center;
                padding: 4px;
                background: #fff;
                position: absolute;
                left: 90px;
                top: 40px;

                div {
                    display: flex;
                    align-items: center;
                }

                img {
                    width: 18px;
                    margin-right: 4px;
                }
            }
        }
    }
</style>