import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-form-box">
        <h2>📬 Contact Us</h2>
        <p>We’d love to hear your feedback, suggestions, or wine thoughts!</p>
  
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
  
          {error && <p className="error">{error}</p>}
          {submitted && <p className="success">Message sent successfully! 🍷</p>}
  
          <button type="submit">Send Message</button>
        </form>
  
        <div className="contact-info">
          <h3>📞 Get in Touch</h3>
          <ul>
            <li><strong>Email:</strong> support@winepairing.com</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Address:</strong> 123 Vineyard Lane, Nashik, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
  
}

export default Contact;
