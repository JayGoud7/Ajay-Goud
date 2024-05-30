function NAV() {
  const handleProjectClick = (e) => {
    e.preventDefault();

    document.querySelector(".pr-header").scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = (e) => {
    e.preventDefault();

    document.querySelector(".section2").scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = (e) => {
    e.preventDefault();

    document.querySelector(".footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav-bar">
      <h2>Ajay Goud</h2>

      <ul>
        <li>
          <a href="#2" onClick={handleAboutClick}>
            About
          </a>
        </li>
        <li>
          <a href="#2" onClick={handleProjectClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#3" onClick={handleContactClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NAV;
