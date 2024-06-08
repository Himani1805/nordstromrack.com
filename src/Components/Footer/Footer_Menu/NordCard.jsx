import React from 'react'
import { Heading, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function NordCard() {
  return (
    <VStack textAlign={"left"} align={"left"}>
        <Heading fontSize={"16px"}>Nordstrom Card</Heading>
        <Link to={"#"}>Apply for a  Nordstrom Card</Link>
        <Link to={"#"}>Pay My Bill</Link>
        <Link to={"#"}>Manange my Nordstrom Card</Link>
    </VStack>
  )
}
