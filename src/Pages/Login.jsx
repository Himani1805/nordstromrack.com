import { Box, Button, Checkbox, Flex, Heading, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const toast = useToast()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  function handleLogin() {
    if (!data.email.trim() || !data.password.trim()) {
      toast({ title: 'Enter email and password.', status: 'warning', duration: 2500, isClosable: true })
      return
    }

    const users = JSON.parse(localStorage.getItem('nordstromUsers') || '[]')
    const user = users.find(
      (item) =>
        item.email.toLowerCase() === data.email.trim().toLowerCase() &&
        item.password === data.password
    )

    if (!user) {
      toast({
        title: 'Wrong email or password. Create an account first if you are new.',
        status: 'error',
        duration: 3500,
        isClosable: true,
      })
      return
    }

    localStorage.setItem('nordstromUser', JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    }))
    toast({ title: `Welcome back, ${user.firstName}!`, status: 'success', duration: 2500, isClosable: true })
    navigate('/')
  }

  return (
    <Flex width="100%" justifyContent="center" margin="5px 0px" px={{ base: '12px', md: '0' }}>
      <Flex
        width={{ base: '100%', md: '420px' }}
        flexDirection="column"
        border="1px solid gray"
        gap="20px"
        padding={{ base: '24px 16px', md: '50px' }}
      >
        <Heading fontSize="24px">Sign in</Heading>
        <Text>
          New to Nordstrom Rack?{' '}
          <Link to="/signup" style={{ color: '#3A80E1' }}>Create an account.</Link>
        </Text>
        <Box>
          <Heading fontSize="14px" mb="8px">Email</Heading>
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Heading fontSize="14px" mb="8px">Password</Heading>
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </Box>
        <Text><Link to="/signup">Forgot Password</Link></Text>
        <Checkbox>Keep me signed in</Checkbox>
        <Text>By signing in to your account, you agree to our Privacy Policy and Terms & Conditions.</Text>
        <Button onClick={handleLogin} width="100%" colorScheme="twitter">Sign In</Button>
      </Flex>
    </Flex>
  )
}
