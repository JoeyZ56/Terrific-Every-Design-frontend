import PropTypes from "prop-types";
import { Box, Typography, TextField } from "@mui/material";

const SectionFive = ({ formData, handleChange }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        5. Battery Information
      </Typography>

      <Typography variant="subtitle2" color="error">
        *Section Five is optional
      </Typography>

      <TextField
        label="Battery Brand & Model"
        placeholder="Enter Brand & Model..."
        name="batteryBrandModel"
        value={formData.batteryBrandModel}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#5C6BC0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5C6BC0",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#5C6BC0",
          },
        }}
      />

      <TextField
        label="Number of Batteries"
        placeholder="Enter Number..."
        name="numberOfBatteries"
        value={formData.numberOfBatteries}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#5C6BC0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5C6BC0",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#5C6BC0",
          },
        }}
      />

      <TextField
        label="Battery Location"
        placeholder="Enter Location..."
        name="batteryLocation"
        value={formData.batteryLocation}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#5C6BC0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5C6BC0",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#5C6BC0",
          },
        }}
      />

      <TextField
        label="Battery Size (kWh)"
        placeholder="Enter Size... (kWh)"
        name="batterySize"
        value={formData.batterySize}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#5C6BC0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5C6BC0",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#5C6BC0",
          },
        }}
      />

      <TextField
        label="Specific Notes For Site Surveyor"
        placeholder="Specific Notes... (Optional)"
        name="specificNotes"
        value={formData.specificNotes}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        multiline
        rows={4}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#5C6BC0",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5C6BC0",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#5C6BC0",
          },
        }}
      />
    </Box>
  );
};

SectionFive.propTypes = {
  formData: PropTypes.shape({
    batteryBrandModel: PropTypes.string,
    numberOfBatteries: PropTypes.string,
    batteryLocation: PropTypes.string,
    batterySize: PropTypes.string,
    specificNotes: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SectionFive;
