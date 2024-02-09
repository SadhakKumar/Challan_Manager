import React,{useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../Navbar/Navbar'
import jsonData from '../../utils/challan.json'
import { useSelector,useDispatch } from 'react-redux'
import {getVehicleNo, getChassisNo} from '../../features/Search/SearchSlice'
import axios from '../../api/axios'

const ViewChallanLayout = () => {

  const dispatch = useDispatch();
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');
  const [challans, setChallans] = useState([]);

  const vehicleNo = useSelector(getVehicleNo);
  const chassisNo = useSelector(getChassisNo);


  const getChallans = async() =>{
    const response = await axios.get('/challans?vehicle_no='+vehicleNo+'&chassis_no='+chassisNo);
    setChallans(response.data);
  }

  useEffect(() => {
    setVehicleNumber(vehicleNo);
    setChassisNumber(chassisNo);
   
    getChallans();
    
  },[dispatch,vehicleNo,chassisNo])

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