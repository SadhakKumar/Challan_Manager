import React, { useState,useCallback } from 'react';
import Button from '../button/Button';
import "@fontsource/poppins";
import "./UploadProofCard.scss";
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import {getVehicleNo, getChassisNo} from '../../features/Search/SearchSlice'

const UploadProofCard = ({data,owner}) => {
    const vehicleNo = useSelector(getVehicleNo);

    const navigate = useNavigate();
    console.log(data);
  const [proofLink, setProofLink] = useState('');

  const handleUploadClick = async() => {

    if(proofLink === ''){
        alert("Please enter the URL of the proof");
        return; 
    }
    try {
        try{
            const response = await axios.post("http://localhost:4000/assets", {
                "challanNo": data.ChallanID,
                "carNo": vehicleNo,  
                "challanAmount": data.Fine,
                "reason": data.Reason,
                "owner": owner,
                "proof": proofLink,
                "status": "waiting"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }catch(error){
            console.log("Error in uploading proof",error)
        }
        
        try{
            const updateChallanStatus = await axios.put("https://22bxdf11-8000.inc1.devtunnels.ms/updatestatus",{
                "vehicle_number": vehicleNo,
                "challan_id": data.ChallanID,
                "new_status": "Challenged"
            },{
                headers: {
                'Content-Type': 'application/json'
                }
            });
        }catch (error){
            console.error('Error fetching challenged challans with error:', error);
        }
      } catch (error) {
        // Handle error
        console.error('Failed to create asset:', error);
      }

      alert("Proof Uploaded Successfully");
        navigate("/view");
  }

//   const onDrop = useCallback((acceptedFiles) => {
//       setProofFiles([...proofFiles, ...acceptedFiles]);
//   }, [proofFiles]);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*,video/*' });

  return (
      <div className="challan">
          <div className="challanimg">
              <img src={data.img} alt="car" />
          </div>
          <div className="rightside">
              <div className="rightcontainer">
                  <div className="challan__info">
                      <span className="challan_id">Challan Number: {data.ChallanID.length > 20 ? data.ChallanID.substring(0,20) + "..." : data.ChallanID}</span>
                      <p>Reason: {data.Reason}</p>
                      <p>Location: {data.Location}</p>
                  </div>

                  <hr className="line" />

                  <div className="amount">
                      <div className="">Amount: Rs. {data.Fine}</div>
                  </div>
              </div>

              <div className="proof-section" >
                <input 
                type="text" 
                placeholder="Enter the URL of the proof"
                className="proof-input"
                value = {proofLink}
                onChange={(e) => setProofLink(e.target.value)}
                />
              </div>

              <hr className="line" />

              <div className="buttons">
              <Button children="Challenge" onClick= {handleUploadClick} color ="#100775"/>
              </div>
          </div>
      </div>
  );
}


export default UploadProofCard;
