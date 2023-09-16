import React, { useContext } from "react";
import { HomeContext } from "./Home";

function Score() {
  const homecontext = useContext(HomeContext);
  // console.log(setscore());
  return (
    <div className="score flex rounded-md text-white">
      <div className="scorename flex flex-col">
        <span>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </span>
      </div>

      <div className="scoredash livesdash flex flex-col">
        <span className="scoretext">Lives</span>
        <span
          className={`scorenum ${
            homecontext.lives <= 1 ? "text-red" : "text-green"
          }`}
        >
          {" "}
          {homecontext.lives}{" "}
        </span>
      </div>

      <div className="scoredash flex flex-col">
        <span className="scoretext">Score</span>
        <span className={`scorenum ${homecontext.score > 10 && "text-green"}`}>
          {" "}
          {homecontext.score}{" "}
        </span>
      </div>
    </div>
  );
}

export default Score;
