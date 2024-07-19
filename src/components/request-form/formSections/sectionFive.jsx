import propTypes from "prop-types";
import "../requestForm.css";

const SectionFive = ({ formData, handleChange }) => {
  return (
    <div className="form-container-info part-five">
      <h3>5. Battery Information</h3>
      <input
        type="text"
        placeholder="Battery Brand & Model"
        name="batteryBrandModel"
        className="form-info"
        value={formData.batteryBrandModel}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Number of Batteries"
        name="numberOfBatteries"
        className="form-info"
        value={formData.numberOfBatteries}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Battery Location"
        name="batteryLocation"
        className="form-info"
        value={formData.batteryLocation}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Battery Size (kWh)"
        name="batterySize"
        className="form-info"
        value={formData.batterySize}
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="Specific Notes For Site Surveyor"
        name="specificNotes"
        className="form-info"
        value={formData.specificNotes}
        onChange={handleChange}
      />
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
