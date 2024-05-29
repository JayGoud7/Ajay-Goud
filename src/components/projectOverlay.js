function Overlay({ photo, text1, text2, P, P1, href1, href2 }) {
  return (
    <section className="project-overlay">
      <div className="img3-div">
        <img src={photo} alt="project-1" />
      </div>
      <h2>
        {text1}
        {text2}
      </h2>
      <p>
        {P}
        {P1}
      </p>
      <div className="btn-clk">
        <a href={href1}>Github</a>
        <a href={href2}>Live Demo</a>
      </div>
    </section>
  );
}

export default Overlay;
