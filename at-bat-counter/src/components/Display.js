import React from "react";

const Display = props => {
  return (
    <div className='display'>
      <h1>{props.strike} Strikes</h1>
      <h1>{props.ball} Balls</h1>
      <h1>{props.foul} Fouls</h1>
    </div>
  );
};

export default Display;