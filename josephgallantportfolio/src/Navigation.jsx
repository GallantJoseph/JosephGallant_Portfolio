import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/Clock">Clock</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
