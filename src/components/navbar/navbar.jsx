import { Link } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  return (
    <div>
      <Link to="/ticketform">Ticket Form</Link>
    </div>
  );
};

export default navbar;
