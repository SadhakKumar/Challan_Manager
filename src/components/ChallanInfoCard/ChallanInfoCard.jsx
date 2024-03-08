import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Challan = ({data}) => {
  const navigate = useNavigate();
  const handleChallengeClick = () => {
    console.log("Challenge Clicked");
    // navigate("/challenge");
  }
  const handlePayClick = () => {
    console.log("Pay Clicked");
  }
  return (
    <div className="challan">
      <div className="challanimg">
        <img src={data.img} alt="car" />
      </div>
      <div className="rightside">
        <div className="rightcontainer">
          <div className="challan__info">
            <span className="challan_id">Challan Number: {data.challan_id}</span>
            <p>Reason: {data.reason}</p>
            <p>Location: {data.location}</p>
            
          </div>
          
          <div className="amount">Amount: Rs. {data.amount}</div>
          
        </div>

        <hr className="line"/>

        <div className="buttons">
          <Link to="/challenge" state={data}>
            <Button children="Challenge" onClick= {handleChallengeClick} color ="#ffffff"/>
          </Link>
          
          <Button children="Pay" onClick = {handlePayClick} color= "#100775"/>
        </div>  

      </div>
      

    </div>
  );
};

export default Challan;
