import React from 'react'
import { Heading, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function NordInc() {
  return (
    <VStack textAlign={"left"} align={"left"}>
        <Heading fontSize={"16px"}>Nordstrom, Inc.</Heading>
        <Link to={"#"}>Nordstrom</Link>
        <Link to={"#"}>HauteLook</Link>
        <Link to={"#"}>Investor Realtions</Link>
        <Link to={"#"}>Press Releases</Link>
        <Link to={"#"}>Nordstrom Media Network</Link>
    </VStack>
  )
}
