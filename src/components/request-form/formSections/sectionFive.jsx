import propTypes from "prop-types";
import "../requestForm.css";

const SectionFive = ({ formData, handleChange }) => {
  return (
    <div className="form-container-info part-five">
      <h3>5. Battery Information</h3>
      <h5 className="option-warning">
        *Section Five is optional, except for California based projects
      </h5>
      <label>
        Battery Brand & Model
        <input
          type="text"
          placeholder="Enter Brand & Model..."
          name="batteryBrandModel"
          className="form-info"
          value={formData.batteryBrandModel}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Batteries
        <input
          type="text"
          placeholder="Enter Number..."
          name="numberOfBatteries"
          className="form-info"
          value={formData.numberOfBatteries}
          onChange={handleChange}
        />
      </label>
      <label>
        Battery Location
        <input
          type="text"
          placeholder="Enter Location..."
          name="batteryLocation"
          className="form-info"
          value={formData.batteryLocation}
          onChange={handleChange}
        />
      </label>
      <label>
        Battery Size (kWh)
        <input
          type="text"
          placeholder="Enter Size... (kWh)"
          name="batterySize"
          className="form-info"
          value={formData.batterySize}
          onChange={handleChange}
        />
      </label>
      <label>
        Specific Notes For Site Surveyor
        <textarea
          type="text"
          placeholder="Specific Notes... (Optional)"
          name="specificNotes"
          className="form-info"
          value={formData.specificNotes}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

SectionFive.propTypes = {
  formData: propTypes.shape({
    batteryBrandModel: propTypes.string,
    numberOfBatteries: propTypes.string,
    batteryLocation: propTypes.string,
    batterySize: propTypes.string,
    specificNotes: propTypes.string,
  }).isRequired,
  handleChange: propTypes.func.isRequired,
};

export default SectionFive;
