import { Link } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/ticketform" className="nav-links">
        Go to Ticket Form
      </Link>
    </div>
  );
};

export default navbar;
