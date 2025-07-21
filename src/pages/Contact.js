export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-box">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have a question or just want to say hello? We’d love to hear from you.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

  