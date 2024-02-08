import React from 'react'
import Footer from '../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../Navbar/Navbar'
import jsonData from '../../utils/challan.json'

const ViewChallanLayout = () => {
  return (
    <>
        <Navbar/>
        {jsonData.map((data, index) => {
          return (
            <Challan key={index} data={data}/>
          )
        })}
        <Footer/>
    </>

  )
}

export default ViewChallanLayout