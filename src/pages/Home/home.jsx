// import Header from "../../components/header/header";
import Contact from "../../components/contact/contact";
// import Navbar from "../../components/navbar/navbar";  {depricated}
import RequestGraphWithErrorBoundary from "../../components/request-graph/requestGraph";
import Footer from "../../components/footer/Footer";
import "./home.css";
import HamburgerMenu from "../../components/menu/hamburgerMenu";

const home = () => {
  return (
    <div className="home-container">
      <HamburgerMenu />
      <RequestGraphWithErrorBoundary />
      <Contact />
      <Footer />
    </div>
  );
};

export default home;
