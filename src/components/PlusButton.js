import React from "react";

const OpenButton = ({isShow, handler}) => {
  return(
    <div>
      <button onClick={handler}>+</button>
    </div>
  )
}

export default OpenButton
