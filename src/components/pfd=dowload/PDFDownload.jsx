import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import "./PDFDownload.css";

const PDFDownload = () => {
  const handlePDFDownload = () => {
    const pdf = "../../assets/PDF/site-survey-check-list.pdf";

    //fetch pdf file
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
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <button onClick={handlePDFDownload}>
        Download Site Survey Check List
      </button>
    </motion.div>
  );
};

export default PDFDownload;
