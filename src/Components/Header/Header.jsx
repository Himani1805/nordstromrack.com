import { Box, Divider, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoStorefrontOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { BsBag } from "react-icons/bs";

export default function Header() {
  return (
    <Flex width={"100%"} justifyContent={"space-between"}>
      <Flex width={"20%"}>
        {/* <Image src=""/> */}
        <Text fontSize={"10px"}>NORDSTROM</Text><br />
        <Heading>RACK</Heading>
      </Flex>
      <Flex width={"50%"}>
        <Input placeholder="Search for products or brands"/>
      </Flex>
      <Flex width={"40%"} justifyContent={"space-evenly"}>
        <Link to='#'>Sign In</Link>
        <Link to='#'><Flex alignItems={"center"} gap={"10px"}> <IoStorefrontOutline /> Stores</Flex></Link>
        <Link to='#'><Flex alignItems={"center"} gap={"10px"}> <BsBoxSeam /> Purchases</Flex></Link>
        <Link to='#'> <BsBag /> </Link>
      </Flex>
    </Flex>
  )
}
