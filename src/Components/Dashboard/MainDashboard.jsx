import React from 'react'
import Banner from './Banner'
import Slider from './Slider'
import ProductsSlider from './ProductsSlider'


export default function MainDashboard() {
  return (
    <div>
      <Banner img='/public/Static/Images/e61d2a70-f58e-48a5-90f4-f9d7bde16fab.png'/>
      <Slider/>
      <Banner img='/public/Static/Images/676ce1c2-5c5e-48cc-9d8e-8c8fd2e28ab3.png'/>
      <ProductsSlider/>
      <Banner img='/public/Static/Images/88e07558-0854-43ea-9840-ffd319f48007 (1).jpeg'/>
      <Banner img='/public/Static/Images/711783c2-afb6-48cb-aaa5-a3f272c55065.png'/>
      <Banner img='/public/Static/Images/676ce1c2-5c5e-48cc-9d8e-8c8fd2e28ab3.png'/>
      <Banner img='/public/Static/Images/dbf42fe6-1fdb-415e-ad6a-35fb06afaf14.png'/>
      <Banner img='/public/Static/Images/d8c397d5-4b73-469e-ab75-edce1263c243.png'/>
      <Banner img='/public/Static/Images/9124cf9a-7133-4e76-85dc-d7052869884a.png'/>
    </div>
  )
}
