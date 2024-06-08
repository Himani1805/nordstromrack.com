import { Box, Flex, VStack,  } from '@chakra-ui/react'
import React from 'react'
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

export default function DownloadOurApps() {
  return (
    <VStack textAlign={"left"} align={"left"} >
        <Flex flexDirection={"column"} gap={"30px"} alignItems={"center"}> 
          <Flex gap={"10px"}>
            <HiMiniDevicePhoneMobile size={"30px"} />
            <Link to={"#"}>Download Our Apps</Link>
          </Flex>
          <Flex gap={"20px"} >
            <FaFacebook size={"25px"}/>
            <FaXTwitter size={"25px"} />
            <FaPinterest size={"25px"}/>
            <LuInstagram size={"25px"}/>
          </Flex>
        </Flex> 
        <Box>
          <p>Top</p>
        </Box>
    </VStack>
  )
}
