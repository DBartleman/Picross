
function GameBoardGenerator({height, length}) {
    // this function programatically renders a button grid of various size depending on props sent
    function reveal(e) {
        //e.preventDefault();
        e.target.className = "tileButtonFilled tileButton";
        e.target.disabled = true;
        //console.log('The button was clicked.');
    }
    // WORKS:
    // let entireGrid = [];
    // for(let i = 0; i < 6; i++) {
    //     entireGrid.push(<button onClick={reveal} className="tileButtonDefault tileButton"> </button>);
    // }
 
    let entireGrid = [];
    for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < length; j++) {
            row.push(<button onClick={reveal} className="tileButtonDefault tileButton"> </button>);
        }
        entireGrid.push(row);
    }
    // <button onClick={reveal} className="tileButtonDefault tileButton"> </button>
    return (
        <div className="gameBoard">
            {entireGrid}
        </div>
    );
}

export default GameBoardGenerator;
