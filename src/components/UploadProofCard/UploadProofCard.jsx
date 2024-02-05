import React, { useState,useCallback } from 'react';
import Button from '../button/Button';
import "@fontsource/poppins";
import "./UploadProofCard.scss";
import { useDropzone } from 'react-dropzone';

const UploadProofCard = () => {
  const [proofFiles, setProofFiles] = useState([]);

  const handleUploadClick = () => {
      console.log("Upload Clicked");
      // Handle uploading logic with proofFiles
  }

  const onDrop = useCallback((acceptedFiles) => {
      setProofFiles([...proofFiles, ...acceptedFiles]);
  }, [proofFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*,video/*' });

  return (
      <div className="challan">
          <div className="challanimg">
              <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10406/1697698080681/front-left-side-47.jpg?impolicy=resize&imwidth=360" alt="car" />
          </div>
          <div className="rightside">
              <div className="rightcontainer">
                  <div className="challan__info">
                      <span className="challan_id">Challan Number: BT530A1340</span>
                      <p>Reason: Red Light Skip</p>
                      <p>Location: Ulhasnagar, Thane. 421003</p>
                  </div>

                  <hr className="line" />

                  <div className="amount">
                      <div className="">Amount: Rs. 2500</div>
                  </div>
              </div>

              <div className="proof-section" {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                      isDragActive ?
                          <p>Drop the files here...</p> :
                          <p>Drag 'n' drop some files here, or click to select files</p>
                  }
                  {proofFiles.length > 0 && (
                      <div>
                          <p>Proof Files:</p>
                          <ul>
                              {proofFiles.map((file, index) => (
                                  <li key={index}>
                                      {file.name}
                                      <button onClick={() => setProofFiles(proofFiles.filter((_, i) => i !== index))}>Delete</button>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  )}
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
