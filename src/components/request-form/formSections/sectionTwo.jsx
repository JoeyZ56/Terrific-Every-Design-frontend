import "../requestForm.css";

const SectionTwo = ({ formData, handleChange }) => {
  return (
    <div className="form-container-info part-two">
      <h3>2. Equipment To Be Used</h3>
      <input
        type="text"
        placeholder="Module Manufacturer"
        name="equipment"
        className="form-info"
        value={formData.equipment}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Size of Module"
        name="moduleSize"
        className="form-info"
        value={formData.moduleSize}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Number of Modules"
        name="numberOfModules"
        className="form-info"
        value={formData.numberOfModules}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Inverter Manufacturer"
        name="inverterManufacturer"
        className="form-info"
        value={formData.inverterManufacturer}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Number of Inverters"
        name="numberOfInverters"
        className="form-info"
        value={formData.numberOfInverters}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Size of Inverter (W)"
        name="sizeOfInverter"
        className="form-info"
        value={formData.sizeOfInverter}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="System Size (W)"
        name="systemSize"
        className="form-info"
        value={formData.systemSize}
        onChange={handleChange}
      />
    </div>
  );
};

export default SectionTwo;
