import React from "react";
import "./ChallanInfoCard.scss";
import "@fontsource/poppins";

const Challan = ({data}) => {
  return (
    <div className="police_challan">
      <div className="challanimg">
        <img src="https://imgs.search.brave.com/WQmdk3AbP4loUv3GkEKUgqbFGUoRpX4b_m5tNx6WaWU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjUwNDM2NjY3NDct/NjlmNjY0NmRiOTQw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRt/Vm9hV05zWlhOOFpX/NThNSHg4TUh4OGZE/QT0.jpeg" alt="car" />
      </div>
      <div className="rightcontainer">
        <div className="challan__info">
          <p className="challan_id">Challan Number: {data.challanID}</p>
          <p>Reason: OverSpeeding</p>
          <p>Location: Mumbai</p>
          <p className="amount">Amount: Rs. {data.fine}</p>
        </div>
      </div>
    </div>
  );
};

export default Challan;
