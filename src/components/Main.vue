<template>
    <div>
        <Navbar/>
        <router-view/>
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
    name: 'Main',
    components: {
        Navbar
    }
}
</script>

<style lang="scss" scoped>
    div {
        padding: 10px;
    }
</style>
