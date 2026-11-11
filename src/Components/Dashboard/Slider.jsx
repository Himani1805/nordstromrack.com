import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Box } from '@chakra-ui/react'

const images = [
  '/Static/Images/SliderImg1.jpeg',
  '/Static/Images/SliderImg2.jpeg',
  '/Static/Images/SliderImg3.jpeg',
]

export default function Example() {
  return (
    <Box width="100%" overflow="hidden">
      <Slide duration={4000} transitionDuration={400} indicators={false}>
        {images.map((image, index) => (
          <Box
            key={index}
            width="100%"
            height={{ base: '200px', sm: '260px', md: '350px' }}
            backgroundImage={`url(${image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          />
        ))}
      </Slide>
    </Box>
  )
}
