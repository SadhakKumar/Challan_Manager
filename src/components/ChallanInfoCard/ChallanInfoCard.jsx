import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Challan = ({data, challan, isPending=true}) => {
  console.log(challan)
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
      <div className="">
        <img src={challan.img} alt="car" />
      </div>
      <div className="rightside">
        <div className="rightcontainer px-4">
          <div className="challan__info">
            <span className="challan_id">Challan Number: {challan.challan_id}</span>
            <p className="mb-2">Reason: {challan.reason}</p>
            <p className="mb-2">Location: {challan.location}</p>
            
          </div>
          
          <div className="amount mt-4">Amount: Rs. {challan.amount}</div>
          
        </div>

      {isPending && <>
        <hr className="line"/>

        <div className="buttons">
          <Link to="/challenge" state={challan}>
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
