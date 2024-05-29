import Img1 from "./imgs/me1.jpeg";

function Section1() {
  const handleContactClick = (e) => {
    e.preventDefault();
    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="section1">
      <div className="img-div">
        <img src={Img1} alt="dp" />
      </div>
      <div className="bio">
        <h4>Hello,I'm</h4>
        <h1>Ajay Goud</h1>
        <h2>Frontend Developer</h2>
        <div className="btn-dc">
          <a href="#3">Download Resume</a>
          <a href="#5" onClick={handleContactClick}>
            Contact Info
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/JayGoud7?tab=repositories">
            <i class="ri-github-fill"></i>
          </a>
          <a href="https://www.linkedin.com/in/ajay-b-606630266/">
            <i class="ri-linkedin-box-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section1;
