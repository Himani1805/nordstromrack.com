const CART_KEY = 'nordstromCart'

export function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function getCartCount() {
  return getCart().reduce((sum, item) => sum + (item.qty || 1), 0)
}

export function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event('nordstrom-cart-updated'))
}

export function addToCart(product) {
  const cart = getCart()
  const existing = cart.find((item) => item.id === product.id)
  if (existing) {
    existing.qty += 1
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      priceValue: product.priceValue,
      image: product.image,
      qty: 1,
    })
  }
  saveCart(cart)
  return cart
}

export function updateCartQty(id, qty) {
  let cart = getCart()
  if (qty <= 0) {
    cart = cart.filter((item) => item.id !== id)
  } else {
    cart = cart.map((item) => (item.id === id ? { ...item, qty } : item))
  }
  saveCart(cart)
  return cart
}

export function removeFromCart(id) {
  const cart = getCart().filter((item) => item.id !== id)
  saveCart(cart)
  return cart
}

export function clearCart() {
  saveCart([])
  return []
}
