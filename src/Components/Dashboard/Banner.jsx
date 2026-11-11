import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner(props) {
  return (
    <Box width="100%">
      <Link to="#">
        <Image src={props.img} width="100%" height="auto" display="block" alt="" />
      </Link>
    </Box>
  )
}
