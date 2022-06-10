import React, { useState } from "react";
import Board from "./Board";
import NavBar from "./NavBar";
import getAlgorithm from "../../../algorithms/index.js"

import "./game.css"

const ROW_LEN = 28;
const COL_LEN = 40;
const HORIZONTAL_OFFSET = 7

let root = document.documentElement;
root.style.setProperty('--cols', COL_LEN);

const START_SQUARE_ROW = Math.floor(ROW_LEN / 2);
const START_SQUARE_COL = HORIZONTAL_OFFSET - 1;
const FINISH_SQUARE_ROW = Math.floor(ROW_LEN / 2);
const FINISH_SQUARE_COL = COL_LEN - HORIZONTAL_OFFSET;


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
  /*
  Initializes the dictionary that describes the square. prevNode and distance together keep track of shortest path to node.
  */
  return {
    row: row,
    col: col,
    isStart: row === START_SQUARE_ROW && col === START_SQUARE_COL,
    isEnd: row === FINISH_SQUARE_ROW && col === FINISH_SQUARE_COL,
    isWall: false,
    leftVisited: false,
    rightVisited: false,
    prevSquare: null,
    distance: Infinity
  };
};

const animateAlgorithm = (searchSequence) => {
  for (let i = 0; i < searchSequence.length; i++) {
    const square = searchSequence[i];
    if (((square.row === START_SQUARE_ROW) && (square.col === START_SQUARE_COL)) || 
    ((square.row === FINISH_SQUARE_ROW) && (square.col === FINISH_SQUARE_COL))) {
      continue;
    }
    console.log(i);
    setTimeout(() => {
      document.getElementById(`${square.row}-${square.col}`).className =
        'grid-square left-visited-true-right-visited-false';
    }, i * 10);
  }
}

const animateShortestPath = (pathSequence) => {

}


export default function Game() {

    const [grid, setGrid] = useState(initializeGrid());
    const [algorithm, setAlgorithm] = useState("dijkstra");

    const clickAlgorithm = (algo) => {
      setAlgorithm(algo);
    }

    const clickGo = () => {
      const algoFn = getAlgorithm("dijkstra");
      const [newGrid, visitSequence, shortestPath] = algoFn(grid, [START_SQUARE_ROW, START_SQUARE_COL], [FINISH_SQUARE_ROW, FINISH_SQUARE_COL]);
      animateAlgorithm(visitSequence, setGrid, newGrid);
      animateShortestPath(shortestPath);
      /* setGrid(newGrid); */
    }

    
    const updateSquare = (row, col, squareState) => {
      const newGrid = grid.slice();
      newGrid[row][col] = squareState;
      setGrid(newGrid);
    }

    const clickWall = (row, col) => {
      const squareState = grid[row][col];
      const newSquareState = {
        ...squareState,
        isWall: !squareState.isWall,
      }
      updateSquare(row, col, newSquareState)
      if (newSquareState.isWall) {
        document.getElementById(`${row}-${col}`).className = 'grid-square wall';
      }
      else
      {
        document.getElementById(`${row}-${col}`).className = 'grid-square left-visited-false-right-visited-false';
      }
      
      
    }

    return (
      <div className="game">
        <NavBar clickAlgo={clickAlgorithm} clickGo={clickGo}/>
        <Board grid={grid} rowLength={ROW_LEN} colLength={COL_LEN} handleClick={clickWall}/>
      </div>
    )
  }
  