
function GameBoardGenerator(grid) {
    function reveal(e) {
        //e.preventDefault();
        e.target.className = "tileButtonFilled tileButton";
        e.target.disabled = true;
        //console.log('The button was clicked.');
    }
    let middle = [];
    for(let i = 0; i < 6; i++) {
        middle.push(<button onClick={reveal} className="tileButtonDefault tileButton"> </button>);
    }
    //TODO: programatically render a grid of various size depending on props sent
    // <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
    return (
        <div className="gameBoard">
            {middle}
        </div>
    );
}

export default GameBoardGenerator;
