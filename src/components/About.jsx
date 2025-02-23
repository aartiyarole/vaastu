import React, { useEffect } from "react";
import Typed from "typed.js";


export default function About() {
  useEffect(() => {
    const options = {
      strings: [
        "Concept Planners",
        "Structural Engineers",
        "Project Consultants",
        "Building Constructors",
        "Interior Designers",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(".typing", options);

    return () => {
      typed.destroy();
    };
  }, []);

  const containerStyle = {
    height: "100vh",
    marginTop: "5rem"
  };

  const typingStyle = {
    fontSize: "1.5rem",
    color: "red",
    fontFamily: "Roboto, sans-serif"
  };

  return (
    <div style={containerStyle} className="container ">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="card">
            <div className="row g-0">
              {/* Right Section - Image */}
              <div className="col-md-6">
                <img
                  src="assets/images/aboutme.jpg"
                  className="img-fluid rounded-end"
                  alt=""
                />
              </div>
              {/* Left Section - Text */}
              <div className="col-md-6 d-flex justify-content-center text-center align-items-center">
                <div className="card-body">
                  <h2 className="card-title">About Me</h2>
                  <p className="card-text">
                    We provide top-quality architectural designs, structural
                    engineering, and interior planning services. Our team ensures
                    excellence in every project.
                  </p>
                  <div style={typingStyle} className="typing-class">
                    <span className="typing"></span>
                  </div>
                  <a href="/Visiting Card.pdf" download target="_blank" className="btn btn-primary">Visiting Card</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
