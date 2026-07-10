import { products } from '$lib/data/products';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return products.map((p) => ({ code: p.productCode }));
};
