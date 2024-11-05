// import { useState } from 'react';
// import axios from 'axios';
// import './LoanPrediction.css'; // Styling for speedometer

// const LoanPrediction = () => {
//   const [applicantIncome, setApplicantIncome] = useState('');
//   const [coapplicantIncome, setCoapplicantIncome] = useState('');
//   const [loanAmount, setLoanAmount] = useState('');
//   const [loanAmountTerm, setLoanAmountTerm] = useState('');
//   const [creditHistory, setCreditHistory] = useState('');
//   const [married, setMarried] = useState('');
//   const [dependents, setDependents] = useState('');
//   const [propertyArea, setPropertyArea] = useState('');
//   const [prediction, setPrediction] = useState(null);
//   const [message, setMessage] = useState('');

//   const handlePredict = async () => {
//     const data = {
//       ApplicantIncome: parseFloat(applicantIncome),
//       CoapplicantIncome: parseFloat(coapplicantIncome),
//       LoanAmount: parseFloat(loanAmount),
//       Loan_Amount_Term: parseFloat(loanAmountTerm),
//       Credit_History: parseFloat(creditHistory),
//       Married_Yes: married === 'Yes' ? 1 : 0,
//       Dependents_1: parseInt(dependents, 10) === 1 ? 1 : 0,
//       Property_Area_Semiurban: propertyArea === 'Semiurban' ? 1 : 0,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/predict', data);
//       setPrediction(response.data.prediction);
//       setMessage(response.data.prediction === 1 ? 'Yes, you are applicable!' : 'No, you are not applicable.');
//     } catch (error) {
//       console.error('Error making prediction:', error);
//       setMessage('Error making prediction.');
//     }
//   };

//   const needleRotation = prediction === 1 ? 90 : (prediction === 0 ? -90 : null);

//   return (
//     <div className="speedometer-container">
//       {/* Input Form */}
//       <div className="form-group">
//         <label>Applicant Income:</label>
//         <input type="number" value={applicantIncome} onChange={(e) => setApplicantIncome(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label>Coapplicant Income:</label>
//         <input type="number" value={coapplicantIncome} onChange={(e) => setCoapplicantIncome(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label>Loan Amount:</label>
//         <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label>Loan Amount Term (months):</label>
//         <input type="number" value={loanAmountTerm} onChange={(e) => setLoanAmountTerm(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label>Credit History:</label>
//         <select value={creditHistory} onChange={(e) => setCreditHistory(e.target.value)}>
//           <option value="">Select</option>
//           <option value="1">1 (Good)</option>
//           <option value="0">0 (Bad)</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label>Married:</label>
//         <select value={married} onChange={(e) => setMarried(e.target.value)}>
//           <option value="">Select</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label>Dependents:</label>
//         <select value={dependents} onChange={(e) => setDependents(e.target.value)}>
//           <option value="">Select</option>
//           <option value="0">0</option>
//           <option value="1">1</option>
//           <option value="2">2+</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label>Property Area:</label>
//         <select value={propertyArea} onChange={(e) => setPropertyArea(e.target.value)}>
//           <option value="">Select</option>
//           <option value="Urban">Urban</option>
//           <option value="Semiurban">Semiurban</option>
//           <option value="Rural">Rural</option>
//         </select>
//       </div>

//       <button onClick={handlePredict}>Predict</button>

//       {/* Speedometer and Prediction Result */}
//       <div className="speedometer">
//         <div className="needle" style={{ transform: `rotate(${needleRotation}deg)` }} />
//         <div className="labels">
//           <span>No</span>
//           <span>Yes</span>
//         </div>
//       </div>
//       {message && <div className="prediction-message">{message}</div>}
//     </div>
//   );
// };

// export default LoanPrediction;
import { useState } from 'react';
import axios from 'axios';
import './LoanPrediction.css'; // Styling for speedometer

const LoanPrediction = () => {
  const [applicantIncome, setApplicantIncome] = useState('');
  const [coapplicantIncome, setCoapplicantIncome] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanAmountTerm, setLoanAmountTerm] = useState('');
  const [creditHistory, setCreditHistory] = useState('');
  const [married, setMarried] = useState('');
  const [dependents, setDependents] = useState('');
  const [propertyArea, setPropertyArea] = useState('');
  const [prediction, setPrediction] = useState(null); // Prediction state
  const [message, setMessage] = useState('');

  // Handle prediction logic
  const handlePredict = async () => {
    const data = {
      ApplicantIncome: parseFloat(applicantIncome),
      CoapplicantIncome: parseFloat(coapplicantIncome),
      LoanAmount: parseFloat(loanAmount),
      Loan_Amount_Term: parseFloat(loanAmountTerm),
      Credit_History: parseFloat(creditHistory),
      Married_Yes: married === 'Yes' ? 1 : 0,
      Dependents_1: parseInt(dependents, 10) === 1 ? 1 : 0,
      Property_Area_Semiurban: propertyArea === 'Semiurban' ? 1 : 0,
    };

    try {
      const response = await axios.post('http://localhost:5000/predict', data);
      setPrediction(response.data.prediction);
      setMessage(response.data.prediction === 1 ? 'Yes, you are applicable!' : 'No, you are not applicable.');
    } catch (error) {
      console.error('Error making prediction:', error);
      setMessage('Error making prediction.');
    }
  };

  // Logic for needle rotation
  const needleRotation = prediction === 1 ? 90 : (prediction === 0 ? -90 : 0); // Default position is 0 (12 o'clock)

  return (
    <div className="speedometer-container">
      {/* Input Form */}
      <div className="form-group">
        <label>Applicant Income:</label>
        <input type="number" value={applicantIncome} onChange={(e) => setApplicantIncome(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Coapplicant Income:</label>
        <input type="number" value={coapplicantIncome} onChange={(e) => setCoapplicantIncome(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Loan Amount:</label>
        <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Loan Amount Term (months):</label>
        <input type="number" value={loanAmountTerm} onChange={(e) => setLoanAmountTerm(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Credit History:</label>
        <select value={creditHistory} onChange={(e) => setCreditHistory(e.target.value)}>
          <option value="">Select</option>
          <option value="1">1 (Good)</option>
          <option value="0">0 (Bad)</option>
        </select>
      </div>
      <div className="form-group">
        <label>Married:</label>
        <select value={married} onChange={(e) => setMarried(e.target.value)}>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="form-group">
        <label>Dependents:</label>
        <select value={dependents} onChange={(e) => setDependents(e.target.value)}>
          <option value="">Select</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2+</option>
        </select>
      </div>
      <div className="form-group">
        <label>Property Area:</label>
        <select value={propertyArea} onChange={(e) => setPropertyArea(e.target.value)}>
          <option value="">Select</option>
          <option value="Urban">Urban</option>
          <option value="Semiurban">Semiurban</option>
          <option value="Rural">Rural</option>
        </select>
      </div>

      <button onClick={handlePredict}>Predict</button>

      {/* Speedometer and Prediction Result */}
      <div className="speedometer">
        <div className="needle" style={{ transform: `rotate(${needleRotation}deg)` }} />
        <div className="labels">
          <span>No</span>
          <span>Yes</span>
        </div>
      </div>
      {message && <div className="prediction-message">{message}</div>}
    </div>
  );
};

export default LoanPrediction;
