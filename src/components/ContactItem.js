import React from "react";

const ContactItem= ({title,link}) => {
  return(
    <div>
      <a href={link}>{title}</a>
    </div>
  )
}

export default ContactItem
