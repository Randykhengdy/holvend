import { categories } from '$lib/data/products';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return categories.map((c) => ({ category: c.category_code }));
};
