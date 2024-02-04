import React from "react";
import "./ChallanInfoCard.scss";

const Challan = () => {
  return (
    <div className="challan">
      <div className="challan__image"></div>
      <img src="https://imgs.search.brave.com/WQmdk3AbP4loUv3GkEKUgqbFGUoRpX4b_m5tNx6WaWU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjUwNDM2NjY3NDct/NjlmNjY0NmRiOTQw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRt/Vm9hV05zWlhOOFpX/NThNSHg4TUh4OGZE/QT0.jpeg" alt="car" />
      <div className="challan__info">
        <p className="challan_id">Challan Number: BT530A1340</p>
        <p>Reason: Red Light Skip</p>
        <p>Location: Ulhasnagar, Thane. 421003</p>
      </div>
      <div className="RHS_container">
        <div className="amount">Amount: Rs. 2500</div>
        <div className="challan__buttons">
          <button className="challan__button challenge">Challenge</button>
          <button className="challan__button pay">Pay</button>
        </div>
       </div>
    </div>
  );
};

export default Challan;
// import React from 'react';
// import "./ChallanInfoCard.scss";

// //import { useHistory } from 'react-router-dom'; // Assuming you are using React Router for navigation

// const ChallanInfoCard = ({ challan }) => {
//   //const history = useHistory();
//   console.log("Hello")

//   const handleChallengeClick = () => {
//     // Navigate to challenge screen
//     //history.push(`/challenges/${challan.id}`);
//     console.log("bye")
//   };

//   const handlePaymentClick = () => {
//     // Navigate to payment screen
//     //history.push(`/payments/${challan.id}`);
//     console.log("dont come again")
//   };

//   return (
//     <div className="challan-card">
//       <div className="image-container">
//         <img style={{maxWidth:"250px"}} src="https://imgs.search.brave.com/WQmdk3AbP4loUv3GkEKUgqbFGUoRpX4b_m5tNx6WaWU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjUwNDM2NjY3NDct/NjlmNjY0NmRiOTQw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRt/Vm9hV05zWlhOOFpX/NThNSHg4TUh4OGZE/QT0.jpeg" alt="Challan Image" />
//       </div>
//       <div className="info-container">
//         <span id="challan_id">ID: 1</span>
//         <span id="challan_amount">Amount: 2500</span>
//         <div>Reason: meow</div>
//         <div>Location: Ghar</div>
//       </div>
//       <div className="action-buttons">
//         <button onClick={handleChallengeClick}>Challenge</button>
//         <button onClick={handlePaymentClick}>Payment</button>
//       </div>
//     </div>
//   );
// };

// export default ChallanInfoCard;
