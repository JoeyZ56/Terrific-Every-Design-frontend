import Header from "../../components/header/header";
import Contact from "../../components/contact/contact";
import Navbar from "../../components/navbar/navbar";

const home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <Contact />
    </div>
  );
};

export default home;
