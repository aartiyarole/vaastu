import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
  return (
    <section className="my-5">
    <div className="container">
      <h2 className="text-center mb-2">Our Projects</h2>
      <p className="text-center md-3 container-content">
        View our projects we have worked on.
      </p>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {[
            "assets/ourProjects/img1.jpg",
            "assets/ourProjects/img2.webp",
            "assets/ourProjects/img3.jpg",
            "assets/ourProjects/img4.jpg",
            "assets/ourProjects/img5.jpg",
            "assets/ourProjects/img7.jpg",
          ].map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={`${image}`}
                className="d-block w-100 h-100 project-img"
                alt={`Project ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </section>
  );
}
