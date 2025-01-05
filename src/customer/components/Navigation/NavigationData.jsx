export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://rukminim1.flixcart.com/image/612/612/kt7jv680/lehenga-choli/f/n/i/free-sleeveless-l8097-fashionuma-original-imag6hxffsx8hkgh.jpeg?q=70',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: 'https://rukminim2.flixcart.com/image/832/832/xif0q/top/m/v/m/xl-wt-07-rahi-trendz-original-imagnd6tgw8gtshh.jpeg?q=70&crop=false',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id:"women_tops" },
            { name: 'Dresses', id:"Dress" },
            { name: 'Women Jeans', id: 'women_jeans' },
            { name: 'Lengha Choli', id: 'women_lenghaCholi' },
            { name: 'Gowns', id: 'women_gouns' },
            { name: 'Sarees', id: 'women_saree' },
        
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Handbags', id: 'women_handbags' },
            { name: 'Watches', id: 'women_watches' },
            { name: 'Wallets', id: 'women_wallets' },
            { name: 'Sunglasses', id: 'women_sunglasses' },
            // { name: 'Hats', id: 'hat' },
            // { name: 'Belts', id: 'belt' },
          ],
        },
        // {
        //   id: 'brands',
        //   name: 'Brands',
        //   items: [
        //     { name: 'Full Nelson', id: '#' },
        //     { name: 'My Way', id: '#' },
        //     { name: 'Re-Arranged', id: '#' },
        //     { name: 'Counterfeit', id: '#' },
        //     { name: 'Significant Other', id: '#' },
        //   ],
        // },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/n/8/x/5xl-68709850-puma-original-imah64swrxbrnfbw.jpeg?q=70&crop=false',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'jackets',
          id: '#',
          imageSrc: 'https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/y/c/a/-original-imaguzjrhf7g4mcy.jpeg?q=70&crop=false',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens Kurtas', id: 'mens_kurta' },
            { name: 'Shirt', id: 'shirt' },
            { name: 'Men Jeans', id: 'men_jeans' },
            { name: 'T-Shirts', id: 'T-Shirts' },
            { name: 'Jackets', id: 'men_jackets' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Bags', id: 'men_backpacks' },
            { name: 'Watches', id: 'men_watches' },
            { name: 'Wallets', id: 'men_wallets' },
            { name: 'Sunglasses', id: 'men_sunglasses' },
            // { name: 'Hats', id: '#' },
            { name: 'Belts', id: 'men_belts' },
          ],
        },
        // {
        //   id: 'brands',
        //   name: 'Brands',
        //   items: [
        //     { name: 'Re-Arranged', id: '#' },
        //     { name: 'Counterfeit', id: '#' },
        //     { name: 'Full Nelson', id: '#' },
        //     { name: 'My Way', id: '#' },
        //   ],
        // },
      ],
    },
  ],
  pages: [
    { name: 'Company', id: '/' },
    { name: 'Stores', id: '/' },
  ],
}