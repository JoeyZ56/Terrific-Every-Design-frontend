import { useState } from "react";
import { Box, Typography, Button, Alert, LinearProgress } from "@mui/material";
import axios from "axios";

const FileUpload = ({ handleFileChange }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // Track overall progress
  const maxFiles = 20; // Matches backend limit

  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_UPLOAD_PRESET = import.meta.env
    .VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleFileSelect = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    await processFiles(selectedFiles);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    await processFiles(droppedFiles);
  };

  const processFiles = async (selectedFiles) => {
    if (files.length + selectedFiles.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} files.`);
      return;
    }
    setUploading(true);
    await uploadFiles(selectedFiles);
    setUploading(false);
  };

  const uploadFiles = async (selectedFiles) => {
    const uploadedFiles = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                ((progressEvent.loaded / progressEvent.total) * 100) /
                  selectedFiles.length +
                  i * (100 / selectedFiles.length)
              );
              setUploadProgress(percentCompleted);
            },
          }
        );
        uploadedFiles.push(response.data.secure_url);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
    setFiles((prev) => [...prev, ...uploadedFiles]);
    handleFileChange({ target: { files: uploadedFiles } });
    setUploadProgress(100);
    setTimeout(() => setUploadProgress(0), 1500); // Reset progress after completion
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    console.log("Filed being sent with to form:", updatedFiles);
    handleFileChange({ target: { files: updatedFiles } });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        7. Upload Attachment (Optional)
      </Typography>

      <Box
        sx={{
          border: "2px dashed #FF7043",
          borderRadius: "10px",
          padding: 3,
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: "#FFF5F5",
          "&:hover": { backgroundColor: "#FFE5E5" },
        }}
        onClick={() => document.getElementById("fileInput").click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <Typography>
          {uploading ? (
            <Box sx={{ width: "100%", mt: 1 }}>
              <LinearProgress variant="determinate" value={uploadProgress} />
              <Typography variant="body2">
                {Math.round(uploadProgress)}%
              </Typography>
            </Box>
          ) : (
            <h4>
              <i>Click</i> or Drag files here to upload
            </h4>
          )}
        </Typography>
        <input
          id="fileInput"
          type="file"
          multiple
          accept=".jpg, .jpeg, .png, .gif, .webp"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </Box>

      {files.length > 0 && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1">Uploaded Files:</Typography>
          <ul style={{ paddingLeft: 0, listStyleType: "none" }}>
            {files.map((file, index) => (
              <li
                key={index}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#5C6BC0",
                    fontWeight: "bold",
                  }}
                >
                  File {index + 1}
                </a>
                <Button
                  variant="text"
                  color="error"
                  size="small"
                  onClick={() => removeFile(index)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {files.length >= maxFiles && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          Only a max of {maxFiles} files are allowed
        </Alert>
      )}
    </Box>
  );
};

export default FileUpload;
