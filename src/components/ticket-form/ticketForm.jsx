import FileUpload from "./fileUpload/fileUpload";
import "./ticketForm.css";

const TicketForm = () => {
  return (
    <div className="main-container">
      <h1>Ticket Form</h1>
      <form className="form-container">
        <div className="form-container-info part-one">
          <h3>Client Information</h3>
          <input type="text" placeholder="Name" className="form-info" />
          <input type="text" placeholder="Email" className="form-info" />
          <input
            type="text"
            placeholder="Contact Number"
            className="form-info"
          />
          <input type="text" placeholder="Address" className="form-info" />
          <input type="text" placeholder="City" className="form-info" />

          <input type="text" placeholder="Zip Code" className="form-info" />
          <select className="form-info">
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
          <h3>Equipment To Be Used</h3>
          <input
            type="text"
            placeholder="Module Manufacturer"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Size of Module"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Number of Modules"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Inverter Manufacturer"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Number of Inverters"
            className="form-info"
          />
          <select className="form-info" placeholder="Size of Inverter"></select>

          <select className="form-info" placeholder="System Size"></select>
        </div>
        <div className="form-container-info part-three">
          <h3>Electrical Service</h3>
          <input
            type="text"
            placeholder="Location of Meter & Panel"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Existing M.S.P. Manufacturer"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Existing M.S.P. Buzz Rate"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Existing Main Breaker Size"
            className="form-info"
          />
          <div className="checkbox-container">
            <div className="checkbox-group">
              <h5>M.P.U.</h5>
              <label>
                <input type="checkbox" className="checkbox-input" />
                Yes
              </label>
              <label>
                <input type="checkbox" className="checkbox-input" />
                No
              </label>
            </div>
            <div className="checkbox-group">
              <h5>De Rate</h5>
              <label>
                <input type="checkbox" className="checkbox-input" />
                Yes
              </label>
              <label>
                <input type="checkbox" className="checkbox-input" />
                No
              </label>
            </div>
          </div>
        </div>
        <div className="form-container-info part-four">
          <div className="checkbox-container">
            <h3>Roofing Information</h3>
            <div className="checkbox-group">
              <h6>Roof Type</h6> <br />
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
          <input
            type="text"
            placeholder="Racks To Be Used"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Mounts To Be Used"
            className="form-info"
          />
        </div>
        <div className="form-container-info part-five">
          <h3>Battery Information</h3>
          <input
            type="text"
            placeholder="Battery Brand & Model"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Number of Batteries"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Battery Location"
            className="form-info"
          />
          <input
            type="text"
            placeholder="Battery Size (kWh)"
            className="form-info"
          />
          <textarea
            type="text"
            placeholder="Specific Notes For Site Surveyor"
            className="form-info"
          />
        </div>
        <div className="form-container-info part-six">
          <div className="checkbox-group">
            <h6>Special Request</h6> <br />
            <label>
              <input type="checkbox" className="checkbox-input" />
              Eletrical Engineering Report
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              Structural Engineering Report
            </label>
          </div>
          <div className="checkbox-group">
            <h6>Design Type</h6> <br />
            <label>
              <input type="checkbox" className="checkbox-input" />
              Regular
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              Battery
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              Commercial
            </label>
          </div>
          <div className="checkbox-group">
            <h6>Priority</h6> <br />
            <label>
              <input type="checkbox" className="checkbox-input" />
              Urgent (2 - 4 Hours) extra $50
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              Priority (within 24 hours) standard price
            </label>
            <label>
              <input type="checkbox" className="checkbox-input" />
              Standard (within 48 hours) standard price
            </label>
          </div>
        </div>
        <div className="form-container-info part-seven">
          <FileUpload />
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
