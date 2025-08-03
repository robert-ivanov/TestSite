import React from 'react';
import './ContactPage.css';

const ContactPage = () => (
  <section className="contact-page">
    <div className="contact-header">
      <h2>Contact Us</h2>
      <p>Reach out to us for project inquiries, consultations, or any assistance you need.</p>
    </div>

    <div className="contact-details">
      <div className="contact-box">
        <h3>Phone</h3>
        <p>+374 00 000 000</p>
      </div>
      <div className="contact-box">
        <h3>Email</h3>
        <p>info@example.com</p>
      </div>
      <div className="contact-box">
        <h3>Address</h3>
        <p>Yerevan, Armenia</p>
      </div>
    </div>
  </section>
);

export default ContactPage;
