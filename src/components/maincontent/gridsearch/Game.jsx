import React, { useState } from "react";
import Board from "./Board";
import NavBar from "./NavBar";

import "./game.css"

const ROW_LEN = 28;
const COL_LEN = 40;


let root = document.documentElement;
root.style.setProperty('--cols', COL_LEN);

const START_SQUARE_ROW = Math.floor(ROW_LEN / 2);
const START_SQUARE_COL = 7;
const FINISH_SQUARE_ROW = Math.floor(ROW_LEN / 2);
const FINISH_SQUARE_COL = COL_LEN - 7;

const initializeGrid = () => {
  const grid = [];
  for (let row = 0; row < ROW_LEN; row++) {
    const currentRow = [];
    for (let col = 0; col < COL_LEN; col++) {
      currentRow.push(createSquare(row, col));
    }
    grid.push(currentRow);
  }
  return grid;
}

const createSquare = (row, col) => {
  return {
    isStart: row === START_SQUARE_ROW && col === START_SQUARE_COL,
    isEnd: row === FINISH_SQUARE_ROW && col === FINISH_SQUARE_COL,
    isWall: false,
    leftVisited: false,
    rightVisited: false
  };
};

export default function Game() {

    const [grid, setGrid] = useState(initializeGrid());


    return (
      <div className="game">
        <NavBar/>
        <Board grid={grid} rowLength={ROW_LEN} colLength={COL_LEN} />
      </div>
    )
  }
  