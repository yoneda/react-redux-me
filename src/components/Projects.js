import React from "react";

const Projects = ({isShow, button, items}) => {
  return(
    <div>
      <h2>Projects</h2>
      {button}
      {isShow===true?items:""}
    </div>
  )
}

export default Projects
