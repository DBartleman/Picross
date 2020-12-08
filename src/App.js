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
    return solution;
  }
  function generateNewGame() {
    //not sure what should go here to start a new game...
    //reloading the page seems to work for now, as it is the only way to refresh the buttons
    location.reload();
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
        <button onClick={generateNewGame} className="newGameButton">Generate New Game\n(reloads page)</button>
        <button onClick={console.log(generateSolution(3, 3))}> Log Sample Solution (testing) </button>
        <GameBoardGenerator grid={3,3}/>
      </div>
    </div>
  );
}

export default App;
