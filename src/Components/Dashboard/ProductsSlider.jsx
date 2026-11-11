import { Box, Button, Flex, Image, Text, VStack, useToast } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { addToCart } from '../../utils/cart'

export default function ProductsSlider() {
  const toast = useToast()

  function handleAdd(product) {
    addToCart(product)
    toast({
      title: 'Added to bag',
      description: product.title,
      status: 'success',
      duration: 1800,
      isClosable: true,
    })
  }

  return (
    <VStack width="100%" align="stretch" gap="16px">
      <Flex justify="space-between" align="center" gap="12px" flexWrap="wrap">
        <Text fontSize={{ base: '20px', md: '24px' }} fontWeight="700">
          Featured Finds
        </Text>
        <Link to="/search">
          <Text color="#186ADC" fontSize="14px" textDecoration="underline">
            View all
          </Text>
        </Link>
      </Flex>
      <Flex
        width="100%"
        flexWrap="wrap"
        justifyContent={{ base: 'center', md: 'flex-start' }}
        gap={{ base: '14px', md: '20px' }}
      >
        {products.map((product) => (
          <Flex
            key={product.id}
            width={{ base: '100%', sm: 'calc(50% - 10px)', md: 'calc(33.333% - 14px)' }}
            flexDirection="column"
            gap="10px"
            padding={{ base: '10px', md: '12px' }}
            border="1px solid #E5E5E5"
            borderRadius="8px"
            bg="white"
          >
            <Link to={`/product/${product.id}`}>
              <Box
                overflow="hidden"
                borderRadius="6px"
                bg="#FAFAFA"
                height={{ base: '220px', md: '260px' }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                  objectPosition="center"
                />
              </Box>
            </Link>
            <Text fontSize="14px" color="#666">
              {product.category}
            </Text>
            <Link to={`/product/${product.id}`}>
              <Text fontWeight="600">{product.title}</Text>
            </Link>
            <Text fontWeight="700">{product.price}</Text>
            <Button
              size="sm"
              bg="#186ADC"
              color="white"
              borderRadius="4px"
              _hover={{ bg: '#1457b0' }}
              onClick={() => handleAdd(product)}
            >
              Add to Bag
            </Button>
          </Flex>
        ))}
      </Flex>
    </VStack>
  )
}
