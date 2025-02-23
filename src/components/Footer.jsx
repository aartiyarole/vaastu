import React from "react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/+918519899408", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/vaastu.r_quantum?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
  };

  return (
    <footer className="text-center footer bg-dark text-white py-3">
      <div>
        Vaastu.R. Associates <i className="far fa-copyright"></i>
        <span> 2025 All rights reserved.</span>
      </div>
      <div className="footer-icons my-3">
        <i
          className="fa-brands fa-whatsapp icon mx-2"
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={openWhatsApp}
        ></i>
        <i
          className="fa-brands fa-instagram icon mx-2"
          style={{ fontSize: "30px", cursor: "pointer" }}
          onClick={openInstagram}
        ></i>
      </div>
    </footer>
  );
};

export default Footer;
