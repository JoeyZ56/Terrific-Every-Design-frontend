import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";

// import PDFDownload from "../pfddowload/PDFDownload";

const navbar = () => {
  return (
    <div className="nav-container">
      <div className="title-container">
        <h2 className="title">Terrific Every Design</h2>
      </div>
      <div className="nav-links">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <Link to="/requestform" className="nav-links">
            Go to Request Form
          </Link>
        </motion.div>

        {/* <PDFDownload /> */}
      </div>
    </div>
  );
};

export default navbar;
