import LinearClockImg from "../assets/LinearClock.png";
import PCBuilderImg from "../assets/CodeBrewPCBuilder.png";
import CodeBrewCoffeeImg from "../assets/CodeBrewCoffee.png";
import VidGamesHistoryImg from "../assets/VideoGamesHistory.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects-section">
      <h2>My Projects</h2>
      <div className="content-box">
        <h3>Linear Clock</h3>
        <p className="project-description">
          A fun personal project. This clock shows the time on a linear scale
          and allows you to define an activity period. It's a great tool for
          those who struggle with time blindness, such as, but not limited to,
          people with ADHD. You can try it yourself now!
          <br />
          <Link to="/Clock">Try the Linear Clock</Link>
          <br />
          <a
            href="https://github.com/GallantJoseph/JosephGallant_Portfolio"
            target="_blank"
          >
            GitHub Project
          </a>
        </p>
        <img src={LinearClockImg} alt="Picture of a Linear Clock" />
      </div>
      <div className="content-box">
        <h3>Codebrew PC Builder</h3>
        <p className="project-description">
          Our most recent addition website from a Keyin College Sprint project.
          You can view or order individual computer components, and select
          components for a PC build.
          <br />
          <a
            href="https://github.com/GallantJoseph/Final_Sprint-S2"
            target="_blank"
          >
            GitHub Project
          </a>
        </p>
        <img src={PCBuilderImg} alt="Picture of a Linear Clock" />
      </div>
      <div className="content-box">
        <h3>Codebrew Café</h3>
        <p className="project-description">
          Our second Sprint website project from Keyin College, for a coffee
          shop. You can review items, add items to your cart, and finally review
          and place your order.
          <br />
          <a
            href="https://github.com/GallantJoseph/Midterm_Sprint-S2"
            target="_blank"
          >
            GitHub Project
          </a>
        </p>
        <img src={CodeBrewCoffeeImg} alt="Picture of a Linear Clock" />
      </div>
      <div className="content-box">
        <h3>Video Games History</h3>
        <p className="project-description">
          Our first Sprint website project from Keyin College. This website
          showcases the three pioneering companies that started it all: Atari,
          Nintendo, and Sega.
          <br />
          <a
            href="https://github.com/GallantJoseph/videogameshistory"
            target="_blank"
          >
            GitHub Project
          </a>
        </p>
        <img src={VidGamesHistoryImg} alt="Picture of a Linear Clock" />
      </div>
    </section>
  );
};
export default Projects;
