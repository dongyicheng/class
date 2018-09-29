<template>
    <div>
        <button @click="back">回去</button>
        登陆
    </div>
</template>

<script>
/* this.$router.back() */
    export default {
        methods: {
            back() {
                this.$router.back();
            }
        },
    }
</script>

<style scoped>

</style>