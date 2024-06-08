import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import { Box, Divider, Flex } from '@chakra-ui/react'
import AppRoute from './Router/AppRoute'
import Banner from './Components/Dashboard/Banner'
// import './App.css'

function App() {

  return (
    <Flex width={'100%'} flexDirection={"column"} > 
      <Header/>
      <Divider width={"96%"} margin={"auto"}/>
      <Navbar/>
      <Flex flexDirection={'column'} gap={'40px'} padding={"30px"} >
        <AppRoute/>
      </Flex>
      <Flex width={"100%"}>
        <Footer/>
      </Flex>
    </Flex>
  )
}

export default App
