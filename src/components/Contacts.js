import React from "react";

const Contacts = ({isShow, button, items}) => {
  return(
    <div>
      <h2>Contacts</h2>
      {button}
      {isShow===true?items:""}
    </div>
  )
}

export default Contacts
