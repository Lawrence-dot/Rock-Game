import React, { useContext } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { HomeContext } from "./Home";
import { choosepaper } from "./todoslice";

function Paper(props) {
  const dispatch = useDispatch();
  const homecontext = useContext(HomeContext);

  return (
    <div className="papercontainer w-50">
      <div
        className="paper choosegame rounded-full"
        onClick={() => {
          props.pick && dispatch(choosepaper());
          props.pick && homecontext.pickgame("paper");
        }}
      >
        <img className="game-img" src={"./paper.svg"} alt="" />
      </div>
    </div>
  );
}

export default Paper;
