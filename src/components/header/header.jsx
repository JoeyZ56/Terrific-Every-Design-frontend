import "./header.css";
import placeholderImage from "../../assets/placeholders/profile-image.png";

const header = () => {
  return (
    <div className="main-header-container">
      {/* <h1 className="main-header">Terrific Every Design</h1>; */}
      <img
        src={placeholderImage}
        alt="profile-image"
        className="header-image"
      />
      <h3 className="header-slogan">Crafting Precision for Solar Success</h3>
    </div>
  );
};

export default header;
