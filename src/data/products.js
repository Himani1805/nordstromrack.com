export const products = [
  {
    id: 1,
    title: 'Soft Knit Sweater',
    category: 'Women',
    price: '$49.99',
    priceValue: 49.99,
    image: '/Static/Images/product-sweater.jpg',
  },
  {
    id: 2,
    title: 'Leather Crossbody Bag',
    category: 'Bags & Accessories',
    price: '$79.99',
    priceValue: 79.99,
    image: '/Static/Images/product-handbag.jpg',
  },
  {
    id: 3,
    title: 'Classic White Sneakers',
    category: 'Shoes',
    price: '$59.99',
    priceValue: 59.99,
    image: '/Static/Images/product-sneakers.jpg',
  },
  {
    id: 4,
    title: 'Classic Blue Jeans',
    category: 'Women',
    price: '$69.99',
    priceValue: 69.99,
    image: '/Static/Images/product-denim.jpg',
  },
  {
    id: 5,
    title: 'Floral Midi Dress',
    category: 'Women',
    price: '$54.99',
    priceValue: 54.99,
    image: '/Static/Images/product-dress.jpg',
  },
  {
    id: 6,
    title: 'Gold Hoop Earrings',
    category: 'Bags & Accessories',
    price: '$24.99',
    priceValue: 24.99,
    image: '/Static/Images/product-earrings.jpg',
  },
  {
    id: 7,
    title: 'Brown Ankle Boots',
    category: 'Shoes',
    price: '$64.99',
    priceValue: 64.99,
    image: '/Static/Images/product-boots.jpg',
  },
  {
    id: 8,
    title: 'Black Sunglasses',
    category: 'Bags & Accessories',
    price: '$29.99',
    priceValue: 29.99,
    image: '/Static/Images/product-sunglasses.jpg',
  },
  {
    id: 9,
    title: 'Tan Leather Belt',
    category: 'Bags & Accessories',
    price: '$34.99',
    priceValue: 34.99,
    image: '/Static/Images/product-belt.jpg',
  },
]

export function getProductById(id) {
  return products.find((item) => String(item.id) === String(id))
}

export function searchProducts(query) {
  const q = (query || '').trim().toLowerCase()
  if (!q) return products
  return products.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  )
}
