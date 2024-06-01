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
    <VStack>
        <Flex>
            <Box>
                <Flex gap={"10px"}>
                  <HiMiniDevicePhoneMobile width={"100px"} />
                  <Link to={"#"}>Download Our Apps</Link>
                </Flex>
                <Flex gap={"20px"}>
                  <FaFacebook />
                  <FaXTwitter />
                  <FaPinterest />
                  <LuInstagram />
                </Flex>
            </Box>
        </Flex> 
        <Box>
          <p>Top</p>
        </Box>
    </VStack>
  )
}
