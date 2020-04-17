<script>
    import leaflet from "./leaflet";

    export default {
        name: 'v-map',
        components: {
            leaflet
        },
        props: {},
        data() {
            return {
                sewers: [
                    {
                        id: 1,
                        name: 'Dominique',
                        city: 'Middelburg',
                        avatar: 'assets/img/naaiers/dominique-middelburg-1.jpg',
                        coordinates: {
                            lat: 51.5,
                            lng: 3.61389
                        },
                        description: 'Dominique naait mondkapjes die je kunt afhalen aan het Molenwater.',
                        photo: 'assets/img/naaiers/uitgelicht/17-miljoen-mondkapjes-dominique-middelburg.jpg'
                    }, {
                        id: 2,
                        name: 'Joke',
                        city: 'Amersfoort',
                        avatar: 'assets/img/naaiers/joke-amersfoort-1.jpg',
                        coordinates: {
                            lat: 52.155499,
                            lng: 5.387740
                        },
                        description: '',
                        photo: ''
                    }, {
                        id: 3,
                        name: 'Ria',
                        city: 'Ouddorp',
                        avatar: 'assets/img/naaiers/ria-ouddorp.jpg',
                        coordinates: {
                            lat: 51.81167,
                            lng: 3.93472
                        },
                        description: '',
                        photo: ''
                    }, {
                        id: 4,
                        name: 'Arlette',
                        city: 'Sittard',
                        avatar: 'assets/img/naaiers/arlette-sittard.jpg',
                        coordinates: {
                            lat: 50.99833,
                            lng: 5.86944
                        },
                        description: `<a href="https://maakjemondkapje.online/kennisbank/1467/" target="_blank">Artikel over ijzerdraad bij de neus</a> en
                            <a href="https://maakjemondkapje.online/kennisbank/meters-maken-4-mondmaskers-in-1-keer-maken/" target="_blank">Filmpje</a>
                            over 4 mondkapjes tegelijk maken.
                        `,
                        photo: ''
                    }, {
                        id: 5,
                        name: 'Teodora',
                        city: 'Callantsoog',
                        avatar: 'assets/img/naaiers/teodora-callantsoog.jpg',
                        coordinates: {
                            lat: 52.835097,
                            lng: 4.6943765
                        },
                        description: `Teodora van naaiatelier Custom Stitches
                        maakte in enkele dagen 330 mondkapjes. 80 katoen en 250 van fibertex.
                        Ze gaat nu door met mondkapjes van fibertex, die nog iets beter
                        deeltjes filteren. Ze stelt de mondkapjes gratis beschikbaar.
                        `,
                        photo: ''
                    }
                ]
            }
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="pagewrap">
        <div class="map">
            <div class="content">
                <div class="leaflet__container">
                    <leaflet
                        :sewers="sewers"/>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .map {

        .leaflet__container {
            width: 100%;
            height: 500px;
        }
    }
</style>