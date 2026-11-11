import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import { Divider, Flex } from '@chakra-ui/react'
import AppRoute from './Router/AppRoute'

function App() {
  return (
    <Flex
      width="100%"
      maxW="100vw"
      flexDirection="column"
      overflowX="hidden"
    >
      <Header />
      <Divider width="96%" margin="auto" />
      <Navbar />
      <Flex
        flexDirection="column"
        gap={{ base: '20px', md: '32px' }}
        padding={{ base: '16px 12px', md: '24px 20px' }}
        width="100%"
        maxW="1400px"
        mx="auto"
        overflow="hidden"
      >
        <AppRoute />
      </Flex>
      <Flex width="100%" overflow="hidden">
        <Footer />
      </Flex>
    </Flex>
  )
}

export default App
