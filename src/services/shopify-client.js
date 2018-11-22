import Client from 'shopify-buy';
import { creds } from '../conf';

const client = Client.buildClient({
	domain: creds.domain,
	storefrontAccessToken: creds.token
});
export {client};