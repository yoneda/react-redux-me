import React from "react";

const OpenButton = ({isActive, openHandler, closeHandler}) => {
  return(
    <div>
      {isActive===true?
      <button onClick={closeHandler}>-</button>:
      <button onClick={openHandler}>+</button>
      }
    </div>
  )
}

export default OpenButton
