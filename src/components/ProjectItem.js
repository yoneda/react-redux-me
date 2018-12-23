import React from "react";

const ProjectItem = ({title,link}) => {
  return(
    <div>
      <a href={link}>{title}</a>
    </div>
  )
}

export default ProjectItem
