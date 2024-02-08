import React from 'react'
import Footer from '../../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../../Navbar/Navbar'
import jsonData from '../../../utils/challan.json'
import "./PoliceDashboard.scss";

const PoliceDashboard = () => {
  return (
    <>
        <Navbar />
        <div className='grid'>
          {jsonData.map((data, index) => (
            <div className='item'>
              <Challan key={index} data={data} />
            </div>)
          )}
        </div>
        <Footer />
    </>

  )
}

export default PoliceDashboard