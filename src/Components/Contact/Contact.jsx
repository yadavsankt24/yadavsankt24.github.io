import React from "react";
import  { useRef } from 'react';
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_95cnbup', 'template_6rki5qa', form.current, '-H5W5acifWOh4bADo')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMailOutline className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>yadavsanket24@gmail.com</h5>
            <a href="mailto:yadavsanket24@gmaill.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>Connect</h5>
            <a
              href="https://m.me/profile.php?id=100004289590524"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon"/>
            <h4>Whatsaap</h4>
            <h5>+919033960887</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919033960887"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form}onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};
