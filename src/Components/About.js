import React from "react";

export default function About(props) {
  const aboutstyle = {
    backgroundColor: props.mode === "dark" ? "#333333" : "white",
    color: props.mode === "dark" ? "white" : "#333333",
  };

  return (
    <div classNameName="container" style={aboutstyle}>
      <h1 classNameName="my-3">About us</h1>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={aboutstyle}
      >
        <div className="accordion-item" style={aboutstyle}>
          <h2 className="accordion-header" style={aboutstyle}>
            <button
              style={aboutstyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Front-End Developer
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              As a fresher front-end designer, I bring skills in React, React
              Native, HTML, CSS, and JavaScript to create engaging web
              experiences. For instance, I can use React to build dynamic user
              interfaces, React Native to develop cross-platform mobile apps,
              and leverage HTML and CSS for structuring and styling content.
              With JavaScript, I enhance interactivity and functionality,
              ensuring seamless user interactions. By integrating these skills,
              I can design and upload websites that are not only visually
              appealing but also highly functional and responsive across
              different devices, offering users an intuitive and enjoyable
              browsing experience.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={aboutstyle}>
          <h2 className="accordion-header" style={aboutstyle}>
            <button
              style={aboutstyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Contact
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Jeevan s <br />
              jeevan636097@gmail.com <br />
              Devarahalli lakya post, Chikmagalur, India, 577168.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={aboutstyle}>
          <h2 className="accordion-header" style={aboutstyle}>
            <button
              style={aboutstyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Links
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Github: https://github.com/JeevanS33 <br />
              Linkedin: https://www.linkedin.com/in/jeevan-s-669105239
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
