import { Box, Divider, Flex, Heading, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoStorefrontOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { BsBag } from "react-icons/bs";

export default function Header() {
  return (
    <Box width={"100%"} justifyContent={"space-between"} >
      <Flex backgroundColor={"#186ADC"} color={"white"} padding={"8px 0px"} justifyContent={"center"}>Free shipping on most orders over $89. Shop online or pick up select orders at a Nordstrom Rack or Nordstrom store.{"\u00A0"}<Link><u>Learn More</u></Link></Flex>
      <Flex width={"100%"} padding={"20px"} >
        <Flex width={"20%"}>
          <Image src="public/Static/Images/df3a0d48-0df8-483c-81af-7e456c0a47bb.svg" width={"120px"}/>
        </Flex>
        <Flex width={"50%"}>
          <InputGroup border={"1px solid #838D91"} >
            <InputLeftElement>
              <Image src="public/Static/Images/download%20(5).svg" width={"20px"}/>
            </InputLeftElement>
            <Input placeholder="Search for products or brands" borderRadius={"none"} />
          </InputGroup>
        </Flex>
        <Flex width={"30%"} justifyContent={"space-evenly"}>
          <Link to='#'>Sign In</Link>
          <Image src="public/Static/Images/download%20(3).svg" width={"25px"} />
          <Link to='#'><Flex alignItems={"center"} gap={"10px"}> <IoStorefrontOutline /> Stores</Flex></Link>
          <Link to='#'><Flex alignItems={"center"} gap={"10px"}> <BsBoxSeam /> Purchases</Flex></Link>
          <Link to='#'> <BsBag /> </Link>
        </Flex>
      </Flex>
    </Box>
  )
}
