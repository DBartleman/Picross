import './App.css';
import GameBoardGenerator from './gameBoardGenerator';

function App() {
  function generateSolution(height, length) {
    let solution = [[]];
    for(let i = 0; i < height; i++) {
      for(let j = 0; j < length; j++) {
        solution[i][j] = 0; // my chosen Math.random() implementation should go here
      }
    }
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
  function returnState() { // for state testing purposes :) not final
    let sampleGameBoard = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
    return sampleGameBoard;
  }
  return (
    <div className="App">
      <div className="elements">
        <header className="picrossHeader">
          Picross! by Drew
        </header>
        <GameBoardGenerator />
      </div>
    </div>
  );
}

export default App;
