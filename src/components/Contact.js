import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3zov5b",
        "template_19mjp4e",
        form.current,
        "L4s6izzbLRxd9T3hC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="featured-titles">Contact</div>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="field-group">
            <div className="field">
              <label htmlFor="user_name">Name</label>
              <input type="text" id="user_name" name="user_name" />
            </div>
            <div className="field">
              <label htmlFor="user_email">Email</label>
              <input type="email" id="user_email" name="user_email" />
            </div>
          </div>

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
