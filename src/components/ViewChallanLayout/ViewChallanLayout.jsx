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

  // const setstate = async() => {
  //   const vehicleNo = await useSelector(getVehicleNo);
  //   const chassisNo = await useSelector(getChassisNo);

  //   setVehicleNumber(vehicleNo);
  //   setChassisNumber(chassisNo);
  // }
 
  

  const getChallans = async() =>{
    const response = await axios.get('/challans?vehicle_no='+vehicleNumber+'&chassis_no='+chassisNumber);
    setChallans(response.data);
  }

  useEffect(() => {
    // setstate()

    getChallans();
    
  },[])

  console.log(challans);
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