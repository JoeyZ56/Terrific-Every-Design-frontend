import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./requestForm.css";

//form sections
import SectionOne from "./formSections/sectionOne";
import SectionTwo from "./formSections/sectionTwo";
import SectionThree from "./formSections/sectionThree";
import SectionFour from "./formSections/sectionFour";
import SectionFive from "./formSections/sectionFive";
import SectionSix from "./formSections/sectionSix";
import FileUpload from "./fileUpload/fileUpload";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    //part one
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
    ahj: "",
    apn: "",
    //part two
    equipment: "",
    moduleSize: "",
    numberOfModules: "",
    inverterManufacturer: "",
    numberOfInverters: "",
    sizeOfInverter: "",
    systemSize: "",
    //part three
    meterLocation: "",
    mspManufacturer: "",
    mspBuzzRate: "",
    mainBreakerSize: "",
    mpu: false,
    deRate: false,
    //part four
    roofingInfo: [],
    racksToBeUsed: "",
    mountsToBeUsed: "",
    //part five
    batteryBrandModel: "",
    numberOfBatteries: "",
    batteryLocation: "",
    batterySize: "",
    specificNotes: "",
    //part six
    electricalEngineeringReport: false,
    structuralEngineeringReport: false,
    designTypeRegular: false,
    designTypeBattery: false,
    designTypeCommercial: false,
    priorityUrgent: false,
    priority24Hours: false,
    priority48Hours: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const updateArray = prevState[name].includes(value)
        ? prevState[name].filter((item) => item !== value)
        : [...prevState[name], value];
      return {
        ...prevState,
        [name]: updateArray,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form data:", formData);

    try {
      await axios.post(
        "http://localhost:5000/requests/submit-request",
        formData
      );
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Error submitting form! Contact directly to make a request!");
    }
  };

  return (
    <div className="main-container">
      <Link to="/" className="back-button">
        Back
      </Link>
      <h1>Request Form</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <SectionOne formData={formData} handleChange={handleChange} />
        <SectionTwo formData={formData} handleChange={handleChange} />
        <SectionThree
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
        />
        <SectionFour
          formData={formData}
          handleChange={handleChange}
          handleCheckboxChange={handleCheckboxChange}
        />
        <SectionFive formData={formData} handleChange={handleChange} />
        <SectionSix
          formData={formData}
          handleChange={handleChange}
          setFormData={setFormData}
        />
        <div>
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

export default RequestForm;
