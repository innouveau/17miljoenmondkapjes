<script>
    export default {
        name: 'proof-experts',
        components: {},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="section section--full">
        <div class="section__header">
            Quotes van enkele experts
        </div>
        <ul>
            <li>
                <b>George Fu Gao, viroloog, immunologist en directeur van het Chinese CDC/RIVM</b><br>
                "<a href="https://www.sciencemag.org/news/2020/03/not-wearing-masks-protect-against-coronavirus-big-mistake-top-chinese-scientist-says" target="_blank">
                    dat mensen geen mondmaskers dragen</a> in de strijd tegen het coronavirus is een grote fout"
            </li>
            <li>
                <b>Professor Kim Woo-joo</b><br>
                Een vooraanstaande in het gevecht tegen COVID19 in Zuid-Korea vertelt waarom iedereen een masker moet dragen:<br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gAk7aX5hksU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </li>
            <li>
                <b>Team van het Chines Rode kruis, dat Italië komt helpen valt uit vanwege het niet massaal dragen van mondkapjes</b><br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BnJF6NmXT74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
        </ul>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .proof {


        iframe {
            margin-top: 20px;
        }
    }
</style>