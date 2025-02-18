import PropTypes from "prop-types";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";

const SectionSix = ({ formData, setFormData }) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        6. Special Request & Priority
      </Typography>

      <Box>
        <Typography variant="subtitle1">Special Request (Optional)</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="electricalEngineeringReport"
                checked={formData.electricalEngineeringReport}
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
            label="Electrical Engineering Report"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="structuralEngineeringReport"
                checked={formData.structuralEngineeringReport}
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
            label="Structural Engineering Report"
          />
        </FormGroup>
      </Box>

      <Box>
        <Typography variant="subtitle1">Design Type (Select One)</Typography>
        <RadioGroup
          name="designType"
          value={formData.designType}
          onChange={(e) =>
            setFormData({ ...formData, designType: e.target.value })
          }
          required
        >
          <FormControlLabel
            value="Regular"
            control={
              <Radio
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
            label="Regular"
          />
          <FormControlLabel
            value="Battery"
            control={
              <Radio
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
            label="Battery"
          />
          <FormControlLabel
            value="Commercial"
            control={
              <Radio
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
            label="Commercial"
          />
        </RadioGroup>
      </Box>

      <Box>
        <Typography variant="subtitle1">Priority (Select One)</Typography>
        <RadioGroup
          name="designType"
          value={formData.priority}
          onChange={(e) =>
            setFormData({ ...formData, priority: e.target.value })
          }
          required
        >
          <FormControlLabel
            value="Standard"
            control={
              <Radio
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
            label="Standard"
          />
          <FormControlLabel
            value="Priority"
            control={
              <Radio
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
            label="Priority"
          />
          <FormControlLabel
            value="Urgent"
            control={
              <Radio
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
            label="Urgent"
          />
        </RadioGroup>
      </Box>
    </Box>
  );
};

// SectionSix.propTypes = {
//   formData: PropTypes.shape({
//     electricalEngineeringReport: PropTypes.bool,
//     structuralEngineeringReport: PropTypes.bool,
//     designType: PropTypes.bool,
//     priority: PropTypes.bool,
//   }).isRequired,
//   setFormData: PropTypes.func.isRequired,
// };

export default SectionSix;
