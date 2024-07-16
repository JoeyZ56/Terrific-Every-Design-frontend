import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FileUpload from "./fileUpload/fileUpload";
import "./ticketForm.css";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
    equipment: "",
    moduleSize: "",
    numberOfModules: "",
    inverterManufacturer: "",
    numberOfInverters: "",
    sizeOfInverter: "",
    systemSize: "",
    electricalService: "",
    meterLocation: "",
    mspManufacturer: "",
    mspBuzzRate: "",
    mainBreakerSize: "",
    mpu: false,
    deRate: false,
    roofingInfo: [],
    batteryInfo: "",
    specialRequest: [],
    designType: [],
    priorityUrgent: false,
    priority24Hours: false,
    priority48Hours: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/submit", formData);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form!");
    }
  };

  return (
    <div className="main-container">
      <Link to="/" className="back-button">
        Back
      </Link>
      <h1>Request Form</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-container-info part-one">
          <h3>1. Client Information</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form-info"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-info"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Contact Number"
            name="contactNumber"
            className="form-info"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            className="form-info"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            className="form-info"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Zip Code"
            name="zipCode"
            className="form-info"
            value={formData.zipCode}
            onChange={handleChange}
          />
          <select
            className="form-info"
            name="state"
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
        </div>
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
        <div className="form-container-info part-six">
          <h3>6. Special Request & Priority</h3>
          <div className="checkbox-group">
            <div className="checkbox-header">
              <h6>Special Request</h6>{" "}
            </div>
            <div className="checkbox-items">
              <label>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="electricalEngineeringReport"
                  checked={formData.electricalEngineeringReport}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      electricalEngineeringReport: e.target.checked,
                    })
                  }
                />
                Electrical Engineering Report
              </label>
              <label>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="structuralEngineeringReport"
                  checked={formData.structuralEngineeringReport}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      structuralEngineeringReport: e.target.checked,
                    })
                  }
                />
                Structural Engineering Report
              </label>
            </div>
            <div className="checkbox-group">
              <div className="checkbox-header">
                <h6>Design Type</h6>
              </div>
              <div className="checkbox-items">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    name="designTypeRegular"
                    checked={formData.designTypeRegular}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        designTypeRegular: e.target.checked,
                      })
                    }
                  />
                  Regular
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    name="designTypeBattery"
                    checked={formData.designTypeBattery}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        designTypeBattery: e.target.checked,
                      })
                    }
                  />
                  Battery
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    name="designTypeCommercial"
                    checked={formData.designTypeCommercial}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        designTypeCommercial: e.target.checked,
                      })
                    }
                  />
                  Commercial
                </label>
              </div>
            </div>
          </div>
          <div className="checkbox-group">
            <div className="checkbox-header">
              <h6>Priority</h6>
            </div>
            <div className="checkbox-items">
              <label>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="priorityUrgent"
                  checked={formData.priorityUrgent}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      priorityUrgent: e.target.checked,
                    })
                  }
                />
                Urgent (2 - 4 Hours) extra $50
              </label>
              <label>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="priority24Hours"
                  checked={formData.priority24Hours}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      priority24Hours: e.target.checked,
                    })
                  }
                />
                Priority (within 24 hours) standard price
              </label>
              <label>
                <input
                  type="checkbox"
                  className="checkbox-input"
                  name="priority48Hours"
                  checked={formData.priority48Hours}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      priority48Hours: e.target.checked,
                    })
                  }
                />
                Standard (within 48 hours) standard price
              </label>
            </div>
          </div>
        </div>
        <div className="form-container-info part-seven">
          <h3>7. Attachments</h3>
          <FileUpload />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
