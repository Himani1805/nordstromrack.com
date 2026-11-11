import { Box, Input, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export default function FooterBanner() {
  return (
    <Box width="100%" padding={{ base: "20px 14px", md: "35px" }}>
      <Flex
        width="100%"
        justifyContent={{ base: "stretch", md: "right" }}
        gap="20px"
        alignItems={{ base: "stretch", md: "center" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Heading fontSize="16px">Get Email Updates:</Heading>
        <Input
          width={{ base: "100%", md: "20%" }}
          borderRadius="none"
          border="1px solid black"
          placeholder="Email Address"
        />
        <Button
          width={{ base: "100%", md: "20%" }}
          borderRadius="none"
          colorScheme="twitter"
        >
          Sign up
        </Button>
      </Flex>
    </Box>
  )
}
