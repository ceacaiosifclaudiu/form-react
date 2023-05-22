import { Link } from "react-router-dom";
import Image from "../../assets/pngegg.png";
import "../../css/404.css";

const PageNotFound = () => {
  return (
    <div className="background flex--center">
      <div className="container-404 flex--column">
        <img src={Image} className="image-404" />
        <Link to="/" className="button button--rounded linear--gradient">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
