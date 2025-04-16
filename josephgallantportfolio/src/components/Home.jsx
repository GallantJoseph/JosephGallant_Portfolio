import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section id="home-section">
      <div id="portfolio-top-left-box" className="portfolio-box">
        <Link to="/Projects" className="home-link">
          Projects
        </Link>
      </div>
      <div id="portfolio-top-right-box" className="portfolio-box">
        <Link to="/Gallery" className="home-link">
          Gallery
        </Link>
      </div>
      <div id="portfolio-mid-box" className="portfolio-box">
        <h2>Portfolio</h2>
        <h3>Joseph Gallant</h3>
        <div></div>
      </div>
      <div id="portfolio-bot-left-box" className="portfolio-box">
        <Link to="/Clock" className="home-link">
          Clock
        </Link>
      </div>
      <div id="portfolio-bot-right-box" className="portfolio-box">
        <Link to="/Contact" className="home-link">
          Contact Me
        </Link>
      </div>
    </section>
  );
};
export default Home;
