import { Link } from "react-router-dom";
import "./navbar.css";

import PDFDownload from "../pfd=dowload/PDFDownload";

const navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/requestform" className="nav-links">
        Go to Request Form
      </Link>
      <h2 className="title">Terrific Every Design</h2>
      <PDFDownload />
    </div>
  );
};

export default navbar;
