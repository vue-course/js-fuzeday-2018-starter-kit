<template>
	<header>
		<div class='searchWrap'>
			<input type='search' />
		</div>
	</header>
	<!-- <div class="navbar">
		<router-link to="/"><img alt="Home" class="logo" src="../assets/logo.png"></router-link>
		<router-link to="/">Home</router-link>
	</div> -->
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	header{
		display: flex;
		padding: 1em;
		background: C(red);
	}

	.searchWrap{
		flex: 1;
		text-align: center;
	}
</style>