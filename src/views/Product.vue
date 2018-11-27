<template>
    <div>
        Product {{ $route.params.id }}
        <p>{{ name }}</p>
        <p>{{ desc }}</p>
    </div>
</template>

<script>
export default {
    name: 'Product',
    data() {
        return {
            name: 'name',
            desc: 'desc',
        }
    }
}
</script>

<style lang="scss" scoped>
    p {
        font-weight: bold;
    }
</style>
