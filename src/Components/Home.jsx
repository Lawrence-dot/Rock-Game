import React, { createContext, useEffect, useState } from "react";
import "../Styles/Home.css";
import Score from "./Score";
import GameView from "./GameView";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HomeContext = createContext();

function Home() {
  const [score, setscore] = useState(0);
  const [lives, setlives] = useState(3);
  const [num, setnum] = useState(0);
  const correct = new Audio("./positive.mp3");
  const wrong = new Audio("./negative.mp3");
  const end = new Audio("./beep.mp3");

  useEffect(() => {
    const end = new Audio("./beep.mp3");
    lives < 1 &&
      (() => {
        document.getElementById("youlose").classList.remove("hide");
        document.getElementById("restart").classList.remove("hide");
        end.play();
        document.getElementById("playagain").classList.add("hide");
      })();
  }, [lives]);

  useEffect(() => {
    localStorage.getItem("highscore") < score &&
      localStorage.setItem("highscore", score);
  }, [score]);

  const pickgame = (chosen) => {
    document.getElementById("threeview")?.classList.add("hide");
    document.getElementById("twoview")?.classList.remove("hide");
    let rnd = Math.floor(Math.random() * 3);
    let youpik = document.getElementById("youpik");

    setnum(4);
    youpik.style.color = "white";
    setTimeout(() => {
      setnum(rnd);
      if (
        (chosen === "rock" && rnd === 2) ||
        (chosen === "paper" && rnd === 0) ||
        (chosen === "scissors" && rnd === 1)
      ) {
        youpik.style.color = "green";
        correct.play();
        setscore(score + 1);
      } else if (
        (chosen === "rock" && rnd === 1) ||
        (chosen === "paper" && rnd === 2) ||
        (chosen === "scissors" && rnd === 0)
      ) {
        youpik.style.color = "red";
        wrong.play();
        score >= 0 ? setlives(lives - 1) : youlose();
      } else if (
        (chosen === "rock" && rnd === 0) ||
        (chosen === "paper" && rnd === 1) ||
        (chosen === "scissors" && rnd === 2)
      ) {
        youpik.style.color = "orange";
        correct.play();
      }
    }, 1700);

    document.getElementById("playagain").classList.remove("hide");
  };

  const playagain = () => {
    if (lives > 0) {
      pickview();
      document.getElementById("playagain").classList.remove("hide");
    } else {
      youlose();
    }
  };

  const pickview = () => {
    document.getElementById("threeview").classList.remove("hide");
    document.getElementById("twoview").classList.add("hide");
  };

  const youlose = () => {
    document.getElementById("youlose").classList.remove("hide");
    document.getElementById("restart").classList.remove("hide");
    end.play();
    document.getElementById("playagain").classList.add("hide");
  };

  const restart = () => {
    pickview();
    setscore(0);
    setlives(3);
    document.getElementById("restart").classList.add("hide");
    document.getElementById("youlose").classList.add("hide");
  };

  const toggleRules = () => {
    document.getElementById("rules").classList.toggle("hide");
  };

  return (
    <HomeContext.Provider value={{ pickgame, num, score, toggleRules, lives }}>
      <div className="Rulesmodal hide" id="rules">
        <div className="info">
          <span> Rules </span>
        </div>
      </div>
      <div className="highscoremodal hide" id="highscore">
        <div className="info">
          <span> New High Score!! </span>
        </div>
      </div>
      <div className="Home pop">
        <div className="mainarea">
          <div className="home-icon">
            {" "}
            <Link to="/">
              {" "}
              <FaHome />
            </Link>{" "}
          </div>
          <Score />
          <GameView />
          <div
            className="next flex hide text-white"
            id="playagain"
            onClick={playagain}
          >
            Next
          </div>
          <div className="youlose hide" id="youlose">
            {" "}
            Game Over 😢{" "}
          </div>
          <div className="restart hide" id="restart">
            <button onClick={restart}> Restart </button>
          </div>
          {/* <div className="rules flex">
            <span onClick={toggleRules}> Rules </span>
          </div> */}
        </div>
      </div>
    </HomeContext.Provider>
  );
}

export default Home;
