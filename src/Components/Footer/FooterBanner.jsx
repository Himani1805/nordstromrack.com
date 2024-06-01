import { Box, Input, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export default function FooterBanner() {
  return (
    <Box width={"100%"} padding={"35px"}>
      <Flex backgroundColor={"black"} color={"white"}>
        <Box width={"50%"}>
          <Heading fontSize={"60px"} >BE FIRST TO KNOW</Heading>
        </Box>
        <Box width={"50%"}>
          <h3>Get the inside scoop one new arrivals from Nordstrom, ne markdowns, private sales and more</h3>
          <h3>Sign Up for Email</h3> 
        </Box> 
      </Flex>
      <Flex justifyContent={"flex-end"} backgroundColor={"greenyellow"}>
        <Box width={"50%"}>
          {/* For layout purpose. we leave this box empty. */}
        </Box>
        <Flex width={"50%"} >
          <h2>Get Email Updates:</h2>
          <Input width={"40%"} palceholder="Email Address"></Input>
          <Button width={"40%"}>Sign up</Button>
        </Flex>
      </Flex>
    </Box>
  )
}
