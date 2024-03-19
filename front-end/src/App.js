import React from "react";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Techstack from "./Pages/Techstack";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
// import WorkExp from "./Pages/WorkExp"

const App = () => {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        {/* <WorkExp /> */}
        <Contact />
      </div>
    </>
  );
};

export default App;
