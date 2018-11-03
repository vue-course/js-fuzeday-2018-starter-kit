import Client from 'shopify-buy';


const client = Client.buildClient({
	domain: 'your-shop-name.myshopify.com',
	storefrontAccessToken: 'your-storefront-access-token'
});

export {client};