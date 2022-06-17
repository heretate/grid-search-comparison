import './square.css'
export default function Square(props) {

    const getVisited = (visitLeft, visitRight) => {
        const classType = `left-visited-${visitLeft}-right-visited-${visitRight}`;
        return classType;
    }

    const classType = props.isEnd
    ? 'end-default'
    : props.isStart
    ? 'start-default test'
    : props.isWall
    ? 'wall'
    : getVisited(props.leftVisited, props.rightVisited)

    const handleClick = () => {
        props.handleClick(props.row, props.col);
    }
    

    const classes = `grid-square ${classType}`
    return <button className={classes} id={`${props.row}-${props.col}`} onClick={handleClick} />
}