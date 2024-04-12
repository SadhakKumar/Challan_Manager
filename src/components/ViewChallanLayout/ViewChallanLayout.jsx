import React,{useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import {getVehicleNo, getChassisNo} from '../../features/Search/SearchSlice'
import axios from '../../api/axios'
import VehicleDetailsAdmin from '../Admin/VehicleDetailsAdmin/VehicleDetailsAdmin'

const ViewChallanLayout = () => {

  const vehicleNo = useSelector(getVehicleNo);
  const chassisNo = useSelector(getChassisNo);

  const [showPending, setShowPending] = useState(true);
  
  const [pendingChallans, setPendingChallans] = useState([]);
  const [completedChallans, setCompletedChallans] = useState([]);

  useEffect(() => {
    const getChallans = async() =>{
      const response = await axios.get('/challans?vehicle_no='+vehicleNo+'&chassis_no='+chassisNo);
      setPendingChallans(response?.data[0]?.pending_challans ?? []);
      setCompletedChallans(response?.data[0]?.completed_challans ?? []);
    }
    getChallans();
  },[chassisNo, vehicleNo]);

  return (
    <>
      <Navbar/>
      <main>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
              <li className="me-2" role="presentation">
                  <button className={(showPending ? 'font-bold ' : '')+"inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={() => setShowPending(true)}>Pending Challans ({pendingChallans.length})</button>
              </li>
              <li className="me-2" role="presentation">
                  <button className={(!showPending ? 'font-bold ' : '')+"inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false" onClick={() => setShowPending(false)}>Completed Challans ({completedChallans.length})</button>
              </li>
          </ul>
      </div>
      <div id="default-tab-content">
          <div className={(showPending ? '' : 'hidden ')+"p-4 rounded-lg bg-gray-50 dark:bg-gray-800"} id="profile" role="tabpanel" aria-labelledby="profile-tab">
              {pendingChallans?.length > 0 ? <></> : <h1 className='details-heading'>No Pending Challans Found</h1>}
              <div className='grid' >
                  {pendingChallans.map((data, index) => (
                      <div className='item'>
                      <Challan key={index} data={data} />
                      </div>
                  ))}
              </div>
          </div>
          <div className={(!showPending ? '' : 'hidden ')+"p-4 rounded-lg bg-gray-50 dark:bg-gray-800"} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              {completedChallans?.length > 0 ? <></> : <h1 className='details-heading'>No Completed Challans Found</h1>}
              <div className='grid' >
                  {completedChallans.map((data, index) => (
                      <div className='item'>
                      <Challan key={index} data={data} isPending={false} />
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