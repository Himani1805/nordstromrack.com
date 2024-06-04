import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import { Box, Divider, Flex } from '@chakra-ui/react'
import AppRoute from './Router/AppRoute'
import Banner from './Components/Dashboard/Banner'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flex flexDirection={"column"} gap={"20px"} > 
      <Header/>
      <Divider width={"96%"} margin={"auto"}/>
      <Navbar/>
      <AppRoute/>
      <Footer/> 
    </Flex>
  )
}

export default App
