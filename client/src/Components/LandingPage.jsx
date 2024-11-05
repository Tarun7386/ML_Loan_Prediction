
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div className="Lander">
        <video className="video-background" autoPlay loop muted>
          <source src="welcome.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <p>Track your loan prediction </p>
          <Link to="/loan-prediction">
            <button >Loan-Tracker</button>
          </Link>
        </div>
      </div>
  )
}
