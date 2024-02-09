import React,{useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../Navbar/Navbar'
import jsonData from '../../utils/challan.json'
import { useSelector,useDispatch } from 'react-redux'
import {getVehicleNo, getChassisNo} from '../../features/Search/SearchSlice'

const ViewChallanLayout = () => {

  const dispatch = useDispatch();
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');

 
  const vehicleNo = useSelector(getVehicleNo);
  const chassisNo = useSelector(getChassisNo);
  
  useEffect(() => {
    setVehicleNumber(vehicleNo);
    setChassisNumber(chassisNo);
  },[dispatch])
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