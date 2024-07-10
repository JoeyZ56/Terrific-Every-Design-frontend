import Header from "../../components/header/header";
import Contact from "../../components/contact/contact";
// import Tickets from "../../components/tickets/tickets";
import Navbar from "../../components/navbar/navbar";

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Contact />
      {/* <Tickets /> */}
    </div>
  );
};

export default home;
