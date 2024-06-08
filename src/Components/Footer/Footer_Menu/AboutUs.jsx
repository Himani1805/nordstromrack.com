import React from 'react'
import { Heading, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <VStack textAlign={"left"} align={"left"}>
        <Heading fontSize={"16px"}>About Us</Heading>
        <Link to={"#"}>About Our Brand</Link>
        <Link to={"#"}>The Nordy Club</Link>
        <Link to={"#"}>Store Locator</Link>
        <Link to={"#"}>All Brands</Link>
        <Link to={"#"}>Careers</Link>
        <Link to={"#"}>Get Email Updates</Link>
        <Link to={"#"}>Nordstrom Blog</Link>
        <Link to={"#"}>Nordy Podcast</Link>
        <Link to={"#"}>Store Openings</Link>
    </VStack>
  )
}
