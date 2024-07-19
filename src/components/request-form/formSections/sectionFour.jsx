import PropTypes from "prop-types";
import "../requestForm.css";

const SectionFour = ({ formData, handleChange, handleCheckboxChange }) => {
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
              <input
                type="checkbox"
                className="checkbox-input"
                name="roofingInfo"
                value="Shingle"
                checked={formData.roofingInfo.includes("Shingle")}
                onChange={handleCheckboxChange}
              />
              Shingle
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="roofingInfo"
                value="Flat-Tile"
                checked={formData.roofingInfo.includes("Flat-Tile")}
                onChange={handleCheckboxChange}
              />
              Flat-Tile
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="roofingInfo"
                value="Metal"
                checked={formData.roofingInfo.includes("Metal")}
                onChange={handleCheckboxChange}
              />
              Metal
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="roofingInfo"
                value="S-Tile"
                checked={formData.roofingInfo.includes("S-Tile")}
                onChange={handleCheckboxChange}
              />
              S-Tile
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="roofingInfo"
                value="Flat-Roof"
                checked={formData.roofingInfo.includes("Flat-Roof")}
                onChange={handleCheckboxChange}
              />
              Flat-Roof
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="roofingInfo"
                value="Ground-Mount"
                checked={formData.roofingInfo.includes("Ground-Mount")}
                onChange={handleCheckboxChange}
              />
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

SectionFour.propTypes = {
  formData: PropTypes.shape({
    roofingInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
    racksToBeUsed: PropTypes.string,
    mountsToBeUsed: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default SectionFour;
