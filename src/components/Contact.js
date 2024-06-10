import React from 'react';

const Contact = () => (
  <section id="contact">
    <h2>Contact Us</h2>
    <p>If you have any questions or would like to learn more about our services, please get in touch.</p>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
