// ContactSection.js
import React, { useState } from 'react';
import './ContactSection.css'; // Make sure to create and link the CSS file for styling

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, perhaps using a service like EmailJS or a backend API
    console.log('Submitted:', { name, email, message });
  };

  return (
    <section className="contact-section">
      <div className="contact-info">
        <h1>CONTACT</h1>
        <h2>yarijeytecher@gmail.com</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactSection;

