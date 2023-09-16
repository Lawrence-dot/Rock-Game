import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="About text-white">
      <div className="home-icon">
        {" "}
        <Link to="/">
          {" "}
          <FaHome />
        </Link>{" "}
      </div>
      <div className="aboutdiv">
        <span> This Game was Created for fun.</span>
      </div>
    </div>
  );
}

export default About;
