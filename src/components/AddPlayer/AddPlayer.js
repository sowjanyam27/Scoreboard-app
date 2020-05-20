// src/components/AddPlayerForm.js
import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  const nameHandler = (event) => {
    set_name(event.target.value); //set the name
  };
  const addPlayer = () => {
    props.addPlayer(name); // send the name back to parent using props
    set_name(""); // After adding name set the name to null
  };
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          onChange={nameHandler}
          type="text"
          placeholder="Name"
          value={name}
        />{" "}
        <button onClick={addPlayer}>Add</button>
      </p>
    </div>
  );
}
