import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import axios from "axios";
import { useSelector } from 'react-redux'
import {getVehicleNo, getChassisNo} from '../../features/Search/SearchSlice'


// Status update wala api lagega for cars

const Challan = ({data,owner, isPending=true}) => {
  const navigate = useNavigate();
  const vehicleNo = useSelector(getVehicleNo);

  const updateStatus = async() => {
    try{
      const updateChallanStatus = await axios.put("https://vhkmn0g6-8000.inc1.devtunnels.ms/updatestatus",{
          "vehicle_number": vehicleNo,
          "challan_id": data.ChallanID,
          "new_status": "Completed"
      },{
        headers: {
          'Content-Type': 'application/json'
        }
    });
    console.log(updateChallanStatus);
    window.location.reload();
    // navigate('/view')
    }catch (error){
        console.error('Error fetching challenged challans with error:', error);
    }
  }

  const initPayment = async(info)=>{
    const options = {
      key : "rzp_test_euZ7U1egQIuWP9",
      amount : info.amount,
      currency: info.currency,
      name : data.ChallanID,
      description: "challan payment",
      order_id: info.id,

      handler: async(response) =>{
        try {
          const verifyUrl = "http://localhost:4000/verify"
          const res = await axios.post(verifyUrl,response);
          console.log(res);
          if(res.status == 200){
            await updateStatus();
          }
        } catch (error) {
          console.log(error); 
        }
      },
      theme: {
        color: "#686CFD",
      },
      
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open(); 
  }
  const handlePayClick = async(e) => {
    try {
      const API_URL = 'http://localhost:4000/';
      e.preventDefault();
      const orderUrl = `${API_URL}order`;
      const response = await axios.post(orderUrl,{
        amount : data.Fine
      });
      console.log(response);
      initPayment(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="challan">
      <div>
        <img src={data.ImageLink} alt="car" />
      </div>
      <div className="rightside">
        <div className="rightcontainer px-4">
          <div className="challan__info">
            <span className="challan_id">Challan Number: {data.ChallanID.length > 15 ? data.ChallanID.substring(0, 15) + "..." : data.ChallanID}</span>
            <p className="mb-2">Reason: {data.Reason}</p>
            <p className="mb-2">Location: {data.Location.length >50 ? data.Location.substring(0,50) + "..." : data.Location}</p>
          </div>  
          <div className="amount mt-4">Amount: Rs. {data.Fine}</div>
        </div>

        {isPending && (
          <>
            <hr className="line" />
            <div className="buttons">
              <Link to="/challenge" state={{ data: data, owner: owner }}>
                <Button children="Challenge" color="#ffffff" />
              </Link>
              <Button children="Pay" onClick={handlePayClick} color="#100775" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Challan;
