
import React, { useState } from 'react';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, e.g., sending data to an API or using a service like EmailJS
    console.log(formData); // For now, we'll just log the data to the console
    // Reset form data
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <div className="_form_wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="formfield"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="formfield"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="formfield"
          ></textarea>

          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
