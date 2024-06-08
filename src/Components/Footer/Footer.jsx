import React from 'react'
import FooterBanner from './FooterBanner'
import FooterLink from './FooterLink'
import FooterMenu from './FooterMenu'
import { Box } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box width={'100%'}>
      <FooterBanner />
      <FooterMenu/>
      <FooterLink/>
    </Box>
  )
}

