import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaPersonBooth, FaSchool } from "react-icons/fa";

function Homepage() {
  return (
    <div className="homepage pop">
      <div className="homepagemenu">
        <div className="logo">
          <img src="./game.jpg" alt="logo" />
        </div>
        <div className="flex gamemenu flex-col">
          <div className="flex gameli">
            <Link to="/Home">
              <FaGamepad className="mt-1 " color="white" />
              <span>New Game </span>
            </Link>
          </div>
          <div className="flex gameli">
            <Link to="/HighScore">
              <FaPersonBooth className="mt-1 " color="white" />
              <span>High Scores </span>
            </Link>
          </div>
          <div className="flex gameli">
            <Link to="/About">
              <FaSchool className="mt-1 " color="white" />
              <span> About Game </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
