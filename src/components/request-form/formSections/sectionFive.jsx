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

export default SectionFive;
