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
        <img src="https://imgs.search.brave.com/WQmdk3AbP4loUv3GkEKUgqbFGUoRpX4b_m5tNx6WaWU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjUwNDM2NjY3NDct/NjlmNjY0NmRiOTQw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRt/Vm9hV05zWlhOOFpX/NThNSHg4TUh4OGZE/QT0.jpeg" alt="car" />
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
