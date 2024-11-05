import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoanPrediction from "./Components/LoanPrediction"; 
import { LandingPage } from "./Components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loan-prediction" element={<LoanPrediction />} />
        <Route 
          path="/" 
          element={
            <div className="app-container">
              <LandingPage />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
