import propTypes from "prop-types";
import "./fileUpload.css";

const FileUpload = ({ formData, handleFileChange }) => {
  return (
    <div className="form-upload part-seven">
      <h4>Upload Attachment</h4>
      <input
        type="file"
        onChange={handleFileChange}
        value={formData.fileUpload}
      />
    </div>
  );
};

FileUpload.propTypes = {
  formData: propTypes.object.isRequired,
  handleFileChange: propTypes.func.isRequired,
};

export default FileUpload;
