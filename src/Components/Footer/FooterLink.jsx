import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLink() {
  return (
    <Flex padding={"0px 20px 20px 20px"} gap={"30px"} backgroundColor={"#F0F3F5"} width={'100%'}>
        <Link to={"#"}>Privacy</Link>
        <Flex gap={'6px'} alignItems={"center"}><Link to={"#"}>Your Privacy Rights</Link><Image src='/public/Static/Images/download.svg' width={'30px'}/></Flex>
        <Link to={"#"}>Terms & Conditions</Link>
        <Link to={"#"}>California Supply Chain Act</Link>
        <Link to={"#"}>©2024 Nordstrom Rack</Link>
    </Flex>
  )
}
