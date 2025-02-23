import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import About from "./About";
import Projects from "./Projects";
import ProjectDrawings from "./ProjectDrawings";
import Contact from "./Contact";
import {Link} from 'react-router-dom'
export default function Home() {
  const typedElement = useRef(null); // Create a ref for the span element
  const typedInstance = useRef(null); // Store Typed instance for cleanup

  useEffect(() => {
    const options = {
      strings: [
        "Concept Planners",
        "Architects",
        "Interior Designers",
        "Structural Engineers",
        "Project Consultants",
        "Building Constructions",
        "Municipal Approvals",
        "Structural Engineers",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    // Initialize Typed.js
    typedInstance.current = new Typed(typedElement.current, options);

    // Cleanup function to destroy the instance when the component unmounts
    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div >
      <div className="container pt-3" style={{ height: "100vh", marginTop: "10%" }}>
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 d-flex align-items-center">
                  <div className="card-body">
                    <h5 className="card-title">VAASTU ARCHITECTURES</h5>
                    <p className="card-text">
                      We provide top-quality architectural designs, structural
                      engineering, and interior planning services. Our team ensures
                      excellence in every project.
                    </p>
                    {/* The typing effect will appear in this span */}
                    <div className="typing-class">
                      <span ref={typedElement}></span>
                    </div>
                    <Link className="btn btn-primary" to="/our-services">
                    Our Services
                    </Link>
                    
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/images/profile-main.jpg"
                    className="img-fluid rounded-end"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Projects/>
      <ProjectDrawings/>
      <Contact/>
    </div>
  );
}
