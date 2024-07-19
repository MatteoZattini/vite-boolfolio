<script>
export default {
    name: "AppHome"
}
</script>

<template>
    <section>
        <h1>HomePage</h1>
        <router-link :to="{ name: 'projects' }"> projects </router-link>
    </section>
</template>

<style scoped>

</style>