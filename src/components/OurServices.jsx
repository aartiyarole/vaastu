import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OurServices() {
  const cardStyle = {
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  };

  const cardBodyStyle = {
    transition: "transform 0.3s ease-in-out",
  };

  const cardHoverStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
  };

  const cardBodyHoverStyle = {
    transform: "translateY(-5px)",
  };

  const iconHoverStyle = {
    color: "#fff",
  };

  const containerContentStyle = {
    fontWeight: "bold",
  };

  const containerStyle = {
    height: "100vh",
    paddingTop:"100px",
    
  };

  return (
    <>
    <section id="services" style={containerStyle} className="services container mb-5" >
      <h2 className="text-center mb-2">Our Expertise</h2>
      <p className="text-center md-3" style={containerContentStyle}>
        We provide innovative planning solutions to create efficient and functional building designs.
      </p>
      <div className="row">
        {[
          { icon: "fas fa-drafting-compass", title: "Concept Planning", text: "We provide innovative planning solutions to create efficient and functional building designs." },
          { icon: "fas fa-pencil-ruler", title: "Architectural Design", text: "Our expert architects design structures that blend aesthetics with functionality." },
          { icon: "fas fa-couch", title: "Interior Design", text: "Transform your spaces with our creative interior design solutions tailored to your needs." },
          { icon: "fas fa-hard-hat", title: "Structural Engineering", text: "We ensure the safety and durability of structures with our expert engineering solutions." },
          { icon: "fas fa-handshake", title: "Project Consulting", text: "Get professional guidance for your construction projects, from planning to execution." },
          { icon: "fas fa-coins", title: "Loan Estimates", text: "We help you estimate costs and navigate financial planning for your construction needs." },
          { icon: "fas fa-hammer", title: "Building Constructions", text: "Our team builds high-quality residential and commercial structures with precision." },
          { icon: "fas fa-city", title: "Municipal Approvals", text: "We assist in obtaining necessary approvals and clearances for hassle-free project execution." },
          { icon: "fas fa-home", title: "Residential Constructions", text: "We specialize in building high-quality homes that provide comfort and long-term value." },
        ].map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-center h-100 shadow-sm" style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = cardHoverStyle.backgroundColor;
                e.currentTarget.style.color = cardHoverStyle.color;
                e.currentTarget.querySelector("i").style.color = iconHoverStyle.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
                e.currentTarget.style.color = "";
                e.currentTarget.querySelector("i").style.color = "#007bff";
              }}>
              <div className="card-body" style={cardBodyStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = cardBodyHoverStyle.transform }
                onMouseLeave={(e) => e.currentTarget.style.transform = ""}>
                <i className={`${service.icon} fa-3x mb-3 text-primary`}></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
