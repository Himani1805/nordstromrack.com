import { Box, Button, Flex, Image, Text, VStack, useToast } from '@chakra-ui/react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import { addToCart } from '../utils/cart'

export default function ProductDetail() {
  const { id } = useParams()
  const toast = useToast()
  const product = getProductById(id)

  if (!product) {
    return (
      <VStack align="start" gap="12px" py="40px">
        <Text fontSize="24px" fontWeight="700">
          Product not found
        </Text>
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </VStack>
    )
  }

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: '20px', md: '40px' }}
      width="100%"
      align="flex-start"
    >
      <Box
        width={{ base: '100%', md: '48%' }}
        bg="#FAFAFA"
        borderRadius="8px"
        overflow="hidden"
        h={{ base: '320px', md: '460px' }}
      >
        <Image src={product.image} alt={product.title} w="100%" h="100%" objectFit="contain" />
      </Box>
      <VStack align="stretch" spacing="14px" flex="1">
        <Text fontSize="14px" color="#666">
          {product.category}
        </Text>
        <Text fontSize={{ base: '26px', md: '34px' }} fontWeight="700">
          {product.title}
        </Text>
        <Text fontSize="24px" fontWeight="700">
          {product.price}
        </Text>
        <Text color="#444" maxW="480px">
          Rack find with everyday style. Soft materials, easy fit, and a look that works from weekday to weekend.
        </Text>
        <Button
          bg="#186ADC"
          color="white"
          w="fit-content"
          px="24px"
          onClick={() => {
            addToCart(product)
            toast({ title: 'Added to bag', status: 'success', duration: 1600, isClosable: true })
          }}
        >
          Add to Bag
        </Button>
        <Link to="/cart">
          <Text color="#186ADC" textDecoration="underline">
            View bag
          </Text>
        </Link>
      </VStack>
    </Flex>
  )
}
