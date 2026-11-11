import { Flex } from '@chakra-ui/react'
import React from 'react'
import AboutUs from './Footer_Menu/AboutUs'
import CustomerService from './Footer_Menu/CustomerService'
import NordCommunity from './Footer_Menu/NordCommunity'
import NordCard from './Footer_Menu/NordCard'
import NordInc from './Footer_Menu/NordInc'
import DownloadOurApps from './Footer_Menu/DownloadOurApps'

export default function FooterMenu() {
  return (
    <Flex
      width="100%"
      backgroundColor="#F0F3F5"
      padding={{ base: "24px 14px", md: "40px" }}
      gap="20px"
      display={{ base: "flex", md: "flex" }}
      flexWrap={{ base: "wrap", md: "nowrap" }}
      justifyContent={{ base: "flex-start", md: "space-between" }}
    >
      <Flex width={{ base: "47%", md: "auto" }}>
        <CustomerService />
      </Flex>
      <Flex width={{ base: "47%", md: "auto" }}>
        <AboutUs />
      </Flex>
      <Flex width={{ base: "47%", md: "auto" }}>
        <NordCommunity />
      </Flex>
      <Flex width={{ base: "47%", md: "auto" }}>
        <NordCard />
      </Flex>
      <Flex width={{ base: "47%", md: "auto" }}>
        <NordInc />
      </Flex>
      <Flex width={{ base: "47%", md: "auto" }}>
        <DownloadOurApps />
      </Flex>
    </Flex>
  )
}
