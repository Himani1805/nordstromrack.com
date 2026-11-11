import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { clearCart, getCart, removeFromCart, updateCartQty } from '../utils/cart'

export default function Cart() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getCart())
    function sync() {
      setItems(getCart())
    }
    window.addEventListener('nordstrom-cart-updated', sync)
    return () => window.removeEventListener('nordstrom-cart-updated', sync)
  }, [])

  const total = items.reduce((sum, item) => sum + item.priceValue * item.qty, 0)

  if (!items.length) {
    return (
      <VStack align="stretch" gap="16px" py="40px">
        <Text fontSize="28px" fontWeight="700">
          Your Bag
        </Text>
        <Text color="#666">Your bag is empty.</Text>
        <Link to="/">
          <Button bg="#186ADC" color="white" w="fit-content">
            Continue Shopping
          </Button>
        </Link>
      </VStack>
    )
  }

  return (
    <VStack align="stretch" gap="20px" width="100%">
      <Flex justify="space-between" align="center" gap="12px" flexWrap="wrap">
        <Text fontSize={{ base: '22px', md: '28px' }} fontWeight="700">
          Your Bag ({items.reduce((s, i) => s + i.qty, 0)})
        </Text>
        <Button variant="outline" size="sm" onClick={() => setItems(clearCart() || [])}>
          Clear bag
        </Button>
      </Flex>

      {items.map((item) => (
        <Flex
          key={item.id}
          gap="16px"
          border="1px solid #E5E5E5"
          borderRadius="8px"
          p="12px"
          direction={{ base: 'column', sm: 'row' }}
          align={{ base: 'stretch', sm: 'center' }}
        >
          <Box w={{ base: '100%', sm: '110px' }} h="110px" bg="#FAFAFA" borderRadius="6px" overflow="hidden">
            <Image src={item.image} alt={item.title} w="100%" h="100%" objectFit="contain" />
          </Box>
          <Box flex="1">
            <Text fontWeight="600">{item.title}</Text>
            <Text fontWeight="700" mt="4px">
              {item.price}
            </Text>
          </Box>
          <Flex align="center" gap="10px">
            <Button size="sm" onClick={() => setItems(updateCartQty(item.id, item.qty - 1))}>
              -
            </Button>
            <Text minW="24px" textAlign="center">
              {item.qty}
            </Text>
            <Button size="sm" onClick={() => setItems(updateCartQty(item.id, item.qty + 1))}>
              +
            </Button>
            <Button size="sm" variant="ghost" colorScheme="red" onClick={() => setItems(removeFromCart(item.id))}>
              Remove
            </Button>
          </Flex>
        </Flex>
      ))}

      <Flex justify="space-between" align="center" borderTop="1px solid #E5E5E5" pt="16px">
        <Text fontSize="20px" fontWeight="700">
          Total: ${total.toFixed(2)}
        </Text>
        <Button bg="#186ADC" color="white">
          Checkout
        </Button>
      </Flex>
    </VStack>
  )
}
