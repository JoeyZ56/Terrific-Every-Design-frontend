import PropTypes from "prop-types";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";

const SectionFour = ({ formData, handleChange, handleCheckboxChange }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        4. Roofing Information
      </Typography>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Roof Type
        </Typography>
        <FormGroup row>
          {[
            "Shingle",
            "Flat-Tile",
            "Metal",
            "S-Tile",
            "Flat-Roof",
            "Ground-Mount",
          ].map((roofType) => (
            <FormControlLabel
              key={roofType}
              control={
                <Checkbox
                  name="roofingInfo"
                  value={roofType}
                  checked={formData.roofingInfo.includes(roofType)}
                  onChange={handleCheckboxChange}
                  sx={{
                    color: "rgba(77, 77, 77, 0.4)",
                    "&.Mui-checked": {
                      color: "#5C6BC0",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(92, 107, 192, 0.15)",
                    },
                  }}
                />
              }
              label={roofType}
            />
          ))}
        </FormGroup>
      </Box>

      <TextField
        label="Racks To Be Used"
        placeholder="Enter Racks..."
        name="racksToBeUsed"
        value={formData.racksToBeUsed}
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
        label="Mounts To Be Used"
        placeholder="Enter Mounts..."
        name="mountsToBeUsed"
        value={formData.mountsToBeUsed}
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

SectionFour.propTypes = {
  formData: PropTypes.shape({
    roofingInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
    racksToBeUsed: PropTypes.string,
    mountsToBeUsed: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default SectionFour;
