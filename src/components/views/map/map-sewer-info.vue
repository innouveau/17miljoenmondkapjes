<script>
    export default {
        name: 'map-sewer-info',
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
    <div class="map-sewer-info">
        <div class="map-sewer-info__header">
            <div
                :style="{'background-image': 'url(' + sewer.avatar + ')'}"
                class="map-sewer-info__avatar"></div>
            <div class="map-sewer-info__header-text">
                <div class="map-sewer-info__name">
                    {{sewer.name}}
                </div>
                <div class="map-sewer-info__city">
                    {{sewer.city}}
                </div>
            </div>
        </div>
        <div class="map-sewer-info__body">
            <div
                v-if="sewer.photo.length > 0"
                class="map-sewer-info__info">
                <img :src="sewer.photo"/>
            </div>
            <div
                v-if="sewer.description.length > 0"
                v-html="sewer.description"
                class="map-sewer-info__description">
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .map-sewer-info {

        .map-sewer-info__header {
            font-size: 20px;
            line-height: 1.1;
            margin-bottom: 16px;
            display: flex;

            .map-sewer-info__avatar {
                width: 44px;
                height: 44px;
                border-radius: 50%;
                background-size: cover;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                margin-right: 12px;
            }

            .map-sewer-info__name {
                font-weight: 700;
            }
        }

        .map-sewer-info__body {
            display: flex;

            .map-sewer-info__info {
                margin-right: 8px;

                img {
                    width: 150px;
                }
            }
        }
    }
</style>