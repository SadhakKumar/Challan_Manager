import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

const Challan = ({data}) => {
  return (
    <div className="police_challan">
      <Link to = {`${data.Key}`}>
        <div className="challanimg">
          <img src={data.img} alt="car" />
        </div>
        <div className="rightcontainer">
          <div className="challan__info">
            <p className="challan_id">Vehicle Number: {data.Key}</p>
            <p>Owner: {data.Record.owner}</p>
            <p>Contact: {data.Record.mobile}</p>
            <p>Company: {data.Record.make}</p>
            <p>Model: {data.Record.model}</p>
            <p>Color: {data.Record.color}</p>
            <p className="amount">Chassis No: {data.chassis_no}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Challan;
