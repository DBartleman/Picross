import './App.css';
import gameBoardGenerator from './gameBoardGenerator';

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
  function returnState() { // for state testing purposes :) not final
    return {
      rows: 5,
      columns: 5
    }
  }
  return (
    <div className="App">
      <div className="elements">
        <header className="picrossHeader">
          Picross! by Drew
        </header>
        <gameBoardGenerator grid={returnState()}></gameBoardGenerator>
      </div>
    </div>
  );
}

export default App;
