import React,{useEffect,useState} from 'react'
import Footer from '../../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import "./AdminDashboard.scss";
import axios from '../../../api/axios'
import Navbar from '../../Navbar/Navbar';
// import axios from 'axios'

const AdminDashboard = () => {

  const [allCars, setAllCars] = useState([])
  const [searchedCars, setSearchedCars] = useState('')

  const getAllCars = async () => {
    try {
      // const response = await axios.get('/');
      // const responseObject = response;
      // setAllCars(responseObject);
      // console.log(responseObject);

      await axios.get('/cars')
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

  const handleChange = (e) => {
    setSearchedCars(e.target.value);
  }

  const filterCars = allCars.filter((car) => {
    return car.vehicle.toLowerCase().includes(searchedCars.toLowerCase());
  })
  return (
    <>
        <Navbar />
        <main>
        <form className="vehicle-number-input" onChange={handleChange}>
          <input
            type="text"
            value={searchedCars}
            id="searchByVehicleNumber"
            name="searchByVehicleNumber"
            placeholder='Search by Vehicle Number'
          />
        </form>
        <div className="police_container">
          <div className='grid'>
            {searchedCars.length != 0 ? filterCars.length != 0 ? filterCars.map((data, index) => (
              <div className='item'>
                <Challan key={index} data={data} />
              </div>)
            ) : <h2>No Vehicle Found</h2> : allCars.map((data, index) => (
              <div className='item'>
                <Challan key={index} data={data} />
              </div>)
            )}
          </div>
        </div>
        </main>
        <Footer />
    </>

  )
}

export default AdminDashboard