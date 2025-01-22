import PropTypes from "prop-types";
import { TextField, MenuItem, Box, Typography } from "@mui/material";

const SectionOne = ({ formData, handleChange }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        1. Client Information
      </Typography>

      <TextField
        label="Name or Company"
        placeholder="Enter Name... (optional)"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#5C6BC0", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5C6BC0", // Border color when focused
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#5C6BC0", // Label color when focused
          },
        }}
      />

      <TextField
        label="Email"
        type="email"
        placeholder="Enter Email..."
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
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
        label="Contact Number"
        placeholder="Enter Number..."
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
        required
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
        label="Address"
        placeholder="Enter Address..."
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
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
        label="City"
        placeholder="Enter City..."
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
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
        label="Zip Code"
        placeholder="Enter Zip Code..."
        name="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
        required
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
        label="State"
        select
        name="state"
        value={formData.state}
        onChange={handleChange}
        required
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
      >
        <MenuItem value="">Select State</MenuItem>
        {[
          "AL",
          "AK",
          "AZ",
          "AR",
          "CA",
          "CO",
          "CT",
          "DE",
          "FL",
          "GA",
          "HI",
          "ID",
          "IL",
          "IN",
          "IA",
          "KS",
          "KY",
          "LA",
          "ME",
          "MD",
          "MA",
          "MI",
          "MN",
          "MS",
          "MO",
          "MT",
          "NE",
          "NV",
          "NH",
          "NJ",
          "NM",
          "NY",
          "NC",
          "ND",
          "OH",
          "OK",
          "OR",
          "PA",
          "RI",
          "SC",
          "SD",
          "TN",
          "TX",
          "UT",
          "VT",
          "VA",
          "WA",
          "WV",
          "WI",
          "WY",
        ].map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="AHJ"
        placeholder="Enter AHJ... (optional)"
        name="ahj"
        value={formData.ahj}
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
        label="APN (If Known)"
        placeholder="Enter APN... (optional)"
        name="apn"
        value={formData.apn}
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
    </Box>
  );
};

SectionOne.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    ahj: PropTypes.string.isRequired,
    apn: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SectionOne;
