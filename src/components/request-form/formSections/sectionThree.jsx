import PropTypes from "prop-types";
import {
  TextField,
  Switch,
  FormControlLabel,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const SectionThree = ({ formData, handleChange, setFormData }) => {
  const handleSwitchChange = (field) => (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: event.target.checked, // Toggle true/false
    }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        3. Electrical Service
      </Typography>

      <TextField
        label="Location of Meter & Panel"
        placeholder="Location..."
        name="meterLocation"
        value={formData.meterLocation}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        required
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
        label="Existing M.S.P. Manufacturer (Optional)"
        placeholder="Enter Existing M.S.P...."
        name="mspManufacturer"
        value={formData.mspManufacturer}
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
        label="M.S.P. Bus Rate"
        placeholder="Enter Bus Rate..."
        name="mspBuzzRate"
        value={formData.mspBuzzRate}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        required
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
        label="Main Breaker Size"
        placeholder="Enter Breaker Size..."
        name="mainBreakerSize"
        value={formData.mainBreakerSize}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        required
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

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            MPU
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Switch
                checked={formData.mpu}
                onChange={handleSwitchChange("mpu")}
                name="mpu"
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#FF7043", // Thumb color when checked
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#FF7043", // Track color when checked
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "#ccc", // Track color when unchecked
                  },
                }}
              />
            }
            label={formData.mpu ? "Yes" : "No"}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            De Rate
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Switch
                checked={formData.deRate}
                onChange={handleSwitchChange("deRate")}
                name="deRate"
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#FF7043",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#FF7043",
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "#ccc",
                  },
                }}
              />
            }
            label={formData.deRate ? "Yes" : "No"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

// SectionThree.propTypes = {
//   formData: PropTypes.shape({
//     meterLocation: PropTypes.string.isRequired,
//     mspManufacturer: PropTypes.string,
//     mspBuzzRate: PropTypes.string.isRequired,
//     mainBreakerSize: PropTypes.string.isRequired,
//     mpu: PropTypes.bool.isRequired,
//     deRate: PropTypes.bool.isRequired,
//   }).isRequired,
//   handleChange: PropTypes.func.isRequired,
//   setFormData: PropTypes.func.isRequired,
// };

export default SectionThree;
