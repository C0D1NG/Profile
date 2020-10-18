import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <form name="contact-form" data-netlify="true" method="POST">
        <label className="text-dark">Name:</label>
        <input
          type="text"
          name="name"
          onChange={updateInput}
          value={formData.name || ''}
          autoFocus
        />
        <label className="text-dark">Email:</label>
        <input
          type="email"
          name="email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        <label className="text-dark">Message:</label>
        <textarea
          type="text"
          name="message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm