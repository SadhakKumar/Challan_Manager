import React from "react";
import "./ChallanInfoCard.scss";

const ChallanInfoCard = ({ data, challan }) => {
  return (
    <div className="challan-card">
      <div className="challan-img">
        <img src={challan.img} alt="car" />
      </div>
      <div className="right-container">
        <div className="challan-info">
          <p className="challan-id">Challan Number: {challan.challan_id}</p>
          <p>Reason: {challan.reason}</p>
          <p>Location: {challan.location}</p>
          <p className="amount">Amount: Rs. {challan.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default ChallanInfoCard;
