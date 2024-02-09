import React, { useState } from 'react'
import Footer from '../../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../../Navbar/Navbar'
import "./PoliceDashboard.scss";
import { Link } from 'react-router-dom'
import Button from '../../button/Button'
import axios from '../../../api/axios';
import CarCard from '../CarCard/CarCard';

const PoliceDashboard = () => {

  const[challans, setChallans] = useState(null);
  const[car, setCar] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const vehicleNo = evt.target[0].value;
    const responseChallans = await axios.get(`/challans?vehicle_no=${vehicleNo}`);
    setChallans(responseChallans?.data[0]?.challans??null);
    const responseCar = await axios.get(`/cars?vehicle=${vehicleNo}`);
    setCar(responseCar?.data[0]??null);
  }
  
  return (
    <>
        <Navbar />
        <div className="police_container">
          <form className="vehicle-number-input" onSubmit={evt=>handleSubmit(evt)}>
              <input
                type="text"
                id="searchByVehicleNumber"
                name="searchByVehicleNumber"
                placeholder='Search by Vehicle Number'
              />
          </form>
          <div>
            {car ? <CarCard data={car} /> : <h1>No Vehicle Found</h1> }
          </div>
          { car && (challans ? <h1>Challans Found: {challans.length}</h1> : <h1>No Challans Found</h1>) }
          <div className='grid'>
            {challans && challans.map((data, index) => (
              <div className='item'>
                <Challan key={index} data={data} />
              </div>)
            )}
          </div>
            <div className="add-challenge-button">
              <Link to="/">
                <Button children="Add Challan" onClick={()=>console.log("Challenge added!")} color ="#100775"/>
              </Link>
            </div>
        </div>
        <Footer />
    </>

  )
}

export default PoliceDashboard