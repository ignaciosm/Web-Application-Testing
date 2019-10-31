import React from 'react';

const Display = (props) => {

  return (
    <>
    <h1>Display!</h1>
    <span>Strikes: </span><span>{props.strikeCount}</span>
    <span>Balls: </span><span data-testid="balls">{props.ballCount}</span>
    </>
  )
}

export default Display;