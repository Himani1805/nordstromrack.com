import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import AboutUs from './Footer_Menu/AboutUs'
import CustomerService from './Footer_Menu/CustomerService'
import NordCommunity from './Footer_Menu/NordCommunity'
import NordCard from './Footer_Menu/NordCard'
import NordInc from './Footer_Menu/NordInc'
import DownloadOurApps from './Footer_Menu/DownloadOurApps'

export default function FooterMenu() {
  return (
    <Flex width={'100%'} backgroundColor={"#F0F3F5"} p={"40px"} gap={"20px"} >
      <CustomerService/>
      <AboutUs/>
      <NordCommunity/>
      <NordCard/>
      <NordInc/>
      <DownloadOurApps/>
    </Flex>
  )
}
