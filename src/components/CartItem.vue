<template>
	<div class="cart-item">
		<img class="image" v-bind:src="data.image">
		<div class="text">
			<div class="title">{{ data.title }}</div>
			<div class="vendor">{{ data.vendor }}</div>
			<div class="description">{{ data.description }}</div>

			<div class="actions">
				<div class="quantity-text">Quantity: {{rangeValue}}</div>
				<mt-range
					v-model="rangeValue"
					:min="0"
					:max="10"
					:step="1"
					:bar-height="1"
					class="item-quantity"
				>
					<div slot="start" class="range-number">0</div>
					<div slot="end" class="range-number">10</div>
				</mt-range>
				<mt-button type="danger" size="small" plain @click="$store.dispatch('remove', data.id)">Remove</mt-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Button, Range } from 'mint-ui';

	export default {
		name: 'CartItem',
		props: {
			data: Object
		},
		data() {
			return {
				rangeValue: this.data.quantity
			}
		},
		components: {
			Button,
		  	Range
		}
	}
</script>

<style scoped lang="scss">
	.cart-item {
		height: 200px;
		margin: 15px;
		padding: 10px;
		display: flex;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);

		&:hover {
			background: #f7f6f6;
		}

		.image {
			min-width: 200px;
			height: 200px;
		}

		.text {
			padding: 0 10px;
			position: relative;
		}

		.title {
			font-size: 16px;
			font-weight: bold;
			display: block;
		}

		.vendor {
			font-size: 10px;
			font-weight: lighter;
			font-style: italic;
			padding-bottom: 10px;
			display: block;
		}

		.description {
			font-size: 12px;
			font-weight: lighter;
			display: block;
		}

		.actions {
			position: absolute;
			bottom: 0;
			right: 0;
			display: block;
			text-align: right;

			.mint-button {
				display: inline-block;
			}

			.quantity-text {
				display: inline-block;
				font-size: 12px;
			}

			.item-quantity {
				width: 150px;
				display: inline-flex;
				padding-right: 10px;

				.range-number {
					font-size: 10px;
					padding: 0 10px;
					opacity: .3;
				}
			}
		}
	}
</style>