import React, { useContext } from "react";
import { useDispatch } from "react-redux/es/exports";
import { HomeContext } from "./Home";
import { chooserock } from "./todoslice";

function Rock(props) {
  const homecontext = useContext(HomeContext);
  const dispatch = useDispatch();

  return (
    <div className="rockcontainer w-50">
      <div
        className="rock choosegame rounded-full"
        onClick={() => {
          props.pick && dispatch(chooserock());
          props.pick && homecontext.pickgame("rock");
        }}
      >
        <img className="game-img" src={"./rock.svg"} alt="" />
      </div>
    </div>
  );
}

export default Rock;
