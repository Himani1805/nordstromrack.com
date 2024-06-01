import React from 'react'
import { Heading, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NordCommunity() {
  return (
    <VStack>
        <Heading fontSize={"16px"}>Nordstrom Rack & The Community</Heading>
        <Link to={"#"}>Corporate Social Responsibility</Link>
        <Link to={"#"}>Diversity, Equity, Inclusion & Belonging</Link>
        <Link to={"#"}>Big Brothers Big Siters</Link>
        <Link to={"#"}>Donate Clothes</Link>
    </VStack>
  )
}
