import { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Paper,
  Container,
} from "@mui/material";
import Footer from "../footer/Footer";

//form sections
import SectionOne from "./formSections/sectionOne";
import SectionTwo from "./formSections/sectionTwo";
import SectionThree from "./formSections/sectionThree";
import SectionFour from "./formSections/sectionFour";
import SectionFive from "./formSections/sectionFive";
import SectionSix from "./formSections/sectionSix";
import FileUpload from "./fileUpload/fileUpload";
import HamburgerMenu from "../menu/hamburgerMenu";

const RequestForm = () => {
  const [loading, setLoading] = useState(false);
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
    electricityType: "",
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
    //part seven
    fileUpload: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevState) => ({
      ...prevState,
      fileUpload: [...(prevState.fileUpload || []), ...files],
    }));
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
    setLoading(true);

    const data = new FormData();
    for (const key in formData) {
      if (key === "fileUpload") {
        const files = formData[key] || [];
        files.forEach((file) => {
          data.append("fileUpload", file);
        });
      } else {
        data.append(key, formData[key]);
      }
    }

    console.log("Submitting form data:", formData);

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      await axios.post(`${apiKey}/requests/submit-request`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(
        "Your form submitted successfully! Thank you for choosing Terific Every Design. Our team will contact you shortly."
      );
      // returns to home page after alert has been clicked
      window.location.href = "/";
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Error submitting form! Contact directly to make a request!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure the entire viewport is used
        overflow: "hidden",
        marginTop: 10,
      }}
    >
      <HamburgerMenu />

      <Container
        maxWidth="md"
        sx={{
          flex: 1, // Push the footer down
          display: "flex",
          flexDirection: "column",
          justifyContent: loading ? "center" : "flex-start",
          alignItems: "center",
        }}
      >
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress size={120} sx={{ color: "#FF7043" }} />
          </Box>
        ) : (
          <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              sx={{ fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2rem" } }}
            >
              Service Request Form
            </Typography>
            <form onSubmit={handleSubmit}>
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
              <FileUpload handleFileChange={handleFileChange} />

              <Box sx={{ marginTop: 3, textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#5C6BC0",
                    "&:hover": { backgroundColor: "#3F51B5" },
                  }}
                  fullWidth
                  disabled={loading}
                >
                  Submit Request
                </Button>
              </Box>
            </form>
          </Paper>
        )}
      </Container>

      <Footer />
    </Box>
  );
};

export default RequestForm;
