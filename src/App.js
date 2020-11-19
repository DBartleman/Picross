import './App.css';

function App() {
  function reveal(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }

  return (
    <div className="App">
      <div className="elements">
        <header className="picrossHeader">
          Picross! by Drew
        </header>
        <div className="gameBoard">
          game board (testing)
          <button onClick={reveal} class="tileButtonDefault"> </button>
          <button onClick={reveal} class="tileButtonDefault"> </button>
          <button onClick={reveal} class="tileButtonDefault"> </button>
          <button onClick={reveal} class="tileButtonDefault"> </button>
          <button onClick={reveal} class="tileButtonDefault"> </button>
        </div>
      </div>
    </div>
  );
}

export default App;
