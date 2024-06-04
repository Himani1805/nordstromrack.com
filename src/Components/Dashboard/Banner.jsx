import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner(props) {
  return (
    <Box>
      <Link to={"#"}><Image src={props.img}/></Link>
    </Box>
  )
}
