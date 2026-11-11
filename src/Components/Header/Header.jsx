import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoStorefrontOutline } from 'react-icons/io5'
import { BsBoxSeam } from 'react-icons/bs'
import { getCartCount } from '../../utils/cart'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [user, setUser] = useState(null)
  const [cartCount, setCartCount] = useState(0)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('nordstromUser')
    setUser(saved ? JSON.parse(saved) : null)
    setCartCount(getCartCount())
  }, [location.pathname])

  useEffect(() => {
    function syncCart() {
      setCartCount(getCartCount())
    }
    window.addEventListener('nordstrom-cart-updated', syncCart)
    window.addEventListener('storage', syncCart)
    return () => {
      window.removeEventListener('nordstrom-cart-updated', syncCart)
      window.removeEventListener('storage', syncCart)
    }
  }, [])

  function handleSignOut() {
    localStorage.removeItem('nordstromUser')
    setUser(null)
    navigate('/')
  }

  function handleSearch(e) {
    e.preventDefault()
    const q = searchText.trim()
    navigate(q ? `/search?q=${encodeURIComponent(q)}` : '/search')
  }

  return (
    <Box width="100%" overflow="hidden">
      <Flex
        backgroundColor="#186ADC"
        color="white"
        padding={{ base: '8px 12px', md: '8px 16px' }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        fontSize={{ base: '12px', md: '13px' }}
        lineHeight="1.35"
        flexWrap="wrap"
        gap="4px"
      >
        <Text as="span">
          Free shipping on most orders over $89. Shop online or pick up select orders at a Nordstrom Rack or Nordstrom
          store.
        </Text>
        <Link to="/">
          <Text as="span" textDecoration="underline" whiteSpace="nowrap">
            Learn More
          </Text>
        </Link>
      </Flex>

      <Flex
        width="100%"
        maxW="1400px"
        mx="auto"
        padding={{ md: '16px 20px' }}
        alignItems="center"
        gap="16px"
        display={{ base: 'none', md: 'flex' }}
      >
        <Box flexShrink={0}>
          <Link to="/">
            <Image
              src="/Static/Images/df3a0d48-0df8-483c-81af-7e456c0a47bb.svg"
              width="110px"
              alt="Nordstrom Rack"
            />
          </Link>
        </Box>

        <Box flex="1" minW="0" as="form" onSubmit={handleSearch}>
          <InputGroup border="1px solid #838D91" width="100%">
            <InputLeftElement pointerEvents="none">
              <Image src="/Static/Images/icon-search.svg" width="18px" alt="" />
            </InputLeftElement>
            <Input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for products or brands"
              borderRadius="none"
            />
          </InputGroup>
        </Box>

        <Flex flexShrink={0} alignItems="center" gap={{ md: '12px', lg: '18px' }} fontSize="14px">
          {user ? (
            <Flex alignItems="center" gap="8px" whiteSpace="nowrap">
              <Text>Hi, {user.firstName}</Text>
              <Text as="button" type="button" onClick={handleSignOut} cursor="pointer" textDecoration="underline">
                Sign Out
              </Text>
            </Flex>
          ) : (
            <Link to="/login">
              <Text whiteSpace="nowrap">Sign In</Text>
            </Link>
          )}
          <Link to="/">
            <Flex alignItems="center" gap="6px" whiteSpace="nowrap">
              <IoStorefrontOutline size={16} />
              <Text display={{ md: 'none', lg: 'inline' }}>Stores</Text>
            </Flex>
          </Link>
          <Link to="/">
            <Flex alignItems="center" gap="6px" whiteSpace="nowrap">
              <BsBoxSeam size={15} />
              <Text display={{ md: 'none', lg: 'inline' }}>Purchases</Text>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex alignItems="center" gap="6px" position="relative">
              <Image src="/Static/Images/icon-cart.svg" width="22px" alt="Bag" />
              {cartCount > 0 ? (
                <Box
                  position="absolute"
                  top="-8px"
                  right="-10px"
                  bg="#C41E3A"
                  color="white"
                  borderRadius="999px"
                  minW="18px"
                  h="18px"
                  fontSize="11px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="4px"
                >
                  {cartCount}
                </Box>
              ) : null}
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Flex
        width="100%"
        padding="12px 14px"
        gap="12px"
        alignItems="center"
        flexWrap="wrap"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link to="/">
          <Image
            src="/Static/Images/df3a0d48-0df8-483c-81af-7e456c0a47bb.svg"
            width="100px"
            alt="Nordstrom Rack"
          />
        </Link>
        <Flex marginLeft="auto" alignItems="center" gap="14px">
          {user ? (
            <Text as="button" type="button" onClick={handleSignOut} cursor="pointer" fontSize="14px">
              Hi, {user.firstName}
            </Text>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
          <Link to="/cart">
            <Box position="relative">
              <Image src="/Static/Images/icon-cart.svg" width="22px" alt="Bag" />
              {cartCount > 0 ? (
                <Box
                  position="absolute"
                  top="-8px"
                  right="-10px"
                  bg="#C41E3A"
                  color="white"
                  borderRadius="999px"
                  minW="18px"
                  h="18px"
                  fontSize="11px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px="4px"
                >
                  {cartCount}
                </Box>
              ) : null}
            </Box>
          </Link>
          <Link to="/">
            <IoStorefrontOutline size={18} />
          </Link>
        </Flex>
        <Box as="form" onSubmit={handleSearch} width="100%">
          <InputGroup border="1px solid #838D91" width="100%">
            <InputLeftElement pointerEvents="none">
              <Image src="/Static/Images/icon-search.svg" width="18px" alt="" />
            </InputLeftElement>
            <Input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for products or brands"
              borderRadius="none"
            />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  )
}
