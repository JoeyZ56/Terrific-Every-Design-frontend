import propTypes from "prop-types";
import "../requestForm.css";

const SectionThree = ({ formData, handleChange, setFormData }) => {
  return (
    <div className="form-container-info part-three">
      <h3>3. Electrical Service</h3>
      <input
        type="text"
        placeholder="Location of Meter & Panel"
        name="meterLocation"
        className="form-info"
        value={formData.meterLocation}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Existing M.S.P. Manufacturer"
        name="mspManufacturer"
        className="form-info"
        value={formData.mspManufacturer}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Existing M.S.P. Buzz Rate"
        name="mspBuzzRate"
        className="form-info"
        value={formData.mspBuzzRate}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Existing Main Breaker Size"
        name="mainBreakerSize"
        className="form-info"
        value={formData.mainBreakerSize}
        onChange={handleChange}
      />
      <div className="checkbox-container">
        <div className="checkbox-group">
          <div className="checkbox-header">
            <h5>M.P.U.</h5>
          </div>
          <div className="checkbox-items">
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="mpu"
                checked={formData.mpu}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    mpu: e.target.checked,
                  })
                }
              />
              Yes
            </label>

            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="mpu"
                checked={!formData.mpu}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    mpu: !e.target.checked,
                  })
                }
              />
              No
            </label>
          </div>
        </div>
        <div className="checkbox-group">
          <div className="checkbox-header">
            <h5>De Rate</h5>
          </div>
          <div className="checkbox-items">
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="deRate"
                checked={formData.deRate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    deRate: e.target.checked,
                  })
                }
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox-input"
                name="deRate"
                checked={!formData.deRate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    deRate: !e.target.checked,
                  })
                }
              />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionThree.propTypes = {
  formData: propTypes.shape({
    meterLocation: propTypes.string,
    mspManufacturer: propTypes.string,
    mspBuzzRate: propTypes.string,
    mainBreakerSize: propTypes.string,
    mpu: propTypes.bool,
    deRate: propTypes.bool,
  }).isRequired,
  handleChange: propTypes.func.isRequired,
  setFormData: propTypes.func.isRequired,
};

export default SectionThree;
