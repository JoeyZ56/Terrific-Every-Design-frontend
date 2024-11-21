import propTypes from "prop-types";
import "../requestForm.css";

const sectionSix = ({ formData, setFormData }) => {
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
              onChange={(e) =>
                setFormData({
                  ...formData,
                  electricalEngineeringReport: e.target.checked,
                })
              }
            />
            Electrical Engineering Report
          </label>
          <label>
            <input
              type="checkbox"
              className="checkbox-input"
              name="structuralEngineeringReport"
              checked={formData.structuralEngineeringReport}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  structuralEngineeringReport: e.target.checked,
                })
              }
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    designTypeRegular: e.target.checked,
                  })
                }
              />
              Regular
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="designTypeBattery"
                checked={formData.designTypeBattery}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    designTypeBattery: e.target.checked,
                  })
                }
              />
              Battery
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="designTypeCommercial"
                checked={formData.designTypeCommercial}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    designTypeCommercial: e.target.checked,
                  })
                }
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
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priorityUrgent: e.target.checked,
                })
              }
            />
            Urgent (6 - 12 Hours) extra $50
          </label>
          <label>
            <input
              type="checkbox"
              className="checkbox-input"
              name="priority24Hours"
              checked={formData.priority24Hours}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priority24Hours: e.target.checked,
                })
              }
            />
            Priority (within 24 hours) extra $25
          </label>
          <label>
            <input
              type="checkbox"
              className="checkbox-input"
              name="priority48Hours"
              checked={formData.priority48Hours}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priority48Hours: e.target.checked,
                })
              }
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
};

export default sectionSix;
