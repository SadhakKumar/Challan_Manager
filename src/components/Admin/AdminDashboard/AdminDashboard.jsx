import React from 'react'
import Footer from '../../Footer/Footer'
import Challan from '../../Police/ChallanInfoCard/ChallanInfoCard'
import Navbar from '../../Navbar/Navbar'
import jsonData from '../../../utils/challan.json'
import "./AdminDashboard.scss";
import { Link } from 'react-router-dom'
import Button from '../../button/Button'

const AdminDashboard = () => {
  return (
    <>
        <Navbar />
        <div className="police_container">
          {/* <div className="vehicle-number-input">
              <input
                type="text"
                id="searchByVehicleNumber"
                name="searchByVehicleNumber"
                placeholder='Search by Vehicle Number'
              />
          </div> */}
          <div className='grid'>
            {jsonData.map((data, index) => (
              <div className='item'>
                <Challan key={index} data={data} />
              </div>)
            )}
          </div>
            <div className="add-challenge-button">
              <Link to="/">
                <Button children="Add Challenge" onClick={()=>console.log("Challenge added!")} color ="#100775"/>
              </Link>
            </div>
        </div>
        <Footer />
    </>

  )
}

export default AdminDashboard