import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLink() {
  return (
    <Flex
      padding={{ base: "0 14px 24px", md: "0 20px 20px 20px" }}
      gap={{ base: "12px 18px", md: "30px" }}
      backgroundColor="#F0F3F5"
      width="100%"
      flexWrap="wrap"
      fontSize={{ base: "13px", md: "15px" }}
    >
      <Link to="#">Privacy</Link>
      <Flex gap="6px" alignItems="center">
        <Link to="#">Your Privacy Rights</Link>
        <Image src="/Static/Images/download.svg" width="30px" alt="" />
      </Flex>
      <Link to="#">Terms & Conditions</Link>
      <Link to="#">California Supply Chain Act</Link>
      <Link to="#">©2024 Nordstrom Rack</Link>
    </Flex>
  )
}
