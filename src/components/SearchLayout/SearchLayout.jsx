import React from 'react'
import { useSelector } from 'react-redux'
import { getRadio } from '../../features/Search/SearchSlice';
import VehicleChallan from '../VehicleChallan/VehicleChallan'
import ChallanNoSearch from '../ChallanNoSearch/ChallanNoSearch';

function SearchLayout() {
    
    const search = useSelector(getRadio)
  return (
    <>
        {search === 'vehicle' ? <VehicleChallan/> : <ChallanNoSearch/>}
        {/* {Footer} */}
    </>
  )
}

export default SearchLayout