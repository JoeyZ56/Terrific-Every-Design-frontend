import "../requestForm.css";

const SectionFour = ({ formData, handleChange }) => {
  return (
    <div className="form-container-info part-four">
      <div className="checkbox-container">
        <h3>4. Roofing Information</h3>
        <div className="checkbox-group">
          <div>
            <h6>Roof Type</h6>
          </div>
          <div className="checkbox-items">
            <label>
              <input type="checkbox" className="checkbox-input" />
              Shingle
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              Flat-Tile
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              Metal
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              S-Tile
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              Flat-Roof
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              Ground-Mount
            </label>
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Racks To Be Used"
        name="racksToBeUsed"
        className="form-info"
        value={formData.racksToBeUsed}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Mounts To Be Used"
        name="mountsToBeUsed"
        className="form-info"
        value={formData.mountsToBeUsed}
        onChange={handleChange}
      />
    </div>
  );
};

export default SectionFour;
