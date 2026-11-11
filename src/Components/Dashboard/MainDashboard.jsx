import React, { useEffect } from 'react'
import Banner from './Banner'
import Slider from './Slider'
import ProductsSlider from './ProductsSlider'
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function MainDashboard() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return
    const el = document.getElementById(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <Flex flexDirection="column" gap="60px" width="100%">
      <Box id="new" scrollMarginTop="20px">
        <Banner img="/Static/Images/e61d2a70-f58e-48a5-90f4-f9d7bde16fab.png" />
      </Box>
      <Box id="flash" scrollMarginTop="20px">
        <Slider />
      </Box>
      <Box id="brands" scrollMarginTop="20px">
        <Banner img="/Static/Images/676ce1c2-5c5e-48cc-9d8e-8c8fd2e28ab3.png" />
      </Box>
      <Box id="featured" scrollMarginTop="20px">
        <ProductsSlider />
      </Box>
      <Box id="clearance" scrollMarginTop="20px">
        <Banner img="/Static/Images/88e07558-0854-43ea-9840-ffd319f48007 (1).jpeg" />
      </Box>
      <Box id="home" scrollMarginTop="20px">
        <Banner img="/Static/Images/711783c2-afb6-48cb-aaa5-a3f272c55065.png" />
      </Box>
      <Box id="beauty" scrollMarginTop="20px">
        <Banner img="/Static/Images/676ce1c2-5c5e-48cc-9d8e-8c8fd2e28ab3.png" />
      </Box>
      <Flex
        id="gifts"
        scrollMarginTop="20px"
        width="100%"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        bg="#E8F6FF"
        overflow="hidden"
      >
        <Box
          width={{ base: '100%', md: '40%' }}
          maxW={{ base: '280px', md: '320px' }}
          flexShrink={0}
          mx={{ base: 'auto', md: '0' }}
        >
          <Image
            src="/Static/Images/dbf42fe6-1fdb-415e-ad6a-35fb06afaf14.png"
            width="100%"
            height="auto"
            display="block"
            alt="Swim from $20"
          />
        </Box>
        <VStack
          flex="1"
          align={{ base: 'center', md: 'flex-start' }}
          justify="center"
          spacing="12px"
          px={{ base: '20px', md: '48px' }}
          py={{ base: '24px', md: '32px' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text fontSize={{ base: '28px', md: '40px' }} fontWeight="800" color="#111" lineHeight="1.1">
            Dive into summer savings
          </Text>
          <Text fontSize={{ base: '15px', md: '18px' }} color="#333" maxW="420px">
            Fresh swim styles for every vibe — from beach days to poolside lounging. New arrivals start at just $20.
          </Text>
          <Link to="#">
            <Text
              as="span"
              mt="4px"
              display="inline-block"
              px="18px"
              py="10px"
              bg="#111"
              color="white"
              fontWeight="700"
              fontSize="14px"
              _hover={{ bg: '#333' }}
            >
              Shop Swim →
            </Text>
          </Link>
        </VStack>
      </Flex>
      <Box id="shoes" scrollMarginTop="20px">
        <Banner img="/Static/Images/d8c397d5-4b73-469e-ab75-edce1263c243.jpeg" />
      </Box>
      <Box id="bags" scrollMarginTop="20px">
        <Banner img="/Static/Images/9124cf9a-7133-4e76-85dc-d7052869884a.png" />
      </Box>
    </Flex>
  )
}
