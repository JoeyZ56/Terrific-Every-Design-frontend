import { saveAs } from "file-saver";
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
    <div>
      <button onClick={handlePDFDownload}>
        Download Site Survey Check List
      </button>
    </div>
  );
};

export default PDFDownload;
