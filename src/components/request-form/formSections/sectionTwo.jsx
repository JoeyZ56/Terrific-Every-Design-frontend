import propTypes from "prop-types";
import "../requestForm.css";

const SectionTwo = ({ formData, handleChange }) => {
  return (
    <div className="form-container-info part-two">
      <h3>2. Equipment To Be Used</h3>
      <label>
        Module Manufacturer
        <input
          type="text"
          placeholder="Enter Module..."
          name="equipment"
          className="form-info"
          value={formData.equipment}
          onChange={handleChange}
        />
      </label>
      <label>
        Module Size
        <input
          type="text"
          placeholder="Enter Size..."
          name="moduleSize"
          className="form-info"
          value={formData.moduleSize}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Modules
        <input
          type="text"
          placeholder="Enter Number..."
          name="numberOfModules"
          className="form-info"
          value={formData.numberOfModules}
          onChange={handleChange}
        />
      </label>
      <label>
        Inverter Manufacturer
        <input
          type="text"
          placeholder="Enter Inverter..."
          name="inverterManufacturer"
          className="form-info"
          value={formData.inverterManufacturer}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Inverters
        <input
          type="text"
          placeholder="Enter Number..."
          name="numberOfInverters"
          className="form-info"
          value={formData.numberOfInverters}
          onChange={handleChange}
        />
      </label>
      <label>
        Size of Inverter (W)
        <input
          type="text"
          placeholder="Enter Size... (W)"
          name="sizeOfInverter"
          className="form-info"
          value={formData.sizeOfInverter}
          onChange={handleChange}
        />
      </label>
      <label>
        System Size (W)
        <input
          type="text"
          placeholder="Enter Size... (W)"
          name="systemSize"
          className="form-info"
          value={formData.systemSize}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

SectionTwo.propTypes = {
  formData: propTypes.shape({
    equipment: propTypes.string,
    moduleSize: propTypes.string,
    numberOfModules: propTypes.string,
    inverterManufacturer: propTypes.string,
    numberOfInverters: propTypes.string,
    sizeOfInverter: propTypes.string,
    systemSize: propTypes.string,
  }).isRequired,
  handleChange: propTypes.func,
};

export default SectionTwo;
