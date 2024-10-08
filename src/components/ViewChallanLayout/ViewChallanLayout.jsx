import React,{useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import {getVehicleNo, getChassisNo} from '../../features/Search/SearchSlice'
import axios from '../../api/axios'
// import axios from 'axios'
import VehicleDetailsAdmin from '../Admin/VehicleDetailsAdmin/VehicleDetailsAdmin'
import ChallangedChallan from '../ChallanInfoCard/ChallengedChallanCard'

const ViewChallanLayout = () => {

  const vehicleNo = useSelector(getVehicleNo);
  const chassisNo = useSelector(getChassisNo);

  const [currentTab, setcurrentTab] = useState('pending');
  
  const [pendingChallans, setPendingChallans] = useState([]);
  const [completedChallans, setCompletedChallans] = useState([]);
  const [challengedChallans, setChallengedChallans] = useState([]);
    const[owner, setOwner] = useState('');

// can use getcar api here
  useEffect(() => {
    const getChallans = async() =>{

        try{
            const response = await axios.get('/getCrDetails',
            {
               params:{ 
                vehicle_number: vehicleNo  
                }
            }
          );
          setOwner(response.data.Owner);
          if (response.data.Challans.length > 0) {
            const pending = response.data.Challans.filter(data => data.Status === "Pending");
            const completed = response.data.Challans.filter(data => data.Status === "Completed");
            
            setPendingChallans(pending);
            setCompletedChallans(completed);
          }
        }catch(error){
            console.error('Error fetching challans:', error);
        }
    }


    const getChallengedChallans = async() =>{
        try{
            const response = await axios.get(`http://localhost:4000/assets/${vehicleNo}`);
            console.log(response.data);
            setChallengedChallans(response.data);
        }catch (error){
            console.error('Error fetching challenged challans with error:', error);
        }
        
    }
    getChallengedChallans();
    getChallans();
  },[vehicleNo]);

  return (
    <>
      <Navbar/>
      <main>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
              <li className="me-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={() => setcurrentTab('pending')}>Pending Challans ({pendingChallans.length})</button>
              </li>
              <li className="me-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false" onClick={() => setcurrentTab('completed')}>Completed Challans ({completedChallans.length})</button>
              </li>
              <li className="me-2" role="presentation">
                  <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="challenged-tab" data-tabs-target="#challenged" type="button" role="tab" aria-controls="challenged" aria-selected="false" onClick={() => setcurrentTab('challenged')}>Challenged Challans
                  ({challengedChallans.length})</button>
              </li>
          </ul>
      </div>
      <div id="default-tab-content">
          <div className={(currentTab==='pending' ? '' : 'hidden ')+"p-4 rounded-lg"} id="profile" role="tabpanel" aria-labelledby="profile-tab">
              {pendingChallans?.length > 0 ? <></> : <h1 className='details-heading'>No Pending Challans Found</h1>}
              <div className='view-grid' >
                  {pendingChallans.map((data, index) => (
                      <div className='item mb-4'>
                      <Challan key={index} owner = {owner} data={data} />
                      </div>
                  ))}
              </div>
          </div>
          <div className={(currentTab==='completed' ? '' : 'hidden ')+"p-4 rounded-lg"} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              {completedChallans?.length > 0 ? <></> : <h1 className='details-heading'>No Completed Challans Found</h1>}
              <div className='view-grid' >
                  {completedChallans.map((data, index) => (
                      <div className='item mb-4'>
                      <Challan key={index} data={data} owner = {owner} isPending={false} />
                      </div>
                  ))}
              </div>
          </div>
          <div className={(currentTab==='challenged' ? '' : 'hidden ')+"p-4 rounded-lg"} id="challenged" role="tabpanel" aria-labelledby="challenged-tab">
              {challengedChallans?.length > 0 ? <></> : <h1 className='details-heading'>No Challenged Challans Found</h1>}
              <div className='view-grid' >
                  {challengedChallans.map((data, index) => (
                      <div className='item mb-4'>
                        {data.CarNo === vehicleNo ? <ChallangedChallan key={index} data={data} isPending={false} /> : <></>
                        }
                      </div>
                  ))}
              </div>
          </div>
      </div>
      </main>
      <Footer/>
    </>
  );
}

export default ViewChallanLayout