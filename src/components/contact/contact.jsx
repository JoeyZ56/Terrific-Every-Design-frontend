import { motion } from "framer-motion";
import email from "../../assets/contactImages/email.svg";
import mobile from "../../assets/contactImages/mobile.png";
import "./contact.css";

const contact = () => {
  return (
    <div className="main-contact-container" id="contact">
      <div className="contact-text-container">
        <h2 className="contact-text">
          Get started on crafting your solar dreams today!
        </h2>
        <h2 className="contact-text">Call or email us to get a quote!</h2>
      </div>
      <div className="link-container">
        <a href="mailto:terrificeverydesign@gmail.com" className="links">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="motion-div"
          >
            <img src={email} alt="email" className="links-image" />
            {/* //"mailto" is a specail property that takes you to a link to email the person */}
            <p>terrificeverydesign@gmail.com</p>
          </motion.div>
        </a>
        <a href="tel: +1 (530) 228-2523" className="links">
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="motion-div"
          >
            <img src={mobile} alt="mobile" className="links-image" />
            {/* //"tel:" */}
            <p>+1 (530) 514-2339</p>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default contact;
