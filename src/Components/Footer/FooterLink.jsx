import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLink() {
  return (
    <Flex>
        <Link to={"#"}>Privacy</Link>
        <Link to={"#"}>Your Privacy Rights</Link>
        <Link to={"#"}>Terms & Conditions</Link>
        <Link to={"#"}>California Supply Chain Act</Link>
        <Link to={"#"}>©2024 Nordstrom Rack</Link>
    </Flex>
  )
}
