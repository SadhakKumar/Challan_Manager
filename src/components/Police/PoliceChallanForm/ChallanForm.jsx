import React, { useState } from 'react';
import './ChallanForm.scss';

const ChallanForm = () => {
  const [offenseDate, setOffenseDate] = useState('');
  const [offenseTime, setOffenseTime] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [offenderMobileNumber, setOffenderMobileNumber] = useState('');
  const [challanFees, setChallanFees] = useState('');
  const [offences, setOffences] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { offenseDate, offenseTime, vehicleNumber, offenderMobileNumber, challanFees, offences });
  };

  return (
    <div className="challan-form">
      <h2 className="form-heading">Challan Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="offenseDate">Offense Date:</label>
        <input type="date" id="offenseDate" value={offenseDate} onChange={(e) => setOffenseDate(e.target.value)} required />

        <label htmlFor="offenseTime">Offense Time:</label>
        <input type="time" id="offenseTime" value={offenseTime} onChange={(e) => setOffenseTime(e.target.value)} required />

        <label htmlFor="vehicleNumber">Vehicle Number:</label>
        <input type="text" id="vehicleNumber" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />

        <label htmlFor="offenderMobileNumber">Offender Mobile Number:</label>
        <input type="tel" id="offenderMobileNumber" value={offenderMobileNumber} onChange={(e) => setOffenderMobileNumber(e.target.value)} required />

        <label htmlFor="challanFees">Challan Fees:</label>
        <input type="number" id="challanFees" value={challanFees} onChange={(e) => setChallanFees(e.target.value)} required />

        <label htmlFor="offences">Offences:</label>
        <textarea id="offences" value={offences} onChange={(e) => setOffences(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChallanForm;
