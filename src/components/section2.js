import Img1 from "./imgs/me2.jpeg";

function Section2() {
  return (
    <div className="section2">
      <div className="header">
        <h4>Get To Know More</h4>
        <h1>About Me</h1>
      </div>

      <div className="sub-section">
        <div className="img2-div">
          <img src={Img1} alt="dp2" />
        </div>
        <div className="bio-two">
          <div className="edu-exp">
            <div className="fre--lanc">
              <i class="ri-medal-fill"></i>
              <h2>FreeLancer</h2>
              <h4>1+ Years Frontend Development</h4>
            </div>
            <div className="edu--nn">
              <i class="ri-group-fill"></i>
              <h2>Education</h2>
              <h4>B.Tech. Bachelor of Technology (UG) </h4>
            </div>
          </div>
          <div className="lorem---23">
            <p>
              "Unlock the power of exceptional freelance services! From
              captivating content to dynamic design, I deliver quality results
              that elevate your project. Let's collaborate and make your vision
              a reality!"
            </p>
          </div>
        </div>
      </div>
      <i class="ri-arrow-down-double-line"></i>
    </div>
  );
}

export default Section2;
