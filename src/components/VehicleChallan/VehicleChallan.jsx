import React,{ useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import './vehicleChallan.scss'
import Button from '../button/Button';
import RadioButtonSearch from '../RadioButtonSearch.jsx/RadioButtonSearch';


function VehicleChallan() {
  
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');

    const handleSubmit = () => {
      console.log("pressed");
    };
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <RadioButtonSearch/>
          <div className="input-group">
            <input
              type="text"
              id="vehicleNumber"
              name="vehicleNumber"
              placeholder='Enter Vehicle Number'
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            
            <input
              type="text"
              id="chassisNumber"
              name="chassisNumber"
              placeholder='Enter Chassis Number'
              value={chassisNumber}
              onChange={(e) => setChassisNumber(e.target.value)}
              required
            />
          </div>

          <div className='recaptcha'>
            <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
              />
          </div>
          
          <Button children ='Submit' onClick = {handleSubmit} color = '#1C3AA9'/>
        </form>
      </div>
      
    );
}

export default VehicleChallan