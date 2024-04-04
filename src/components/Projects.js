import stonk from "../components/images/stonk.webm";
import share from "../components/images/share.png";

export default function Projects() {
  return (
    <div>
      <div className="featured-titles">Featured Projects</div>
      <div className="projects-wrapper">
        <div className="project-item">
          <video autoPlay loop muted className="project-video">
            <source src={stonk} type="video/webm" />
          </video>
          <div className="project-description">
            <p>
              Stock Predicter, as the name suggests, is an advanced software
              tool developed in Python, designed to forecast future stock trends
              using many machine learning algorithms.
            </p>
            <button
              className="project-button"
              aria-label="View Project Details"
            >
              <img src={share} alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="projects-wrapper">
        {" "}
        <p>More Projects Coming Soon! Check out GitHub for more </p>
      </div>
    </div>
  );
}
