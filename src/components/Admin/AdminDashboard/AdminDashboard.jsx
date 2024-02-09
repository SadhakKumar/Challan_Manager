import React,{useEffect,useState} from 'react'
import Footer from '../../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import Navbar from '../../Navbar/Navbar'
import jsonData from '../../../utils/challan.json'
import "./AdminDashboard.scss";
import { Link } from 'react-router-dom'
import Button from '../../button/Button'
import axios from '../../../api/axios'
// import axios from 'axios'

const AdminDashboard = () => {

  const [allCars, setAllCars] = useState([])

  const getAllCars = async () => {
    try {
      // const response = await axios.get('/');
      // const responseObject = response;
      // setAllCars(responseObject);
      // console.log(responseObject);

      await axios.get('/')
      .then((response) => {
        console.log(response.data);
        setAllCars(response.data);
      }).catch((error) => {
        console.error('Error fetching data:', error);
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

  useEffect(() => {
    getAllCars()
    
  },[])
  return (
    <>
        <Navbar />
        <div className="police_container">
          {/* <div className="vehicle-number-input">
              <input
                type="text"
                id="searchByVehicleNumber"
                name="searchByVehicleNumber"
                placeholder='Search by Vehicle Number'
              />
          </div> */}
          <div className='grid'>
            {jsonData.map((data, index) => (
              <div className='item'>
                <Challan key={index} data={data} />
              </div>)
            )}
          </div>
            <div className="add-challenge-button">
              <Link to="/">
                <Button children="Add Challenge" onClick={()=>console.log("Challenge added!")} color ="#100775"/>
              </Link>
            </div>
        </div>
        <Footer />
    </>

  )
}

export default AdminDashboard