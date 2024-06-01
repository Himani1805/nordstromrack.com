import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerService() {
  return (
    <VStack>
        <Heading fontSize={"16px"}>Customer Service</Heading>
        <Link to={"#"}>Order Status</Link>
        <Link to={"#"}>Guest Returns</Link>
        <Link to={"#"}>Shipping & Return Policy</Link>
        <Link to={"#"}>Gift Cards</Link>
        <Link to={"#"}>Product Recalls</Link>
        <Link to={"#"}>FAQ</Link>
        <Link to={"#"}>Contact Us</Link>
    </VStack>
  )
}
