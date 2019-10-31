import React from 'react';

const Display = (props) => {

  return (
    <>
    <h1>Display!</h1>
    <p>{`Strikes: ${props.strikeCount}`}</p>
    <span>Balls: </span><span data-testid="balls">{props.ballCount}</span>
    </>
  )
}

export default Display;