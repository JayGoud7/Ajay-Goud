import { useState } from "react";

function NavBar() {
  const [first, second] = useState(false);

  const handleClick = () => {
    return second(!first);
  };

  const handleClick2 = () => {
    return second(false);
  };

  const handleProjectClick = (e) => {
    e.preventDefault();
    handleClick();
    document.querySelector(".pr-header").scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    handleClick();
    document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    handleClick();
    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav2">
      <div>
        <h2>Ajay Goud</h2>
      </div>
      <div>
        <i
          onClick={handleClick}
          className={`ri-menu-3-line ${
            first ? "ri-menu-3-line .visible" : " "
          }`}
        ></i>
      </div>
      <div className={`menu ${first ? "visible" : ""}`}>
        <i onClick={handleClick2} className=" ri-close-fill"></i>
        <a href="#1" onClick={handleAboutClick}>
          About
        </a>

        <a href=".pr-header" onClick={handleProjectClick}>
          Projects
        </a>

        <a href="#3" onClick={handleContactClick}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
