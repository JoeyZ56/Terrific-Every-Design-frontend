import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, Input, Alert } from "@mui/material";

const FileUpload = ({ handleFileChange }) => {
  const [fileInputs, setFileInputs] = useState([{ id: 1 }]);

  // File limit handler
  const addFileInput = () => {
    if (fileInputs.length < 10) {
      setFileInputs([...fileInputs, { id: fileInputs.length + 1 }]);
    }
  };

  // Handler for checking if file is selected
  const handleInputChange = (e, index) => {
    handleFileChange(e);
    if (e.target.files.length > 0 && index === fileInputs.length - 1) {
      addFileInput();
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        7. Upload Attachment
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {fileInputs.map((input, index) => (
          <Input
            key={input.id}
            type="file"
            name={`fileupload${input.id}`}
            onChange={(e) => handleInputChange(e, index)}
            inputProps={{ multiple: true }}
          />
        ))}
      </Box>

      {fileInputs.length >= 10 && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          Only a max of 10 files are allowed
        </Alert>
      )}

      <Box sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          onClick={addFileInput}
          disabled={fileInputs.length >= 10}
          sx={{
            backgroundColor: "#FF7043",
            color: "#000",
            "&:hover": {
              backgroundColor: "#E65100",
            },
          }}
        >
          Add More Files
        </Button>
      </Box>
    </Box>
  );
};

FileUpload.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
};

export default FileUpload;
