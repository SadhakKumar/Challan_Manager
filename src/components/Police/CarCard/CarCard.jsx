import React from "react";
import "./CarCard.scss";
import "@fontsource/poppins";

const CarCard = ({data}) => {
  return (
    <div className="challan">
      <div className="challanimg">
        <img src="https://imgs.search.brave.com/WQmdk3AbP4loUv3GkEKUgqbFGUoRpX4b_m5tNx6WaWU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjUwNDM2NjY3NDct/NjlmNjY0NmRiOTQw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRt/Vm9hV05zWlhOOFpX/NThNSHg4TUh4OGZE/QT0.jpeg" alt="car" />
        {/* <img src={data.img} alt="car" /> */}
      </div>
      <div className="rightside">
        <div className="rightcontainer">
          <div className="challan__info">
            <p>Vehicle: {data.vehicle}</p>
            <p>Color: {data.color}</p>
            <p>Model: {data.make} {data.model}</p>
            <p>Chassis: {data.chassis_no}</p>
            <p>Owner: {data.owner}</p>
            <p>Contact: {data.contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;