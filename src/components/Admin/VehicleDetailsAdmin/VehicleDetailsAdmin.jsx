import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../../api/axios'
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Footer from '../../Footer/Footer';
import './VehicleDetailsAdmin.scss'
import CarCard from '../../Police/CarCard/CarCard';
// import Challan from '../ChallanInfoCard/ChallanInfoCard';
import Challan from '../../Police/ChallanInfoCard/ChallanInfoCard';
import Navbar from '../../Navbar/Navbar';

const VehicleDetailsAdmin = () => {

    let {vehicleno} = useParams();    

    const [vehicleDetails, setVehicleDetails] = useState([]);
    const [showPending, setShowPending] = useState(true);
    
    const [pendingChallans, setPendingChallans] = useState([]);
    const [completedChallans, setCompletedChallans] = useState([]);
  
    const getVehicleDetails = async () => {
        try {
            const response = await axios.get(`/cars?vehicle=${vehicleno}`);
            setVehicleDetails(response.data[0]);

            const challansResponse = await axios.get(`/challans?vehicle_no=${vehicleno}`);

            // let maxLength = 0;
            // let maxLengthIndex = 0;

            // challansResponse?.data?.forEach((vehicle, index) => {
            //     if(vehicle.challans.length > maxLength){
            //         maxLength = vehicle.challans.length;
            //         maxLengthIndex = index;
            //     }
            // });
            

            setPendingChallans(challansResponse.data[0].pending_challans);
            setCompletedChallans(challansResponse.data[0].completed_challans);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    
    }

    useEffect(() => {
        getVehicleDetails()
    },[]);
  return (
    <>
        <Navbar/>
        <main>
        <h1 className='detail-heading'>Vehicle Details</h1>

        <CarCard data={vehicleDetails}/>
        {/* <hr style={{width: '80%', backgroundColor: 'rgb(30, 30, 101);'}} /> */}
        
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li className="me-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={() => setShowPending(true)}>Pending Challans ({pendingChallans.length})</button>
                </li>
                <li className="me-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false" onClick={() => setShowPending(false)}>Completed Challans ({completedChallans.length})</button>
                </li>
            </ul>
        </div>
        <div id="default-tab-content">
            <div className={(showPending ? '' : 'hidden ')+"p-4 rounded-lg bg-gray-50 dark:bg-gray-800"} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                {pendingChallans?.length > 0 ? <></> : <h1 className='details-heading'>No Pending Challans Found</h1>}
                <div className='grid' >
                    {pendingChallans?.map((data, index) => (
                        <div className='item'>
                        <Challan key={index} data={data} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={(!showPending ? '' : 'hidden ')+"p-4 rounded-lg bg-gray-50 dark:bg-gray-800"} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                {completedChallans?.length > 0 ? <></> : <h1 className='details-heading'>No Completed Challans Found</h1>}
                <div className='grid' >
                    {completedChallans?.map((data, index) => (
                        <div className='item'>
                        <Challan key={index} data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </main>
        <Footer/>
    </>
  )
}

export default VehicleDetailsAdmin