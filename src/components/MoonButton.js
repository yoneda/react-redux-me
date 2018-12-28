import React from "react";

const OpenButton = ({isDarkmode, onHandler, offHandler}) => {
  return(
    <div>
      {isDarkmode===true?
      <button onClick={offHandler}>off</button>:
      <button onClick={onHandler}>on</button>
      }
    </div>
  )
}

export default OpenButton
