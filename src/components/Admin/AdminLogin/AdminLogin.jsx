import React from 'react'
// import { useSelector } from 'react-redux'
// import { getRadio } from '../../../features/Search/SearchSlice';
// import VehicleChallan from '../../VehicleChallan/VehicleChallan'
// import ChallanNoSearch from '../../ChallanNoSearch/ChallanNoSearch';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import AdminForm from '../AdminForm/AdminForm';
import './AdminLogin.scss'

function SearchLayout() {
    
  return (
    <>
        <Header/>
        <AdminForm/>
        <div className='box'>

        </div>
        <Footer/>

    </>
  )
}

export default SearchLayout