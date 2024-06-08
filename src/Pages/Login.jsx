import { Box, Button, Checkbox, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [data, setData]=useState({
    email:"",
    password:""
  })

  async function handleLogin(){
    let res = await axios.post("", data)
    console.log(res.data)
  }
  function handleChange(e){
    const {name, value} = e.target
    setData({...data, [name]:value})
  }
  return (
    <Flex width={"100%"} justifyContent={"space-evenly"} margin={"5px 0px"} > 
      <Flex width={"38%"} flexDirection={"column"} border={"1px solid gray"} gap={"20px"} padding={"50px"}>
        <Heading fontSize={"24px"}>Sign in</Heading>
        <Text>New to Nordstrom Rack?</Text><Link to={"#"} color={'#3A80E1'}> Create an account.</Link>
        <Box lineHeight={"60px"}>
          <Heading fontSize={"14px"}>Email</Heading>
          <Input type='email' placeholder='Enter your email' name='email' onChange={handleChange}/>
        </Box>
        <Box lineHeight={"60px"}>
          <Heading fontSize={"14px"} >Password</Heading>
          <Input type='password' placeholder='Show' name='password' onChange={handleChange}/>
        </Box>
        <Text><Link to={"#"}> Forgot Password</Link></Text>
        <Checkbox>Keep me signed in.Details</Checkbox>
        <Text>By signing in to your account, you agree to our Privacy Policy and Terms & Conditions.</Text>
        <Button onClick={handleLogin} width={"100%"} colorScheme='twitter' >Sign In</Button>
      </Flex>
    </Flex>
  )
}
