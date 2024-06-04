import { Box, Input, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export default function FooterBanner() {
  return (
    <Box width={"100%"} padding={"35px"}>
      <Flex width={"100%"} justifyContent={"right"} gap={"20px"} alignItems={"center"}>
        <Heading fontSize={"16px"}>Get Email Updates:</Heading>
        <Input width={"20%"} borderRadius={"none"} border={"1px solid black"} palceholder="Email Address"></Input>
        <Button width={"20%"} borderRadius={"none"} colorScheme='twitter'>Sign up</Button>
      </Flex>
    </Box>
  )
}
