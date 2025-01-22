import PropTypes from "prop-types";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
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
        <Typography variant="subtitle1">Special Request</Typography>
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
        <Typography variant="subtitle1">Design Type</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="designTypeRegular"
                checked={formData.designTypeRegular}
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
            label="Regular"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="designTypeBattery"
                checked={formData.designTypeBattery}
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
            label="Battery"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="designTypeCommercial"
                checked={formData.designTypeCommercial}
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
            label="Commercial"
          />
        </FormGroup>
      </Box>

      <Box>
        <Typography variant="subtitle1">Priority</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="priorityUrgent"
                checked={formData.priorityUrgent}
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
            label="Urgent (6 - 12 Hours)"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="priority24Hours"
                checked={formData.priority24Hours}
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
            label="Priority (within 24 hours)"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="priority48Hours"
                checked={formData.priority48Hours}
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
            label="Standard (within 48 hours)"
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

SectionSix.propTypes = {
  formData: PropTypes.shape({
    electricalEngineeringReport: PropTypes.bool,
    structuralEngineeringReport: PropTypes.bool,
    designTypeRegular: PropTypes.bool,
    designTypeBattery: PropTypes.bool,
    designTypeCommercial: PropTypes.bool,
    priorityUrgent: PropTypes.bool,
    priority24Hours: PropTypes.bool,
    priority48Hours: PropTypes.bool,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default SectionSix;
