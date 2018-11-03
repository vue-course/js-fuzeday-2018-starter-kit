<template>
	<div class="navbar">
		<router-link to="/"><img alt="Home" class="logo" src="../assets/logo.png"></router-link>
		<router-link to="/">Home</router-link>
		|
		<router-link to="/help">Help</router-link>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.navbar {
		padding-bottom: 10px;
		border-bottom: 1px solid #eee;

		.logo {
			width: 64px;
			padding: 0 10px;
			vertical-align: middle;
		}

		a {
			color: #2c3e50;
			&.router-link-exact-active, &.active {
				color: #fe885f;
			}
		}
	}
</style>
