import React from "react";

function ContactForm() {
  // JSX
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        {/* name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        {/* email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        {/* message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <input type="text" name="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
