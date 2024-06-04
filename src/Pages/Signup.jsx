import { Box, Button, Checkbox, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCreditCard2Front } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { PiSketchLogoThin } from "react-icons/pi";

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
    <Flex width={"100%"} justifyContent={"space-evenly"} > 
      <Flex width={"32%"} flexDirection={"column"} gap={"20px"} padding={"50px"}>
        <Heading fontSize={"24px"}>Create Account</Heading>
        <Flex gap={"10px"}><BsCreditCard2Front />Check out faster</Flex>
        <Flex gap={"10px"}><BsTruck/>Track orders easily</Flex>
        <Flex gap={"10px"}><PiSketchLogoThin />Use one sign-in across our brands</Flex>
        <Text>*Required</Text>
        <Heading fontSize={"16px"}>Email</Heading>
        <Text></Text>
        <Box lineHeight={"60px"}>
          <Heading fontSize={"14px"}>First name*</Heading>
          <Input type='name' name='name' border={"1px solid #838D91"}  onChange={handleChange}/>
        </Box>
        <Box lineHeight={"60px"}>
          <Heading fontSize={"14px"}>Last name*</Heading>
          <Input type='name' name='name' border={"1px solid #838D91"}  onChange={handleChange}/>
        </Box>
        <Box lineHeight={"60px"}>
          <Heading fontSize={"14px"} >Create password*</Heading>
          <Input type='password' placeholder='Show' name='password' border={"1px solid #838D91"}  onChange={handleChange}/>
        </Box>
        <Checkbox>Keep me signed in.Details</Checkbox>
        <Text>By creating an account, you agree to our Privacy Policy and Terms & Conditions.</Text>
        <Button onClick={handleLogin} width={"100%"} colorScheme='twitter' >Create Account</Button> 
      </Flex>
    </Flex>
  )
}
