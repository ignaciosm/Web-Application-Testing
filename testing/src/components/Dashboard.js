import React from 'react';

const Dashboard = (props) => {

  const handleStrike = (e) => {
    e.preventDefault();
    props.addStrike();
    console.log ('dashboard strikes', props.strikeCount)
  }

  const handleBall = (e) => {
    e.preventDefault();
    props.addBall();
    console.log ('dashboard balls', props.ballCount)
  }

  const handleFoul = (e) => {
    e.preventDefault();
    props.addFoul();
    console.log ('dashboard balls', props.ballCount)
  }

  const handleHit = (e) => {
    e.preventDefault();
    props.addHit();
    console.log ('dashboard balls', props.ballCount)
  }

  return (
    <>
      <h1>Dashboard!</h1>
      <button
        onClick={handleStrike}
      >
        Add Strike
      </button>
      <button
        onClick={handleBall}
      >
        Add Ball
      </button>
      <button
        onClick={handleFoul}
      >
        Foul
      </button>
      <button
        onClick={handleHit}
      >
        Hit
      </button>
    </>
  )
}

export default Dashboard;