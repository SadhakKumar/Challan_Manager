import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ChallangedChallan = ({data}) => {
  const status = data.status;
  const navigate = useNavigate();
  return (
    <div className="challan">
      <div className="">
        <img src={data.img} alt="car" />
      </div>
      <div className="rightside">
        <div className="rightcontainer px-4">
          <div className="challan__info text-left">
            <span className="challan_id">Challan Number: {data.challan_id}</span>
            {status === 'accepted' && <span class="font-bold mx-2 px-2.5 py-0.5 my-4 rounded-full bg-green-600 text-white">Accepted</span>}
            {status === 'rejected' && <span class="font-bold mx-2 px-2.5 py-0.5 my-4 rounded-full bg-red-600 text-white">Rejected</span>}
            {status === 'pending' && <span class="font-bold mx-2 px-2.5 py-0.5 my-4 rounded-full bg-yellow-400 text-white">Pending</span>}
            <p className="mb-2">Reason: {data.reason}</p>
            <p className="mb-2">Location: {data.location}</p>
            <p className="mb-2">Proof Description: {data.proofDescription}</p>
          </div>
          <div className="amount mt-4">Amount: Rs. {data.amount}</div>
          
        </div>
      </div>
    </div>
  );
};

export default ChallangedChallan;
