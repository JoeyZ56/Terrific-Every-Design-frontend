// import { useState } from "react";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import "./PDFDownload.css";

// import Modal from "../modal/modal";

const PDFDownload = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const pdf = "../../assets/PDF/site-survey-check-list.pdf";

  const handlePDFDownload = () => {
    // Fetch pdf file
    fetch(pdf)
      .then((res) => res.blob())
      .then((blob) => {
        saveAs(blob, "site-survey-check-list.pdf");
      })
      .catch((err) => {
        console.log(err, "error downloading pdf");
      });
  };

  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <button onClick={handlePDFDownload}>
          Download Site Survey Check List
        </button>
      </motion.div>
    </div>
    //<div className="main-container">
    //   {isOpen && (
    //     <Modal onClose={() => setIsOpen(false)}>
    //       <div className="modal-content">
    //         <h2>Site Survey Check List</h2>
    //         <img src={pdf} />
    //         <button onClick={handlePDFDownload}>
    //           Download Site Survey Check List
    //         </button>
    //       </div>
    //     </Modal>
    //   )}
    //   <motion.div
    //     whileInView={{ opacity: 1 }}
    //     whileHover={{ scale: 1.1 }}
    //     transition={{ duration: 0.5, type: "tween" }}
    //   >
    //     <button
    //       onClick={() => {
    //         console.log("Opening modal");
    //         setIsOpen(true);
    //       }}
    //     >
    //       Download Site Survey Check List
    //     </button>
    //   </motion.div>
    //</div>
  );
};

export default PDFDownload;
