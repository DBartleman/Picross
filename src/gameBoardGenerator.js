function gameBoardGenerator(grid) {
//TODO: programatically render a grid of various size depending on props sent
  return (
    <div className="gameBoard">
        <div>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
        </div>
        <div>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
        </div>
        <div>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
            <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
        </div>
    </div>
  );
}

export default gameBoardGenerator;
