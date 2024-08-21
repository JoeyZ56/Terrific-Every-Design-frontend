import propTypes from "prop-types";
import "../requestForm.css";

const SectionTwo = ({ formData, handleChange }) => {
  return (
    <div className="form-container-info part-two">
      <h3>2. Equipment To Be Used</h3>
      <label>
        Module Number
        <input
          type="text"
          placeholder="Enter Module..."
          name="equipment"
          className="form-info"
          value={formData.equipment}
          onChange={handleChange}
          required
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
          required
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
          required
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
          required
        />
      </label>
      <label>
        Number of Inverters
        <input
          type="text"
          placeholder="Enter Number... (optional)"
          name="numberOfInverters"
          className="form-info"
          value={formData.numberOfInverters}
          onChange={handleChange}
        />
      </label>
      <div className="electricity-type-container">
        <label>
          Size of Inverter (W) / (VA)
          <input
            type="text"
            placeholder="Enter Size... "
            name="sizeOfInverter"
            className="form-info size-of-inverter"
            value={formData.sizeOfInverter}
            onChange={handleChange}
            required
          />
        </label>
        <select
          placeholder=""
          name="electricityType"
          className="form-info electricity-type"
          value={formData.electricityType}
          onChange={handleChange}
          required
        >
          <option value=""></option>
          <option value="w">W</option>
          <option value="va">VA</option>
        </select>
      </div>
      <label>
        System Size (W)
        <input
          type="text"
          placeholder="Enter Size... (W)"
          name="systemSize"
          className="form-info"
          value={formData.systemSize}
          onChange={handleChange}
          required
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
    electricityType: propTypes.string,
    sizeOfInverter: propTypes.string,
    systemSize: propTypes.string,
  }).isRequired,
  handleChange: propTypes.func,
};

export default SectionTwo;
