import { Link } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/requestform" className="nav-links">
        Go to Request Form
      </Link>
    </div>
  );
};

export default navbar;
