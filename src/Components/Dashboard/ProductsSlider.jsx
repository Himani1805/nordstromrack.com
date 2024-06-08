import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ProductsSlider() {
  const [data, setData]=useState([])
  const [loading, setLoading]= useState(false)

  async function getProduct(){
    const options = {
      method: 'GET',
      url: 'https://myntra-data.p.rapidapi.com/search_with_id/22451388',
      headers: {
        'x-rapidapi-key': '97e4f182f3msh02678cb69b9377dp11d6d8jsn8bb7447a7f5f',
        'x-rapidapi-host': 'myntra-data.p.rapidapi.com'
      }
    };
    

    try {
      setLoading (true)
      // let res = await axios.get('https://myntra-data.p.rapidapi.com', {
      //   headers: {
      //     'x-rapidapi-host': 'myntra-data.p.rapidapi.com',
      //     'x-rapidapi-key': '97e4f182f3msh02678cb69b9377dp11d6d8jsn8bb7447a7f5f'
      //   }
      // });
      const response = await axios.request(options);
      console.log(response.data);
      setData(res?.data);
      setLoading(false)
    } catch (error) {

      setLoading(false)
    }
  }
  useEffect(()=>{
    getProduct()
  }, [])

  return (

    <VStack>
      <Flex width={'100%'} flexWrap={'wrap'} justifyContent={'space-evenly'} textAlign={'center'}>
        {
          data.map((ele,i)=>{
            return(
              <Flex key={i} width={'20%'} gap={'20%'}  flexDirection={'column'} justifyContent={'space-evenly'} boxShadow={'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px'} padding={'10px'} alignItems={'center'} >
                <Image src={ele.images[0]} width={'300px'} border={'2px solid red'}/>
                <h2>{ele.title}</h2>
                <h1>{ele.category["name"]}</h1>
                <h3>{ele.price}</h3>
              </Flex>
            )

          })
        }
      </Flex>
    </VStack>
  )
}
