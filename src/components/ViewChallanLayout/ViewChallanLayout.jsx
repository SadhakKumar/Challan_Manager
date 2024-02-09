import React,{useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import {getVehicleNo, getChassisNo} from '../../features/Search/SearchSlice'
import axios from '../../api/axios'

const ViewChallanLayout = () => {

  const [challans, setChallans] = useState([]);

  const vehicleNo = useSelector(getVehicleNo);
  const chassisNo = useSelector(getChassisNo);

  useEffect(() => {
    const getChallans = async() =>{
      const response = await axios.get('/challans?vehicle_no='+vehicleNo+'&chassis_no='+chassisNo);
      setChallans(response.data);
    }
    getChallans();
  },[chassisNo, vehicleNo]);

  console.log(challans);

  const render = challans.length > 0 ? challans[0].challans.map((data, index) => {
    return (
      <Challan key={index} data={data}/>
    )
  }): <h1>No Challans Found</h1>

  return (
    <>
        <Navbar/>
        {render}
        <Footer/>
    </>

  )
}

export default ViewChallanLayout