import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/CV.docx";
import "../styles/home.css";



const Home = () => {

  return (
    <>
      <div className="container-fluid home-container" id="home">

        <div className="container home-content">

          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React native developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>


          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=918999296121"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a className="btn btn-cv" href={Resume} download="Neel-CV">
              My Resume
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
