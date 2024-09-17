import { Link } from "react-router-dom";
import { BeerIcon } from "./icons/beericon";
import '../main'

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <div className="box-logo">
        <BeerIcon />
        <span className="box-logo-text">
          <h1 className="text-logo-y">craft</h1>
          <h1 className="text-logo-w">Mans</h1>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
