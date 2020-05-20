// src/components/Player.js
import React from "react";
import "./Player.scss";

export default function Player(props) {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };
  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {props.name} ({props.score})
        <button onClick={onClickIncrement}>increment</button>
      </p>
    </li>
  );
}
