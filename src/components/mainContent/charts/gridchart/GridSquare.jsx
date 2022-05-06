import './gridsquare.css'

export default function GridSquare(props) {
    const classes = `grid-square square-color-${props.color}`
    return <div className={classes} />
}