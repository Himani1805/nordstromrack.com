import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const links = [
  {
    label: 'New',
    color: '#186ADC',
    to: 'new',
    submenu: [
      { label: 'Just In', to: 'new' },
      { label: 'Featured Finds', to: 'featured' },
      { label: 'Flash Events', to: 'flash' },
    ],
  },
  {
    label: 'Clearance',
    color: '#C41E3A',
    to: 'clearance',
    submenu: [
      { label: 'All Clearance', to: 'clearance' },
      { label: 'Women Clearance', to: 'featured' },
      { label: 'Shoes Clearance', to: 'shoes' },
    ],
  },
  {
    label: 'Women',
    to: 'featured',
    submenu: [
      { label: 'Clothing', to: 'featured' },
      { label: 'Dresses', to: 'featured' },
      { label: 'Shoes', to: 'shoes' },
      { label: 'Handbags', to: 'bags' },
    ],
  },
  {
    label: 'Men',
    to: 'brands',
    submenu: [
      { label: 'Clothing', to: 'brands' },
      { label: 'Shoes', to: 'shoes' },
      { label: 'Accessories', to: 'bags' },
    ],
  },
  {
    label: 'Kids',
    to: 'flash',
    submenu: [
      { label: 'Girls', to: 'flash' },
      { label: 'Boys', to: 'flash' },
      { label: 'Baby', to: 'flash' },
    ],
  },
  {
    label: 'Shoes',
    to: 'shoes',
    submenu: [
      { label: 'Sneakers', to: 'shoes' },
      { label: 'Heels', to: 'shoes' },
      { label: 'Boots', to: 'shoes' },
    ],
  },
  {
    label: 'Bags & Accessories',
    to: 'bags',
    submenu: [
      { label: 'Handbags', to: 'bags' },
      { label: 'Jewelry', to: 'bags' },
      { label: 'Sunglasses', to: 'bags' },
    ],
  },
  {
    label: 'Home',
    to: 'home',
    submenu: [
      { label: 'Bedding', to: 'home' },
      { label: 'Decor', to: 'home' },
      { label: 'Kitchen', to: 'home' },
    ],
  },
  {
    label: 'Beauty',
    to: 'beauty',
    submenu: [
      { label: 'Makeup', to: 'beauty' },
      { label: 'Skincare', to: 'beauty' },
      { label: 'Fragrance', to: 'beauty' },
    ],
  },
  {
    label: 'Gift Guide',
    to: 'gifts',
    submenu: [
      { label: 'Gifts for Her', to: 'gifts' },
      { label: 'Gifts for Him', to: 'gifts' },
      { label: 'Under $50', to: 'featured' },
    ],
  },
  {
    label: 'Flash Events',
    to: 'flash',
    submenu: [
      { label: 'Today’s Events', to: 'flash' },
      { label: 'Coming Soon', to: 'flash' },
    ],
  },
]

function NavItem({ item }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function goToSection(sectionId) {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`)
      return
    }
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Box
      position="relative"
      flexShrink={0}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false)
        }
      }}
    >
      <Text
        as="button"
        type="button"
        color={item.color || '#111'}
        fontSize={{ md: '13px', lg: '14px' }}
        cursor="pointer"
        padding="8px 6px"
        whiteSpace="nowrap"
        onClick={() => goToSection(item.to)}
      >
        {item.label}
      </Text>
      <Box
        position="absolute"
        top="100%"
        left="0"
        minW="180px"
        bg="white"
        border="1px solid #E5E5E5"
        boxShadow="0 8px 24px rgba(0,0,0,0.12)"
        zIndex="20"
        display={open ? 'block' : 'none'}
        py="8px"
      >
        {item.submenu.map((sub) => (
          <Box
            key={sub.label}
            as="button"
            type="button"
            width="100%"
            textAlign="left"
            px="14px"
            py="8px"
            fontSize="14px"
            color="#222"
            _hover={{ bg: '#F5F5F5', color: '#186ADC' }}
            onClick={() => {
              goToSection(sub.to)
              setOpen(false)
            }}
          >
            {sub.label}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default function Navbar() {
  return (
    <>
      <Flex
        maxW="1400px"
        mx="auto"
        width="100%"
        justifyContent="space-between"
        marginTop="6px"
        display={{ base: 'none', md: 'flex' }}
        position="relative"
        zIndex="15"
        px="16px"
        overflowX="auto"
        css={{
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {links.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </Flex>

      <Flex
        width="100%"
        padding="8px 12px 14px"
        gap="10px"
        overflowX="auto"
        whiteSpace="nowrap"
        fontSize="13px"
        display={{ base: 'flex', md: 'none' }}
        position="relative"
        zIndex="15"
        css={{
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': { height: '4px' },
          '&::-webkit-scrollbar-thumb': { background: '#c5d0d6', borderRadius: '999px' },
        }}
      >
        {links.map((item) => (
          <Box key={item.label} flexShrink={0}>
            <NavItem item={item} />
          </Box>
        ))}
      </Flex>
    </>
  )
}
