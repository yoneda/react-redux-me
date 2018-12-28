import React from "react";

const About = ({isShow,button}) => {
  const aboutme = () => {
    return(
      <div>
        <p>Text text text text</p>
        <p>Text text text text</p>
        <p>Text text text text</p>
      </div>
    )
  }
  return(
    <div>
      <h2>About</h2>
      {button}
      {isShow===true?aboutme():""}
    </div>
  )
}

export default About
