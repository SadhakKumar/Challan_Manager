import React, { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
// import axios from '../../../api/axios'
import axios from "axios";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Footer from "../../Footer/Footer";
import "./VehicleDetailsAdmin.scss";
import CarCard from "../../Police/CarCard/CarCard";
// import Challan from '../ChallanInfoCard/ChallanInfoCard';
import Challan from "../../Police/ChallanInfoCard/ChallanInfoCard";
import Cookies from "js-cookie";

const VehicleDetailsAdmin = () => {
  const { vehicleno } = useParams();

  const [vehicleDetails, setVehicleDetails] = useState();
  const [onMount, setOnMount] = useState(false);
  const [challans, setChallans] = useState([]);

  const getVehicleDetails = async () => {
    try {
      // const response = await axios.get(`/cars?vehicle=${vehicleno}`);
      // setVehicleDetails(response.data[0]);

      // const challansResponse = await axios.get(`/challans?vehicle_no=${vehicleno}`);

      // let maxLength = 0;
      // let maxLengthIndex = 0;

      // challansResponse?.data?.forEach((vehicle, index) => {
      //     if(vehicle.challans.length > maxLength){
      //         maxLength = vehicle.challans.length;
      //         maxLengthIndex = index;
      //     }
      // });

      // setChallans(challansResponse.data[maxLengthIndex].challans);

      const token = Cookies.get("token");
      console.log(token);

      const response = await axios.get(
        `https://pbfw4n92-4002.inc1.devtunnels.ms/getChallans/${vehicleno}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setVehicleDetails(JSON.parse(response.data.result));
      console.log(vehicleDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log(vehicleDetails);
  // console.log(challans);

  useEffect(() => {
    getVehicleDetails();
  }, []);

  useEffect(() => {
    if (vehicleDetails != {}) {
      setOnMount(true);
    } else {
      setOnMount(false);
    }
  }, [vehicleDetails]);
  return (
    <>
      <AdminNavbar />
      {/* <h1 className='detail-heading'>Vehicle Details</h1>

        <CarCard data={vehicleDetails}/> */}

      {vehicleDetails && vehicleDetails.res && vehicleDetails.res.length > 0 ? (
        <h1 className="detail-heading">Challans</h1>
      ) : (
        <h1 className="details-heading">No Challans Found</h1>
      )}
      <div className="grid">
        {onMount && vehicleDetails && vehicleDetails.res ? (
          vehicleDetails.res.map((data, index) => (
            <div className="item" key={index}>
              <Challan data={data} />
            </div>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>

      <Footer />
    </>
  );
};

export default VehicleDetailsAdmin;
