import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminChallangedChallan = ({data}) => {
  const status = data.status;
  const navigate = useNavigate();
  return (
    <div className="challenged-challan">
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
        <div className="flex justify-end">
          <button type="button" style={{maxWidth: 'fit-content'}} class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Accept <i class="fa-solid fa-check"></i></button>
          <button type="button" style={{maxWidth: 'fit-content'}} class="float-right text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Reject <i class="fa-solid fa-xmark"></i></button> 
        </div>
      </div>
    </div>
  );
};

export default AdminChallangedChallan;
