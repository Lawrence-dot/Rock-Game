import React, { useContext } from "react";
import { HomeContext } from "./Home";
import Scissors from "./Scissors";
import Rock from "./Rock";
import Paper from "./Paper";
import { useSelector } from "react-redux";

function Gameshow() {
  const homecontext = useContext(HomeContext);
  const chosen = useSelector((state) => state.Game.chosen);

  return (
    <div className="twoview hide flex" id="twoview">
      <div className="youpick" id="youpick">
        <span className={`w-50 `} id="youpik">
          {" "}
          You Picked
        </span>
        {chosen === "rock" ? (
          <Rock />
        ) : chosen === "paper" ? (
          <Paper />
        ) : (
          <Scissors />
        )}
      </div>

      <div className="housepick">
        <span>The House Picked</span>
        <div id="hsepick">
          {homecontext?.num === 0 ? (
            <Rock />
          ) : homecontext?.num === 1 ? (
            <Paper />
          ) : homecontext?.num === 2 ? (
            <Scissors />
          ) : (
            <div> Loading... </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gameshow;
