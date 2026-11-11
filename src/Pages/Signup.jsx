import { Box, Button, Checkbox, Flex, Heading, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsCreditCard2Front } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { PiSketchLogoThin } from "react-icons/pi";

export default function Signup() {
  const navigate = useNavigate()
  const toast = useToast()
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  function handleSignup() {
    if (!data.firstName.trim() || !data.lastName.trim() || !data.email.trim() || !data.password.trim()) {
      toast({ title: 'Please fill all required fields.', status: 'warning', duration: 2500, isClosable: true })
      return
    }

    const users = JSON.parse(localStorage.getItem('nordstromUsers') || '[]')
    const exists = users.some((user) => user.email.toLowerCase() === data.email.toLowerCase())
    if (exists) {
      toast({ title: 'This email already has an account. Please sign in.', status: 'error', duration: 3000, isClosable: true })
      return
    }

    const newUser = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim().toLowerCase(),
      password: data.password,
    }
    users.push(newUser)
    localStorage.setItem('nordstromUsers', JSON.stringify(users))
    localStorage.setItem('nordstromUser', JSON.stringify({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    }))

    toast({ title: 'Account created. You are signed in.', status: 'success', duration: 2500, isClosable: true })
    navigate('/')
  }

  return (
    <Flex width="100%" justifyContent="center" px={{ base: '12px', md: '0' }}>
      <Flex
        width={{ base: '100%', md: '420px' }}
        flexDirection="column"
        gap="20px"
        padding={{ base: '24px 16px', md: '50px' }}
      >
        <Heading fontSize="24px">Create Account</Heading>
        <Flex gap="10px" alignItems="center"><BsCreditCard2Front />Check out faster</Flex>
        <Flex gap="10px" alignItems="center"><BsTruck />Track orders easily</Flex>
        <Flex gap="10px" alignItems="center"><PiSketchLogoThin />Use one sign-in across our brands</Flex>
        <Text>*Required</Text>
        <Text>Already have an account? <Link to="/login" style={{ color: '#3A80E1' }}>Sign in</Link></Text>
        <Box>
          <Heading fontSize="14px" mb="8px">Email*</Heading>
          <Input type="email" name="email" border="1px solid #838D91" value={data.email} onChange={handleChange} />
        </Box>
        <Box>
          <Heading fontSize="14px" mb="8px">First name*</Heading>
          <Input type="text" name="firstName" border="1px solid #838D91" value={data.firstName} onChange={handleChange} />
        </Box>
        <Box>
          <Heading fontSize="14px" mb="8px">Last name*</Heading>
          <Input type="text" name="lastName" border="1px solid #838D91" value={data.lastName} onChange={handleChange} />
        </Box>
        <Box>
          <Heading fontSize="14px" mb="8px">Create password*</Heading>
          <Input type="password" name="password" border="1px solid #838D91" value={data.password} onChange={handleChange} />
        </Box>
        <Checkbox>Keep me signed in</Checkbox>
        <Text>By creating an account, you agree to our Privacy Policy and Terms & Conditions.</Text>
        <Button onClick={handleSignup} width="100%" colorScheme="twitter">Create Account</Button>
      </Flex>
    </Flex>
  )
}
