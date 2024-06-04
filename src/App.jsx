import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import { Box, Divider, Flex } from '@chakra-ui/react'
import Slider from './Components/Dashboard/Slider'
import ProductsSlider from './Components/Dashboard/ProductsSlider'
import AppRoute from './Router/AppRoute'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flex flexDirection={"column"} gap={"20px"} > 
      <Header/>
      <Divider width={"96%"} margin={"auto"}/>
      <Navbar/>
      <Slider/>
      <ProductsSlider/>
      <AppRoute/>
      <Footer/> 
    </Flex>
  )
}

export default App
