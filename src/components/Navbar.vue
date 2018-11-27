<template>
    <header>
        <div class='searchWrap'>
            <!--<input type='search' v-model="searchText" v-on:change="searchChanged()"/>-->
        </div>
    </header>
    <!-- <div class="navbar">
        <router-link to="/"><img alt="Home" class="logo" src="../assets/logo.png"></router-link>
        <router-link to="/">Home</router-link>
    </div> -->
</template>

<script>
    export default {
        data() {
            return {searchText: this.$route.params.productSearch}
        },
        methods: {
            searchChanged() {
                this.$emit('search:product', this.searchText)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    header {
        display: flex;
        padding: 1em;
        background: C(red);
    }

    input[type='search'] {
        border-radius: 20px;
        border: solid lightblue;
        line-height: 2;

    }

    .searchWrap {
        flex: 1;
        text-align: center;
    }
</style>