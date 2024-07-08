import "./header.css";
import placeholderImage from "../../assets/placeholders/profile-image.png";

const header = () => {
  return (
    <div className="main-header-container">
      <h1 className="main-header">Ted&apos;s Fabrication</h1>;
      <img
        src={placeholderImage}
        alt="profile-image"
        className="header-image"
      />
      <h3 className="header-slogan">Innovate. Create. 3D Print.</h3>
    </div>
  );
};

export default header;
