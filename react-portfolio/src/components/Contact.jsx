// src/components/Contact.jsx
import React, { useState } from 'react';

// Contact section with a form and validation for required fields and email format
const Contact = () => {
  // State to handle form data and validation errors
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Handle input changes and update form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle validation when the input field loses focus
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <section className="contact">
      <form>
        {/* Name input field */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* Email input field */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Message input field */}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        {/* Submit button */}
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
