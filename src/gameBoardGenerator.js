/**
 *  this function programatically renders a button grid of various size depending on props sent
 * @param {integer} height - the height of the grid, or how many buttons vertically
 * @param {integer} length - the length of the grid, or how many buttons horizontally
 */

function GameBoardGenerator(dimensions) { 
    function reveal(e) {
        //e.preventDefault();
        e.target.className = "tileButtonFilled tileButton";
        e.target.disabled = true;
    }
    if (dimensions.height > 51 || dimensions.length > 51) {
        return(<div />);
    }
    let entireGrid = [];
    for (let i = 0; i < dimensions.height; i++) {
        let row = [];
        for (let j = 0; j < dimensions.length; j++) {
            row.push(<button onClick={reveal} className="tileButtonDefault tileButton"> </button>);
        }
        entireGrid.push(row);
    }
    console.log(dimensions.height);
    const style = {
        display: "grid",
        gridTemplate: `repeat(${dimensions.height}, 1fr) / repeat(${dimensions.length}, 1fr)`,
    };
    console.log(style.gridTemplate);

    return (
        <div className="gameBoard" style={style}>
            {entireGrid}
        </div>
    );
}

export default GameBoardGenerator;
