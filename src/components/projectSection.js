import ProjectOverlay from "./projectOverlay";
import Img from "./imgs/Unsplash.jpeg";
import Img2 from "./imgs/136511bdb337a208387bd912b808dcf8.jpg";

function Project() {
  return (
    <section className="pr-header">
      <h2>Browse My Recent</h2>
      <h1>Projects</h1>
      <div className="project-section">
        <ProjectOverlay
          photo={Img}
          text1={"Project One"}
          P={"(NOTE:- This project is still in its developing stage.)"}
          href1={"https://github.com/JayGoud7/react-search-engine"}
          href2={"https://jaygoud7.github.io/react-search-engine/"}
        />
        <ProjectOverlay
          photo={Img2}
          text2={"Project Two"}
          P1={"Currently working on it"}
        />
      </div>
    </section>
  );
}

export default Project;
