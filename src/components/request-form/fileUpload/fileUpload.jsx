import propTypes from "prop-types";
import "./fileUpload.css";

const FileUpload = ({ formData, handleFileChange }) => {
  return (
    <div>
      <h3>7. Upload Attachment</h3>
      <div className="form-upload part-seven">
        <input
          type="file"
          onChange={handleFileChange}
          value={formData.fileUpload}
        />
      </div>
    </div>
  );
};

FileUpload.propTypes = {
  formData: propTypes.object.isRequired,
  handleFileChange: propTypes.func.isRequired,
};

export default FileUpload;
