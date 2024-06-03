import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import axios from "axios";


// Status update wala api lagega for cars

const Challan = ({data,owner, isPending=true}) => {
  const navigate = useNavigate();
  const handleChallengeClick = () => {
    console.log("Challenge Clicked");
    // navigate("/challenge");
  }
  const handlePayClick = async(e) => {
    const API_URL = 'http://localhost:4000/';
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
                <Button children="Challenge" onClick={handleChallengeClick} color="#ffffff" />
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
