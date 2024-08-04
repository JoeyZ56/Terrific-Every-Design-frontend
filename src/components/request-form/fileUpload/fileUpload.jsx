import propTypes from "prop-types";
import "./fileUpload.css";

const FileUpload = ({ handleFileChange }) => {
  return (
    <div>
      <h3>7. Upload Attachment</h3>
      <div className="form-upload part-seven">
        <input type="file" name="fileUpload" onChange={handleFileChange} />
      </div>
    </div>
  );
};

FileUpload.propTypes = {
  formData: propTypes.object.isRequired,
  handleFileChange: propTypes.func.isRequired,
};

export default FileUpload;
