import "./HomeView.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";

export const HomeView = () => {
  const history = useHistory();

  return (
    <div>
      <h1 className="title">Sengångaren – Ett gulligt men långsamt djur</h1>
      {/* <h2>1. Den tretåiga sengångaren simmar snabbare än den klättrar</h2> */}

      <img
        className="img"
        src="https://order.se/thumb/99231/620x0/972-1752_2.jpg"
        alt="sengångare"
      ></img>
    </div>
  );
};
