
function GameBoardGenerator(grid) {
    function reveal(e) {
        //e.preventDefault();
        e.target.className = "tileButtonFilled tileButton";
        e.target.disabled = true;
        //console.log('The button was clicked.');
    }
    //TODO: programatically render a grid of various size depending on props sent
    return (
        <div className="gameBoard">
            <div>
                {/* <p>1 1 1</p> */}
                {/* <p>1 1 1</p> */}
            </div>
            <div>
                {/* <p>1 1 1</p> */}
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
            </div>
            <div>
                {/* <p>1 1 1 1 1 1</p> */}
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
            </div>
            <div>
                {/* <p>1</p> */}
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
                <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
            </div>
        </div>
    );
}

export default GameBoardGenerator;
