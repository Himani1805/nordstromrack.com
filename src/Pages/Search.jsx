import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products, searchProducts } from '../data/products'
import { addToCart } from '../utils/cart'

export default function Search() {
  const toast = useToast()
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') || '')
  const [category, setCategory] = useState(params.get('category') || 'All')

  const categories = useMemo(
    () => ['All', ...new Set(products.map((item) => item.category))],
    []
  )

  const results = useMemo(() => {
    let list = searchProducts(query)
    if (category !== 'All') {
      list = list.filter((item) => item.category === category)
    }
    return list
  }, [query, category])

  function runSearch(e) {
    e?.preventDefault?.()
    const next = new URLSearchParams()
    if (query.trim()) next.set('q', query.trim())
    if (category !== 'All') next.set('category', category)
    setParams(next)
  }

  return (
    <VStack align="stretch" gap="20px" width="100%">
      <Text fontSize={{ base: '22px', md: '28px' }} fontWeight="700">
        Search
      </Text>
      <Flex as="form" onSubmit={runSearch} gap="10px" flexWrap="wrap">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products"
          maxW={{ base: '100%', md: '360px' }}
        />
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          maxW={{ base: '100%', md: '220px' }}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Button type="submit" bg="#186ADC" color="white" _hover={{ bg: '#1457b0' }}>
          Search
        </Button>
      </Flex>

      <Text color="#666">{results.length} result{results.length === 1 ? '' : 's'}</Text>

      <Flex wrap="wrap" gap="16px">
        {results.map((product) => (
          <Flex
            key={product.id}
            width={{ base: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 12px)' }}
            direction="column"
            gap="8px"
            border="1px solid #E5E5E5"
            borderRadius="8px"
            p="12px"
            bg="white"
          >
            <Link to={`/product/${product.id}`}>
              <Box h="220px" bg="#FAFAFA" borderRadius="6px" overflow="hidden">
                <Image src={product.image} alt={product.title} w="100%" h="100%" objectFit="contain" />
              </Box>
            </Link>
            <Text fontSize="13px" color="#666">
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
              onClick={() => {
                addToCart(product)
                toast({ title: 'Added to bag', status: 'success', duration: 1600, isClosable: true })
              }}
            >
              Add to Bag
            </Button>
          </Flex>
        ))}
      </Flex>
    </VStack>
  )
}
