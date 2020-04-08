<script>
    export default {
        name: 'form-mixin',
        components: {},
        props: {},
        computed: {},
        methods: {
            validateEmail(value) {
                return value && value.length > 0 && ( /(.+)@(.+){2,}\.(.+){2,}/.test(value) );
            },
            haveValue(obj, set) {
                for (let item of set) {
                    if (!obj[item] || obj[item].length === 0) {
                        return false;
                    }
                }
                return true;
            }
        }
    }
</script>


<template></template>


<style lang="scss">

</style>