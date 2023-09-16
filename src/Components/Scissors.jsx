import React, { useContext } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { HomeContext } from "./Home";
import { choosescissors } from "./todoslice";

function Scissors(props) {
  const dispatch = useDispatch();
  const homecontext = useContext(HomeContext);
  return (
    <div className="scissorscontainer w-50">
      <div
        className="scissors choosegame rounded-full"
        onClick={() => {
          props.pick && dispatch(choosescissors());
          props.pick && homecontext.pickgame("scissors");
        }}
      >
        <img className="game-img" src={"./scissors.svg"} alt="" />
      </div>
    </div>
  );
}

export default Scissors;
