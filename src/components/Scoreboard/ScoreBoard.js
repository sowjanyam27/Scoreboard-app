// src/components/Scoreboard.js
import React, { useState, useEffect } from "react";
import Player from "../Player/Player";
import AddPlayerForm from "../AddPlayer/AddPlayer";
import "./ScoreBoard.scss";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sort_by, set_sort_by] = useState("score"); //default sorting is by score

  // sorting by score
  function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
  }

  // sorting by name
  function compare_name(player_a, player_b) {
    return ("" + player_a.name).localeCompare(player_b.name);
  }

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };

  //incrementing the score for the particulr id
  const incrementScore = (event) => {
    const id = event;
    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    set_players(new_players_array);
  };

  //resetting the score to zero for all the players
  function resetScore() {
    const new_players_array = players.map((player) => {
      return {
        ...player,
        score: 0,
      };
    });
    set_players(new_players_array);
  }

  // randomscore will be displayed when random button is pressed
  function randomScore() {
    const new_players_array = players.map((player) => {
      return {
        ...player,
        score: Math.floor(Math.random() * 20),
      };
    });
    set_players(new_players_array);
  }

  // adding player by creating new-id
  const addPlayer = (name) => {
    const new_players_array = [...players];
    new_players_array.push({
      id: new_players_array.length + 1,
      name: name,
      score: 0,
    });
    set_players(new_players_array);
  };

  //check the sorting order and sort according before every render
  sort_by === "score"
    ? players.sort(compare_score)
    : players.sort(compare_name);

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button onClick={resetScore}>Reset</button>
        <button onClick={randomScore}>Randomize</button>
      </p>
      <h1>Player's Score</h1>
      <ul>
        {players.map((player) => (
          <Player
            key={player.id}
            name={player.name}
            score={player.score}
            id={player.id}
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
