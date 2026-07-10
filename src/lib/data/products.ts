export interface ProductPhoto {
	id: number;
	photo_name: string;
	photo_path: string;
}

export interface Product {
	productCode: string;
	product: string;
	description: string;
	description_en: string;
	howToUse: string;
	size: string;
	link_tokopedia: string;
	link_shopee: string;
	link_wa: string;
	categories: string[];
	productPhotos: ProductPhoto[];
}

export interface Category {
	category_code: string;
	category_name: string;
	description: string;
}

export const categories: Category[] = [
	{
		category_code: 'HairStyling',
		category_name: 'HAIR STYLING',
		description: 'Discover power packed hair styling essentials that keep your look sharp all day.'
	},
	{
		category_code: 'HairCare',
		category_name: 'HAIR CARE',
		description: 'Nourishing care products crafted from natural ingredients for all hair types.'
	},
	{
		category_code: 'Shaves',
		category_name: 'SHAVES',
		description: 'Premium shaving essentials for a smooth, irritation-free grooming experience.'
	}
];

export const products: Product[] = [
	{
		productCode: 'claypaste',
		product: 'Medium Weight Clay Paste',
		description:
			'Clay Paste berbobot sedang dengan daya tahan tinggi dan hasil akhir matte. Cocok untuk semua jenis rambut.',
		description_en:
			'A medium weight clay paste with strong hold and a natural matte finish. Suitable for all hair types and styles, giving you a textured, controlled look that lasts all day.',
		howToUse:
			'Use just enough with your fingers, rub your palms evenly then apply it to your hair. Repeat again if it is still not enough or there are parts of the hair that have not been applied.',
		size: '100g / 50g',
		link_tokopedia: 'https://www.tokopedia.com/holvend',
		link_shopee: 'https://shopee.co.id/holvend',
		link_wa: 'https://wa.me/+6285174405750',
		categories: ['HairStyling'],
		productPhotos: [
			{ id: 1, photo_name: 'clay100', photo_path: '/images/productImages/2nd batch images/CLAY 100.jpg' },
			{ id: 2, photo_name: 'clay50', photo_path: '/images/productImages/2nd batch images/CLAY 50.jpg' }
		]
	},
	{
		productCode: 'surftonic',
		product: 'Sea Salt Spray (Surf Tonic)',
		description:
			'Spray tekstur dengan kandungan garam laut alami yang memberikan volume dan tampilan beach waves yang alami.',
		description_en:
			'A lightweight sea salt spray that adds natural texture, volume, and that effortless beach wave look. Works on wet or dry hair for versatile styling.',
		howToUse:
			'Shake then spray HOLVEND SURF TONIC on wet or dry hair, adjust according to taste with your fingers or a comb.',
		size: '100ml / 250ml',
		link_tokopedia: 'https://www.tokopedia.com/holvend',
		link_shopee: 'https://shopee.co.id/holvend',
		link_wa: 'https://wa.me/+6285174405750',
		categories: ['HairStyling', 'HairCare'],
		productPhotos: [
			{
				id: 3,
				photo_name: 'surftonic100',
				photo_path: '/images/productImages/2nd batch images/SURF TONIC 100ml.jpg'
			},
			{
				id: 4,
				photo_name: 'surftonic250',
				photo_path: '/images/productImages/2nd batch images/SURF TONIC 250ml.jpg'
			}
		]
	},
	{
		productCode: 'summerdream',
		product: 'Hair Mist (Your Summer Dream)',
		description:
			'Hair mist dengan wangi segar musim panas yang memberikan kilau dan aroma tahan lama pada rambut.',
		description_en:
			'A refreshing hair mist inspired by summer, delivering a light shine and long-lasting fragrance. Spray on wet or dry hair for an instant boost of freshness.',
		howToUse:
			'Shake then spray HOLVEND HAIR MIST on wet or dry hair at a distance of approximately 10cm using your fingers or a comb.',
		size: '100ml',
		link_tokopedia: 'https://www.tokopedia.com/holvend',
		link_shopee: 'https://shopee.co.id/holvend',
		link_wa: 'https://wa.me/+6285174405750',
		categories: ['HairCare'],
		productPhotos: [
			{ id: 5, photo_name: 'hairmist', photo_path: '/images/productImages/2nd batch images/HAIRMIST.jpg' }
		]
	},
	{
		productCode: 'shavesplash',
		product: 'After Shave Splash',
		description:
			'After shave splash dengan formula menyegarkan yang menenangkan kulit setelah bercukur dan mencegah iritasi.',
		description_en:
			'A refreshing after shave splash with a soothing formula that calms the skin after shaving, prevents irritation, and leaves a clean, fresh scent.',
		howToUse:
			'Pour enough HOLVEND AFTER SHAVES into the palm of your hand then rub it onto the part of your face or neck where the razor touches it.',
		size: '100ml',
		link_tokopedia: 'https://www.tokopedia.com/holvend',
		link_shopee: 'https://shopee.co.id/holvend',
		link_wa: 'https://wa.me/+6285174405750',
		categories: ['Shaves'],
		productPhotos: [
			{
				id: 6,
				photo_name: 'aftershave',
				photo_path: '/images/productImages/2nd batch images/AFTER SHAVE.jpg'
			}
		]
	}
];

export function getProductByCode(code: string): Product | undefined {
	return products.find((p) => p.productCode === code);
}

export function getProductsByCategory(categoryCode: string): Product[] {
	return products.filter((p) => p.categories.includes(categoryCode));
}
