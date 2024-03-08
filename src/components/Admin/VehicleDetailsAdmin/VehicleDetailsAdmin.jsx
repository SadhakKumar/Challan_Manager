import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../../api/axios'
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Footer from '../../Footer/Footer';
import './VehicleDetailsAdmin.scss'
import CarCard from '../../Police/CarCard/CarCard';
// import Challan from '../ChallanInfoCard/ChallanInfoCard';
import Challan from '../../Police/ChallanInfoCard/ChallanInfoCard';

const VehicleDetailsAdmin = () => {

    const {vehicleno} = useParams();

    const [vehicleDetails, setVehicleDetails] = useState([])
    const [challans, setChallans] = useState([])

    const getVehicleDetails = async () => {
        try {
            const response = await axios.get(`/cars?vehicle=${vehicleno}`);
            setVehicleDetails(response.data[0]);

            const challansResponse = await axios.get(`/challans?vehicle_no=${vehicleno}`);

            let maxLength = 0;
            let maxLengthIndex = 0;

            challansResponse?.data?.forEach((vehicle, index) => {
                if(vehicle.challans.length > maxLength){
                    maxLength = vehicle.challans.length;
                    maxLengthIndex = index;
                }
            });

            setChallans(challansResponse.data[maxLengthIndex].challans);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    
    }

    useEffect(() => {
        getVehicleDetails()
    },[])
  return (
    <>
        <AdminNavbar/>
        <h1 className='detail-heading'>Vehicle Details</h1>

        <CarCard data={vehicleDetails}/>

        {challans.length > 0 ? <h1 className='detail-heading'>Challans</h1> : <h1 className='details-heading'>No Challans Found</h1>}
        <div className='grid' >
        {challans.map((data, index) => (
            <div className='item'>
            <Challan key={index} data={data} />
            </div>
        ))}

        </div>
        
        <Footer/>
    </>
  )
}

export default VehicleDetailsAdmin