<script>
    import { latLng } from "leaflet";
    import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
    import 'leaflet/dist/leaflet.css';
    import { Icon } from 'leaflet';
    import mapSewerInfo from "./map-sewer-info";

    delete Icon.Default.prototype._getIconUrl;
    Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    export default {
        name: "Example",
        components: {
            mapSewerInfo,
            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            LTooltip
        },
        data() {
            let Netherlands = {
                lat: 52.2129919,
                lng: 5.2793703
            };

            return {
                zoom: 7,
                center: latLng(Netherlands.lat, Netherlands.lng),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                currentZoom: 11.5,
                currentCenter: latLng(Netherlands.lat, Netherlands.lng),
                mapOptions: {
                    zoomSnap: 0.5
                }
            };
        },
        props: {
            sewers: {
                type: Array,
                required: true
            }
        },
        methods: {
            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
            },
            showLongText() {
                this.showParagraph = !this.showParagraph;
            },
            getLatLng(sewer) {
                return latLng(sewer.coordinates.lat, sewer.coordinates.lng);
            }
        }
    };
</script>


<template>
    <l-map
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate">
        <l-tile-layer
                :url="url"
                :attribution="attribution"/>
        <l-marker
            v-for="sewer in sewers"
            :lat-lng="getLatLng(sewer)">
            <l-popup>
                <map-sewer-info
                    :sewer="sewer"/>
            </l-popup>
        </l-marker>
    </l-map>
</template>

<style lang="scss">
    .vue2leaflet-map {
        height: 100%;
        overflow: hidden;
    }
</style>