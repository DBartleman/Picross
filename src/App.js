import './App.css';
import GameBoardGenerator from './gameBoardGenerator';

function App() {
  function generateSolution(height, length) {
    let solution = []; 
    for(let i = 0; i < height; i++) {
      let data = [];
      for(let j = 0; j < length; j++) {
        data.push(Math.round(Math.random())); // between 0 and 1, integers
      }
      solution.push(data);
    }
    //console.log(solution);
    return solution;
  }
  function generateNewGame() {
    //not sure what should go here to start a new game...
    //reloading the page seems to work for now, as it is the only way to refresh the buttons
    
    // does not work:
    //location.reload();
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
        <div className="controlButtons">
          <button onClick={generateNewGame} className="newGameButton">Generate New Game<br />(reloads page)</button>
          <button onClick={generateSolution(3, 3)}> Log Sample Solution<br />(testing) </button>
        </div>
        
        <GameBoardGenerator height={3} length={3}/>
      </div>
    </div>
  );
}

export default App;
