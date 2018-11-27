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
