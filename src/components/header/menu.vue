<script>
    export default {
        name: 'v-menu',
        components: {},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="menu">
        <router-link
                :to="{name: 'home'}">
            Home
        </router-link>
        <router-link
            :to="{name: 'pattern'}">
            Download patroon
        </router-link>
        <router-link
                :to="{name: 'instructions'}">
            Veilig dragen
        </router-link>
        <router-link
                :to="{name: 'proof'}">
            Helpt het nou wel?
        </router-link>
        <router-link
                :to="{name: 'faq'}">
            Overige vragen
        </router-link>

        <router-link
                :to="{name: 'order'}"
                class="router-link--action">
            Bestellen
        </router-link>
    </div>
</template>


<style lang="scss">
    @import '@/styles/variables.scss';

    .menu {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 20px 0;
        display: flex;
        align-items: center;

        a {
            text-decoration: none;
            font-size: 14px;
            text-align: center;
            margin: 0 20px;
            font-weight: 700;
            white-space: nowrap;

            &:hover,
            &.router-link-active {
                text-decoration: underline;
            }

            &.router-link--action {
                padding: 6px;
                background: orange;
                border-radius: 2px;
                margin-left: auto;
            }
        }

        @include tablet() {

            a {
                margin: 0 10px;
            }
        }

        @include mobile() {
            flex-wrap: wrap;

            a {
                margin-bottom: 8px;
            }
        }
    }
</style>