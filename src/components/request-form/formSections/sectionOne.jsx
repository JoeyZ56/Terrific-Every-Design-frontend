import PropTypes from "prop-types";
import "../requestForm.css";

const SectionOne = ({ formData, handleChange }) => {
  return (
    <div className="form-container-info part-one">
      <h3>1. Client Information</h3>
      <label>
        Name
        <input
          type="text"
          placeholder="Enter Name..."
          name="name"
          className="form-info"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="Enter Email..."
          name="email"
          className="form-info"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Contact Number
        <input
          type="text"
          placeholder="Enter Contact Number..."
          name="contactNumber"
          className="form-info"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Address
        <input
          type="text"
          placeholder="Enter Address..."
          name="address"
          className="form-info"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        City
        <input
          type="text"
          placeholder="Enter City..."
          name="city"
          className="form-info"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Zip Code
        <input
          type="text"
          placeholder="Enter Zip Code..."
          name="zipCode"
          className="form-info"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </label>
      <label>
        State
        <select
          className="form-info"
          name="Select State..."
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Select State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </label>
      <label>
        AHJ
        <input
          type="text"
          placeholder="Enter AHJ..."
          name="ahj"
          className="form-info"
          value={formData.ahj}
          onChange={handleChange}
        />
      </label>
      <label>
        APN (If Known)
        <input
          type="text"
          placeholder="Enter APN..."
          name="apn"
          className="form-info"
          value={formData.apn}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

SectionOne.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    ahj: PropTypes.string.isRequired,
    apn: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SectionOne;
