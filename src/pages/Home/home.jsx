import Header from "../../components/header/header";
import Contact from "../../components/contact/contact";
import Navbar from "../../components/navbar/navbar";
import RequestGraphWithErrorBoundary from "../../components/request-graph/requestGraph";
import Footer from "../../components/footer/Footer";
import "./home.css";

const home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <RequestGraphWithErrorBoundary />
      <Contact />
      <Footer />
    </div>
  );
};

export default home;
