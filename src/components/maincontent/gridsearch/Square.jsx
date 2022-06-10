import './square.css'
import {useState } from 'react';
export default function Square(props) {

    const [isWall, setIsWall] = useState(false);

    const getVisited = (visitLeft, visitRight) => {
        const classType = `left-visited-${visitLeft}-right-visited-${visitRight}`;
        return classType;
    }

    const classType = props.isEnd
    ? 'end'
    : props.isStart
    ? 'start'
    : props.isWall
    ? 'wall'
    : getVisited(props.leftVisited, props.rightVisited)
    

    const classes = `grid-square ${classType}`
    return <button className={classes} id={`${props.row}-${props.col}`} onClick={props.handleClick} />
}