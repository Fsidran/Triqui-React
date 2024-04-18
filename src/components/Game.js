import React, { useState } from "react";
import { useContext } from "react";
import { SharedValueContext } from "../SharedValueContext";

const Game = () => {
  const initialGameState = {
    activeGamer: "X",
    table: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    numbP: 1,
    winner: "",
    partyF: false,
  };

  const { setVictoryX, setVictoryO } = useContext(SharedValueContext);
  const [gameState, setGameState] = useState(initialGameState);

  const changeGamer = () => {
    setGameState((prevState) => ({
      ...prevState,
      activeGamer: prevState.activeGamer === "X" ? "O" : "X",
    }));
  };

  const playCase = (row, col) => {
    const { table, activeGamer, numbP, winner, partyF } = gameState;

    if (partyF) {
      return;
    }

    if (table[row][col] === "") {
      const newTable = [...table];
      newTable[row][col] = activeGamer;

      setGameState((prevState) => ({
        ...prevState,
        table: newTable,
        numbP: prevState.numbP + 1,
      }));

      checkVictory(newTable);
      checkDraw();
      changeGamer();
    } else {
      alert("Esta caja ya está ocupada.");
    }
  };

  const checkVictory = (table) => {
    // Check lignes
    for (let row = 0; row < 3; row++) {
      if (
        table[row][0] !== "" &&
        table[row][0] === table[row][1] &&
        table[row][1] === table[row][2]
      ) {
        partyEnd(table[row][0]);
        return;
      }
    }

    // Check colonnes
    for (let col = 0; col < 3; col++) {
      if (
        table[0][col] !== "" &&
        table[0][col] === table[1][col] &&
        table[1][col] === table[2][col]
      ) {
        partyEnd(table[0][col]);
        return;
      }
    }

    // Check diagonales
    if (
      table[0][0] !== "" &&
      table[0][0] === table[1][1] &&
      table[1][1] === table[2][2]
    ) {
      partyEnd(table[0][0]);
      return;
    }
    if (
      table[0][2] !== "" &&
      table[0][2] === table[1][1] &&
      table[1][1] === table[2][0]
    ) {
      partyEnd(table[0][2]);
      return;
    }
  };

  const partyEnd = (winner) => {
    const { activeGamer } = gameState;
    let message = `El pirata ${winner} ganó !`;

    setGameState((prevState) => ({
      ...prevState,
      winner: message,
      partyF: true,
    }));

    if (winner === "X") {
      setVictoryX((prevVictoryX) => prevVictoryX + 1);
    } else {
      setVictoryO((prevVictoryY) => prevVictoryY + 1);
    }
  };

  const checkDraw = () => {
    const { numbP, winner } = gameState;
    if (numbP === 9 && winner.length === 0) {
      setGameState((prevState) => ({
        ...prevState,
        winner: "Empate...",
        partyF: true,
      }));
    }
  };

  const resetGame = () => {
    setGameState(initialGameState);
  };

  return (
    <div className="headcontainer">
      <h1 className="scintiller">¡Triqui!</h1>
      <div className="gamecontainer">
        <table className="table">
          <tbody>
            {gameState.table.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    onClick={() => playCase(rowIndex, colIndex)}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div id="message">{gameState.winner}</div>
      <button onClick={resetGame}>Reiniciar el juego</button>
    </div>
  );
};

export default Game;
