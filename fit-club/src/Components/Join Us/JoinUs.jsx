import React from "react";
import "../Join Us/JoinUs.css";
import emailjs from '@emailjs/browser'
import { useRef } from "react";


const JoinUs = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1yhl12h', 'template_l7824az', form.current, 'QRo0vKg59TQJyaRHf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert("Check Your Email")
  };
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
          <input type="text" name="user_email" placeholder="Enter Your Email Address" />
          <button className="btn j-btn">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
