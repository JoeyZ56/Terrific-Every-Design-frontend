import PropTypes from "prop-types";
import {
  Box,
  Typography,
  FormControlLabel,
  TextField,
  RadioGroup,
  Radio,
} from "@mui/material";

const SectionFour = ({ formData, handleChange, setFormData }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        4. Roofing Information
      </Typography>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Roof Type (Select One)
        </Typography>
        <RadioGroup
          name="roofingInfo"
          value={formData.roofingInfo}
          onChange={(e) =>
            setFormData({ ...formData, roofingInfo: e.target.value })
          }
          required
        >
          <FormControlLabel
            value="Shingle"
            control={<Radio />}
            label="Shingle"
          />
          <FormControlLabel
            value="Flat-Tile"
            control={<Radio />}
            label="Flat-Tile"
          />
          <FormControlLabel value="Metal" control={<Radio />} label="Metal" />
          <FormControlLabel value="S-Tile" control={<Radio />} label="S-Tile" />
          <FormControlLabel
            value="Flat-Roof"
            control={<Radio />}
            label="Flat-Roof"
          />
          <FormControlLabel
            value="Ground-Mount"
            control={<Radio />}
            label="Ground-Mount"
          />
        </RadioGroup>
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

// SectionFour.propTypes = {
//   formData: PropTypes.shape({
//     roofingInfo: PropTypes.bool,
//     racksToBeUsed: PropTypes.string,
//     mountsToBeUsed: PropTypes.string,
//   }).isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleCheckboxChange: PropTypes.func.isRequired,
// };

export default SectionFour;
