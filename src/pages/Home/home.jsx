import Header from "../../components/header/header";
import Contact from "../../components/contact/contact";
import Navbar from "../../components/navbar/navbar";
import RequestGraph from "../../components/request-graph/requestGraph";

const home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <Contact />
      <RequestGraph />
    </div>
  );
};

export default home;
