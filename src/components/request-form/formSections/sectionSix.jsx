import propTypes from "prop-types";
import "../requestForm.css";

const sectionSix = ({ formData, handleCheclboxChange }) => {
  return (
    <div className="form-container-info part-six">
      <h3>6. Special Request & Priority</h3>
      <div className="checkbox-group">
        <div className="checkbox-header">
          <h6>Special Request</h6>{" "}
        </div>
        <div className="checkbox-items">
          <label>
            <input
              type="checkbox"
              className="checkbox-input"
              name="electricalEngineeringReport"
              checked={formData.electricalEngineeringReport}
              onChange={handleCheclboxChange}
            />
            Electrical Engineering Report
          </label>
          <label>
            <input
              type="checkbox"
              className="checkbox-input"
              name="structuralEngineeringReport"
              checked={formData.structuralEngineeringReport}
              onChange={handleCheclboxChange}
            />
            Structural Engineering Report
          </label>
        </div>
        <div className="checkbox-group">
          <div className="checkbox-header">
            <h6>Design Type</h6>
          </div>
          <div className="checkbox-items">
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="designTypeRegular"
                checked={formData.designTypeRegular}
                onChange={handleCheclboxChange}
              />
              Regular
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="designTypeBattery"
                checked={formData.designTypeBattery}
                onChange={handleCheclboxChange}
              />
              Battery
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="designTypeCommercial"
                checked={formData.designTypeCommercial}
                onChange={handleCheclboxChange}
              />
              Commercial
            </label>
          </div>
        </div>
      </div>
      <div className="checkbox-group">
        <div className="checkbox-header">
          <h6>Priority</h6>
        </div>
        <div className="checkbox-items">
          <label>
            <input
              type="checkbox"
              className="checkbox-input"
              name="priorityUrgent"
              checked={formData.priorityUrgent}
              onChange={handleCheclboxChange}
            />
            Urgent (2 - 4 Hours) extra $50
          </label>
          <label>
            <input
              type="checkbox"
              className="checkbox-input"
              name="priority24Hours"
              checked={formData.priority24Hours}
              onChange={handleCheclboxChange}
            />
            Priority (within 24 hours) standard price
          </label>
          <label>
            <input
              type="checkbox"
              className="checkbox-input"
              name="priority48Hours"
              checked={formData.priority48Hours}
              onChange={handleCheclboxChange}
            />
            Standard (within 48 hours) standard price
          </label>
        </div>
      </div>
    </div>
  );
};

sectionSix.propTypes = {
  formData: propTypes.shape({
    electricalEngineeringReport: propTypes.bool,
    structuralEngineeringReport: propTypes.bool,
    designTypeRegular: propTypes.bool,
    designTypeBattery: propTypes.bool,
    designTypeCommercial: propTypes.bool,
    priorityUrgent: propTypes.bool,
    priority24Hours: propTypes.bool,
    priority48Hours: propTypes.bool,
  }).isRequired,
  setFormData: propTypes.func.isRequired,
  handleCheclboxChange: propTypes.func.isRequired,
};

export default sectionSix;
