import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useRazorpay from "react-razorpay";
import axios from "axios";
import Button from "../button/Button";


const Challan = ({data, isPending=true}) => {
  const [Razorpay, isLoaded] = useRazorpay();

  console.log(data)
  const navigate = useNavigate();
  const handleChallengeClick = async () => {
    navigate("/challenge", { state: data });
  }
  
  const handlePayClick = async(e) => {
    const API_URL = 'http://localhost:3000/';
    e.preventDefault();
    const orderUrl = `${API_URL}order`;
    const response = await axios.get(orderUrl);
    const { data } = response;
    console.log(data);
    const options = {
      key: "rzp_test_euZ7U1egQIuWP9",
      name: "sadhak",
      description: "Payment",
      order_id: data.id,
      handler: async (response) => {
        try {
        const paymentId = response.razorpay_payment_id;
        const url = `${API_URL}capture/${paymentId}`;
        const captureResponse = await axios.post(url, {})
        console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();

  }

  return (
    <div className="challan">
      <div className="">
        <img src={data.img} alt="car" />
      </div>
      <div className="rightside">
        <div className="rightcontainer px-4">
          <div className="challan__info">
            <span className="challan_id">Challan Number: {data.challan_id}</span>
            <p className="mb-2">Reason: {data.reason}</p>
            <p className="mb-2">Location: {data.location}</p>
            
          </div>
          
          <div className="amount mt-4">Amount: Rs. {data.amount}</div>
          
        </div>

      {isPending && <>
        <hr className="line"/>

        <div className="buttons">
          <Link to="/challenge" state={data}>
            <Button children="Challenge" onClick= {handleChallengeClick} color ="#ffffff"/>
          </Link>
          
          <Button children="Pay" onClick = {handlePayClick} color= "#100775"/>
        </div>
      </>}
      </div>
      
    </div>
  );
};

export default Challan;
