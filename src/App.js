import React, { useState } from 'react';
import './App.css';
import GameBoardGenerator from './gameBoardGenerator';

function App() {
  //const [board, setBoard] = useState(<GameBoardGenerator height={3} length={3} />); // valid??????
  let height = 3;
  let length = 3;
  function generateSolution(height, length) {
    let solution = []; 
    for(let i = 0; i < height; i++) {
      let data = [];
      for(let j = 0; j < length; j++) {
        data.push(Math.round(Math.random())); // between 0 and 1, integers
      }
      solution.push(data);
    }
    console.log(solution);
    return solution;
  }
  function determineHint(arr) {
    let hint = [];
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
      //check for non-zeros, check for zero specifically, and ignore negatives
      if(arr[i] > 0) {
        if(!hint[counter]) {
          hint.push(1);
        } else {
          hint[counter]++;
        }
      } else if (arr[i] === 0) {
        counter++;
      }
    }
    return hint;
  }
  function generateNewGame() {
    //not sure what should go here to start a new game...
    //reloading the page seems to work for now, as it is the only way to refresh the buttons
    
    // does not work:
    //location.reload();
    //deprecated:
    //window.location.reload(false);

    //refresh page by changing stuff in state instead - dump board out of state
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
          Picross!
        </header>
        <div className="controlButtons">
          <button onClick={generateNewGame} className="newGameButton">Generate New Game<br />(reloads page)</button>
          <button onClick={generateSolution(height, length)}> Log Sample Solution<br />(testing) </button>
        </div>
        {console.log(determineHint([1, 0, 1, 1, 1, 0, 1, 1]))}
        <p>hint: {determineHint([1, 0, 1, 1, 1, 0, 1, 1])}</p>
        <GameBoardGenerator height length/>
      </div>
    </div>
  );
}

export default App;
