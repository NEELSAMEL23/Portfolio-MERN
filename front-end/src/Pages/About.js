import React from "react";
import "../styles/About.css";
import profile from "../assets/img/profile.jpg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-5 col-xl-5 col-lg-5 col-xs-12 about-img">
            <img src={profile} alt="profile_pic" />
          </div>
          <div className="col-md-7 col-xl-7 col-lg-7 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Hello there! I'm Neel Samel, a Full Stack Developer based in
              Mumbai. <br /> Passionate Mern Stack Development. <br /> <br />
              I’m a fresher & looking for the opportunities to work & grow
              professionally. I approach each project with a blend of
              creativity, dedication, and attention to detail. <br /> <br /> I'm
              excited about the opportunity to start my career as a Full Stack
              Developer. If you're interested in collaborating or have any
              inquiries, feel free to connect with <br />{" "}
              <b> me : neelsamel108@gmail.com </b>
              <br /> <br />
              Thank you for taking the time to learn a bit about me. Let's
              connect and create something amazing together! <br /> <br />
              Warm regards,
              <br /> Neel A. Samel
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
