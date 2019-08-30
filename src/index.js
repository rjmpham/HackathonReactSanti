import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./View/Game.js";
import Menu from "./View/Menu";

ReactDOM.render(
  <>
    <Game />
    <Menu />
  </>,
  document.getElementById('root')
);