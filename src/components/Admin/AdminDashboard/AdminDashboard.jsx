import React,{useEffect,useState} from 'react'
import Footer from '../../Footer/Footer'
import Challan from '../ChallanInfoCard/ChallanInfoCard'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import "./AdminDashboard.scss";
// import axios from '../../../api/axios'
import axios from 'axios'

const AdminDashboard = () => {

  const [allCars, setAllCars] = useState([])
  const [searchedCars, setSearchedCars] = useState('')

  const [Cars, setCars] = useState([]);
  const [onMount, setOnMount] = useState(false);

  const getAllCars = async () => {
    try {
      // const response = await axios.get('/');
      // const responseObject = response;
      // setAllCars(responseObject);
      // console.log(responseObject);

      const response = await axios.get("https://pbfw4n92-4002.inc1.devtunnels.ms/");

      console.log(response.data.result);

      setCars(JSON.parse(response.data.result));
      console.log(Cars);

      // await axios.get('/cars')
      // .then((response) => {
      //   console.log(response.data);
      //   setAllCars(response.data);
      // }).catch((error) => {
      //   console.error('Error fetching data:', error);
      // })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

  useEffect(() => {
    setOnMount(false)
    getAllCars()
    
  },[])

  useEffect(() => {
    if(Cars != []){
      setOnMount(true)
    }else{
      setOnMount(false)
    }
  },[Cars])

  const handleChange = (e) => {
    setSearchedCars(e.target.value);
  }

  const filterCars = Cars.filter((car) => {
    return car.Key.toLowerCase().includes(searchedCars.toLowerCase());
  })
  return (
    <>
        <AdminNavbar />
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
            {onMount == true ? searchedCars.length != 0 ? filterCars.length != 0 ? filterCars.map((data, index) => (
              <div className='item'>
                <Challan key={index} data={data} />
              </div>)
            ) : <h2>No Vehicle Found</h2> : Cars.map((data, index) => (
              <div className='item'>
                <Challan key={index} data={data} />
              </div>)
            ) : <h2>Loading...</h2>}

            {/* {Cars.map((car, index) => (
              <div className='item'>
                <Challan key={index} data={car} />
              </div>
            ))} */}
          </div>
        </div>
        <Footer />
    </>

  )
}

export default AdminDashboard