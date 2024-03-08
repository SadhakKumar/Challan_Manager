import React,{useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import {getVehicleNo, getChassisNo} from '../../features/Search/SearchSlice'
// import axios from '../../api/axios'
import axios from 'axios'
import Cookies from 'js-cookie'

const ViewChallanLayout = () => {

  const [challans, setChallans] = useState();
  const [onMount, setOnMount] = useState(false);

  const vehicleNo = useSelector(getVehicleNo);
  const chassisNo = useSelector(getChassisNo);
  const token = Cookies.get("token");

  useEffect(() => {
    
    const getChallans = async() =>{
      const response = await axios.get(`https://pbfw4n92-4002.inc1.devtunnels.ms/getChallans/${vehicleNo}`,{
        headers: {
          Authorization: token,
        },
      
      });
      console.log(response.data.result);
      setChallans(JSON.parse(response.data.result));
    }
    getChallans();
  },[chassisNo, vehicleNo]);

  useEffect(() => {
    if(challans != []){
      setOnMount(true)
    }else{
      setOnMount(false)
    }
  },[challans])

  console.log(challans);

  const render = onMount && challans && challans.res && challans.res.length > 0 ? challans.res.map((data, index) => {
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