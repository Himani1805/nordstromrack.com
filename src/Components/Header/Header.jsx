import { Box, Flex, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Flex>
      <Flex>
        <Image src=""/>
      </Flex>
      <Flex>
        <Input placeholder="Search for products or brands"/>
      </Flex>
      <Flex>
        <Link>Sign In</Link>
        <Link>Stores</Link>
        <Link>Purchases</Link>
      </Flex>
    </Flex>
  )
}
