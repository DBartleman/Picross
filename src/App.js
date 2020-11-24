import './App.css';

function App() {
  function reveal(e) {
    //e.preventDefault();
    e.target.className = "tileButtonFilled tileButton";
    e.target.disabled = true;
    //console.log('The button was clicked.');
  }
  function reset(e) {
    //e.preventDefault();
    let buttons = document.querySelectorAll("tileButton");
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].className = "tileButtonDefault tileButton";
      buttons[i].disabled = false;
    }
    //console.log('The button was clicked.');
  }

  return (
    <div className="App">
      <div className="elements">
        <header className="picrossHeader">
          Picross! by Drew
        </header>
        <div className="gameBoard">
          game board (testing)
          <button onClick={reset}> reset </button>
          <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
          <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
          <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
          <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
          <button onClick={reveal} class="tileButtonDefault tileButton"> </button>
        </div>
      </div>
    </div>
  );
}

export default App;
