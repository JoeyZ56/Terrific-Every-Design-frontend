import PropTypes from "prop-types";
import { TextField, MenuItem, Box, Typography } from "@mui/material";

const SectionTwo = ({ formData, handleChange }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        2. Equipment To Be Used
      </Typography>

      <TextField
        label="Module Number"
        placeholder="Enter Module..."
        name="equipment"
        value={formData.equipment}
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
        label="Module Size"
        placeholder="Enter size..."
        name="moduleSize"
        value={formData.moduleSize}
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
        label="Number of Modules"
        placeholder="Enter Number..."
        name="numberOfModules"
        value={formData.numberOfModules}
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
        label="Inverter Manufacturer"
        placeholder="Enter inverter..."
        name="inverterManufacturer"
        value={formData.inverterManufacturer}
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
        label="Number of Inverters (Optional)"
        placeholder="Enter Number..."
        name="numberOfInverters"
        value={formData.numberOfInverters}
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

      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="Size of Inverter"
          placeholder="Enter Size..."
          name="sizeOfInverter"
          value={formData.sizeOfInverter}
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
          label="Electricity Type (W/VA)"
          select
          name="electricityType"
          value={formData.electricityType}
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
        >
          <MenuItem value="">Select Type</MenuItem>
          <MenuItem value="W">W</MenuItem>
          <MenuItem value="VA">VA</MenuItem>
        </TextField>
      </Box>

      <TextField
        label="System Size (W)"
        placeholder="Enter size... (W)"
        name="systemSize"
        value={formData.systemSize}
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
    </Box>
  );
};

// SectionTwo.propTypes = {
//   formData: PropTypes.shape({
//     equipment: PropTypes.string.isRequired,
//     moduleSize: PropTypes.string.isRequired,
//     numberOfModules: PropTypes.string.isRequired,
//     inverterManufacturer: PropTypes.string.isRequired,
//     numberOfInverters: PropTypes.string,
//     electricityType: PropTypes.string.isRequired,
//     sizeOfInverter: PropTypes.string.isRequired,
//     systemSize: PropTypes.string.isRequired,
//   }).isRequired,
//   handleChange: PropTypes.func.isRequired,
// };

export default SectionTwo;
