import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Flex gap={"20px"}>
        <Link to={"#"}>New</Link>
        <Link to={"#"}>Clearance</Link>
        <Link to={"#"}>Women</Link>
        <Link to={"#"}>Men</Link>
        <Link to={"#"}>Kids</Link>
        <Link to={"#"}>Shoes</Link>
        <Link to={"#"}>Bags & Accessories</Link>
        <Link to={"#"}>Home</Link>
        <Link to={"#"}>Beauty</Link>
        <Link to={"#"}>Gift Guide</Link>
        <Link to={"#"}>Flash Events</Link>
    </Flex>
  )
}