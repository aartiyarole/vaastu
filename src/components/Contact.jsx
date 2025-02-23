import React, { useState, useRef } from "react";

const Contact = () => {
  const toastRef = useRef(null);
  const [contactFormValues, setContactFormValues] = useState({
    name: "",
    contact: "",
    email: "",
    body: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [onSubmit, setOnSubmit] = useState(false);

  const personalDetails = {
    name: "Tarun Kumar",
    phone: "+918519899408",
    email: "vaasturassociates@gmail.com",
    address: "Dilsukhnagar, Hyderabad",
  };

  const alertColor = alertMessage.includes("successfully")
    ? { color: "green" }
    : { color: "red" };

  const hideAlert = () => {
    setTimeout(() => setShowAlert(false), 5000);
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    setOnSubmit(true);
    let formData = new FormData();
    formData.append("name", contactFormValues.name);
    formData.append("contact", contactFormValues.contact);
    formData.append("email", contactFormValues.email);
    formData.append("body", contactFormValues.body);
    formData.append("access_key", "e883f516-1592-4362-9c57-fb1b3bd55f5e");
    formData.append("subject", "Email Support From Your Site");
    formData.append("from_name", "Contact Notification");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error();
      setAlertMessage("Email sent successfully!");
      setContactFormValues({ name: "", contact: "", email: "", body: "" });
    } catch (err) {
      setAlertMessage("Something went wrong, try again later!");
    }

    setOnSubmit(false);
    setShowAlert(true);
    hideAlert();
  };

  return (
    <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" ,marginTop:"5%"}}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "20px" }}>
          Contact Us
        </h2>

        <div style={{ display: "flex",flexDirection:"column" ,justifyContent: "space-between" ,alignItems:"center"}}>
          {/* Left Column */}
          <div style={{ width: "100%" }}>
            <h3>Get in Touch</h3>
            <p><strong>Name:</strong> {personalDetails.name}</p>
            <p><strong>Phone:</strong> {personalDetails.phone}</p>
            <p><strong>Email:</strong> {personalDetails.email}</p>
            <p><strong>Address:</strong> {personalDetails.address}</p>
          </div>

          {/* Right Column */}
          <div style={{ width: "100%" }}>
            <h3>Message me</h3>
            <form onSubmit={submitEmail}>
              <input
                type="text"
                name="name"
                value={contactFormValues.name}
                onChange={(e) => setContactFormValues({ ...contactFormValues, name: e.target.value })}
                placeholder="Name"
                required
                style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "20px" }}
              />
              <input
                type="phone"
                name="contact"
                value={contactFormValues.contact}
                onChange={(e) => setContactFormValues({ ...contactFormValues, contact: e.target.value })}
                placeholder="Phone Number"
                required
                style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "20px" }}
              />
              <input
                type="email"
                name="email"
                value={contactFormValues.email}
                onChange={(e) => setContactFormValues({ ...contactFormValues, email: e.target.value })}
                placeholder="Email"
                style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "20px" }}
              />
              <textarea
                name="body"
                value={contactFormValues.body}
                onChange={(e) => setContactFormValues({ ...contactFormValues, body: e.target.value })}
                placeholder="Message.."
                required
                style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "20px" }}
              ></textarea>
              {showAlert && <p style={alertColor}>{alertMessage}</p>}
              <button
                type="submit"
                disabled={onSubmit}
                style={{
                  background: "#0056b3",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                {onSubmit ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;