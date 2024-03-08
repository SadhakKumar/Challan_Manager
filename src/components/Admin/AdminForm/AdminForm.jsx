import React,{ useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import './AdminForm.scss'
import Button from '../../button/Button';
import RadioButtonSearch from '../../RadioButtonSearch.jsx/RadioButtonSearch';
import { useNavigate } from 'react-router';
import axios from 'axios';

function AdminForm() {
  const navigate = useNavigate();
  
  const [userName, setUserName] = useState('');
  const [organisationName, setOrganistaionName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    
    try {
      const response = await axios.post("https://pbfw4n92-4002.inc1.devtunnels.ms/user", {
        username: userName,
        orgName: organisationName,
      });
      

      const token = response.data.token;

      // // Set the token as a cookie
      document.cookie = `token=${token}; path=/;`;

      console.log("Token set as cookie:", token);

      navigate('/admin/dashboard');
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  
    return (
      <div className='root'>
        <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                type="text"
                id="userName"
                name="userName"
                placeholder='Enter Usename'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                />
            </div>

            <div className="input-group">
                
                <input
                type="text"
                id="organisationName"
                name="organisationName"
                placeholder='Enter Organisation name'
                value={organisationName}
                onChange={(e) => setOrganistaionName(e.target.value)}
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
      </div>
      
      
    );
}

export default AdminForm