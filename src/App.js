import React from "react";
import "./App.scss";
import Scoreboard from "./components/Scoreboard/ScoreBoard";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
