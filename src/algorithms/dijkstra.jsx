import PriorityQueue from "../helpers/PriorityQueue.js"


const UP = [0, 1];
const DOWN = [0, -1];
const LEFT = [-1, 0];
const RIGHT = [1, 0]; 

export default function dijkstra(grid, startSquare, endSquare) {
    /*
    startSquare and endSquare should be [row, col] pairs 
    */
    const comparator = (a, b) => a[0] < b[0];
    const frontier = new PriorityQueue(comparator);

    const newGrid = structuredClone(grid);
    const visitSequence = [];

    const getShortestPath = (finishedGrid) => {
        let arr = [];
        let currentSquare = finishedGrid[endSquare[0]][endSquare[1]];
        while (!currentSquare.isStart) {
            arr.push(currentSquare);
            currentSquare = currentSquare.prevSquare;
        }
        arr.push(currentSquare);
        return arr.reverse();
    }
    frontier.push([0, newGrid[startSquare[0]][startSquare[1]]]);
    while (frontier.size() > 0) {
        const [priority, currentSquare] = frontier.pop();
        const [row, col] = [currentSquare.row, currentSquare.col];

        if (currentSquare.leftVisited) {
            continue;
        }
        currentSquare.leftVisited = true;
        visitSequence.push(currentSquare);
        if (currentSquare.isEnd){
            return [newGrid, visitSequence, getShortestPath(newGrid)];
        }

        /*
        Increment frontier
        */
        for (let [i, j] of [UP, DOWN, LEFT, RIGHT]) {
            if (((row+i < 0) || (row+i > newGrid.length - 1)) || ((col + j < 0) || (col + j > newGrid[0].length - 1))) {
                continue
            }
            let square = newGrid[row+i][col+j];
            if (!(square.leftVisited || square.isWall)) {
                square.distance = priority+1;
                square.prevSquare = currentSquare;
                frontier.push([priority+1, square]);

            }
        } 
    }

    /*
    Reach here if no path is available.
    */
    return [newGrid, visitSequence, []];


    



}