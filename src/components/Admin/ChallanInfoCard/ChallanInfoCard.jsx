import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

const Challan = ({data}) => {
  return (
    <div className="police_challan">
      <Link to = {`${data.vehicle}`}>
      <div className="challanimg">
        <img src={data.img} alt="car" />
      </div>
      <div className="rightcontainer">
        <div className="challan__info">
          <p className="challan_id">Vehicle Number: {data.VehicleNumber}</p>
          <p>Owner: {data.Owner}</p>
          <p>Contact: {data.PhoneNumber}</p>
          {/* <p>Company: {data.make}</p> */}
          {/* <p>Model: {data.model}</p> */}
          {/* <p>Color: {data.color}</p> */}
          <p className="amount">Chassis No: {data.ChassisNumber}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Challan;
