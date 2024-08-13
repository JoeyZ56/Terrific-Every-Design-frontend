import { useState } from "react";
import propTypes from "prop-types";
import "./fileUpload.css";

const FileUpload = ({ handleFileChange }) => {
  const [fileInputs, setFileInputs] = useState([{ id: 1 }]);

  const addFileInput = () => {
    if (fileInputs.length < 10) {
      setFileInputs([...fileInputs, { id: fileInputs.length + 1 }]);
    }
  };

  const handleInputChange = (e, index) => {
    handleFileChange(e);
    if (e.target.files.length > 0 && index === fileInputs.length - 1) {
      addFileInput();
    }
  };

  return (
    <div>
      <h3>7. Upload Attachment</h3>
      <div className="form-upload part-seven">
        {fileInputs.map((input, index) => (
          <input
            key={input.id}
            type="file"
            name={`fileupload${input.id}`}
            onChange={(e) => handleInputChange(e, index)}
            // encType="multiparty/form-data"
            multiple // allows multiple files to be uploaded
          />
        ))}
      </div>
      {fileInputs.length >= 10 && (
        <p style={{ color: "red" }}>Only a max of 10 files</p>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  formData: propTypes.object.isRequired,
  handleFileChange: propTypes.func.isRequired,
};

export default FileUpload;
