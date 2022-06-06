import GridSquare from "./GridSquare";

import './gridchart.css'

export default function GridChart(props) {

    // Generates the grid. Note that the dimensions are prespecified here. 
    // TODO - Implement dynamic sizing of chart based on screen size
    
    const grid = []
    for (let row = 0; row < 50; row ++) {
        grid.push([])
        for (let col = 0; col < 30; col ++) {
            grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
        }
    }

  // The components generated in makeGrid are rendered in div.grid-board

    return (
        <div className='grid-board'>
            {grid}
        </div>
        
    )
}