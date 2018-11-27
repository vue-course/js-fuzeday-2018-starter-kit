<template>
	<div id="app">
		<Header />
		<Main />
	</div>
</template>
<script>
	import Header from "./components/layout/Header.vue";
	import Main from "./components/Main.vue";
	import Footer from "./components/layout/Footer.vue";

	export default {
		components: {
			Header,
			Main,
			Footer
		}
	};
</script>
<style lang="scss" scoped>
	#app {
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>