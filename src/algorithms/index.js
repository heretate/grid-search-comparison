import dijkstra from "./dijkstra"


export default function getAlgorithm(algorithmName) {
    /*
    Algorithm parameters should be of the form (grid, startSquare, endSquare) where
    startSquare and endSquare should be [row, col] pairs 
    */
    if (algorithmName === "dijkstra") {
        return dijkstra;
    }
    else {
        console.log("Unrecognized algorithm")
    }
}

