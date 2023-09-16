import React from "react";
import Rock from "./Rock";
import Scissors from "./Scissors";
import Paper from "./Paper";
import Gameshow from "./Gameshow";

function GameView() {
  return (
    <div className="GameView">
      <div className="Game">
        <div className="threeview flex spin" id="threeview">
          <Rock pick />
          <Paper pick />
          <Scissors pick />
        </div>
        <Gameshow />
      </div>
    </div>
  );
}

export default GameView;
