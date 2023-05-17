import { Link } from "react-router-dom";
import Image from "../../assets/pngegg.png";
import "./404.css";

const PageNotFound = () => {
  return (
    <div className="background">
      <div className="container404">
        <img src={Image} className="image404" />
        <Link to="/" className="button404">
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
