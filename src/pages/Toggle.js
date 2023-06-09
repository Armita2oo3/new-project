import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Night from "./Night";
import Day from "./Day";
export default function Toggle(props) {
  const [dark, setDark] = useState(false);

  function changeBlack() {
    document.body.style.backgroundColor = "#121212";

    setDark(true);
  }

  function changeWhite() {
    document.body.style.backgroundColor = "white";

    setDark(false);
  }

  if (dark) {
    return (
      <span className="home">
        <button className="day" onClick={changeWhite}>
          🌕
        </button>
        <Day />
      </span>
    );
  } else {
    return (
      <span className="home">
        <button className="night" onClick={changeBlack}>
          🌑
        </button>
        <Night />
      </span>
    );
  }
}
