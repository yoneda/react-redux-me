/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const About = ({isShow,button}) => {
  const wrapStyle = css`
  display:flex;
  `
  const buttonStyle = css`
  width: 36px;
  height:36px;
  `
  const titleStyle = css`
  user-select:text;
  `
  const aboutme = () => {
    return(
      <div css={titleStyle}>
        <p>Text text text text</p>
        <p>Text text text text</p>
        <p>Text text text text</p>
      </div>
    )
  }
  return(
    <div>
      <div css={wrapStyle}>
        <div css={buttonStyle}>{button}</div>
        <div css={titleStyle}><h2>About</h2></div>
      </div>
      {isShow===true?aboutme():""}
    </div>
  )
}

export default About
