import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard'

export const sum = (a,b) => a + b;

function App() {

  const [strikeCount, setStrikeCount] = useState(0);
  const [ballCount, setBallCount] = useState(0);

  const addStrike = () => {
    if (strikeCount < 2) {setStrikeCount(strikeCount+1)}
    else {setStrikeCount(0); alert("Strike 3...Out!");}
  }

  const addBall = () => {
    if (ballCount < 3) {setBallCount(ballCount+1)}
    else {setBallCount(0); alert("Ball 4...Something happens!");}
  }

  const addFoul = () => {
    if (strikeCount < 2) {setStrikeCount(strikeCount+1)}
  }

  const addHit = () => {
    setStrikeCount(0);
    setBallCount(0);
    alert("Hit!");
  }

console.log('ballCount', ballCount)
  return (
    <div className="App">
      <Display ballCount={ballCount} strikeCount={strikeCount} />
      <Dashboard ballCount={ballCount} strikeCount={strikeCount} setBallCount={setBallCount} setBallCount={setBallCount} addStrike= {addStrike} addBall={addBall} addFoul={addFoul} addHit={addHit} />
    </div>
  );
}

export default App;
