/**
 *  this function programatically renders a button grid of various size depending on props sent
 * @param {integer} height - the height of the grid, or how many buttons vertically
 * @param {integer} length - the length of the grid, or how many buttons horizontally
 */

function GameBoardGenerator({height, length}) { 
    function reveal(e) {
        //e.preventDefault();
        e.target.className = "tileButtonFilled tileButton";
        e.target.disabled = true;
    }
    if(height > 51 || length > 51) {
        return(<div />);
    }
    // let entireGrid = [];
    // for (let i = 0; i < height; i++) {
    //     let row = [];
    //     for (let j = 0; j < length; j++) {
    //         row.push(<button onClick={reveal} className="tileButtonDefault tileButton"> </button>);
    //     }
    //     entireGrid.push(row);
    // }
    const style = {
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    };

    return (
        <div className="gameBoard">
            {entireGrid}
        </div>
    );
}

export default GameBoardGenerator;
