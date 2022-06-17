const euclideanDistance = (x1, x2, y1, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

const manhattanDistance = (x1, x2, y1, y2) => {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1) 
}

const heuristicMapping = {
    "euclidean" : euclideanDistance,
    "manhattan": manhattanDistance,
}
export default function getHeuristic(heuristicName) {
    if (heuristicName in heuristicMapping) {
        return heuristicMapping[heuristicName]
    }
    else {
        console.log(`Unrecognized heuristic ${heuristicName}`)
    }
}