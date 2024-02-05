import React,{useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import './ChallanNoSearch.scss'
import Button from '../button/Button';
import RadioButtonSearch from '../RadioButtonSearch.jsx/RadioButtonSearch';
import { useNavigate } from 'react-router';

function ChallanNoSearch() {
    const navigate = useNavigate();
    const [challanNumber, setChallanNumber] = useState('');

    const handleSubmit = () => {
        console.log("pressed");
        navigate('/view');
    }
    return (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <RadioButtonSearch/>
            <div className="input-group">
              <input
                type="text"
                id="vehicleNumber"
                name="vehicleNumber"
                placeholder='Enter Challan Number'
                value={challanNumber}
                onChange={(e) => setChallanNumber(e.target.value)}
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

export default ChallanNoSearch