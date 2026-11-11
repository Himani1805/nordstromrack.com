import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function StripBanner({
  title,
  subtitle,
  titleColor = 'white',
  bg = 'black',
}) {
  return (
    <Box
      width="100%"
      bg={bg}
      color="white"
      px={{ base: '12px', md: '20px' }}
      py={{ base: '12px', md: '14px' }}
      textAlign="center"
    >
      <Flex
        direction={{ base: 'column', md: subtitle ? 'row' : 'column' }}
        align="center"
        justify="center"
        gap={{ base: '4px', md: '14px' }}
        flexWrap="wrap"
      >
        <Text
          fontSize={{ base: '18px', sm: '22px', md: '28px' }}
          fontWeight="800"
          letterSpacing="0.04em"
          color={titleColor}
          lineHeight="1.1"
        >
          {title}
        </Text>
        {subtitle ? (
          <Text fontSize={{ base: '12px', md: '14px' }} color="white" maxW="480px" opacity={0.95}>
            {subtitle}
          </Text>
        ) : null}
      </Flex>
    </Box>
  )
}
