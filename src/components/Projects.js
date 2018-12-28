/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const contentStyle = css`
display:flex;
`
const wrapStyle = css`
  display:flex;
  `
const buttonStyle = css`
  width: 36px;
  height:36px;
  `
const Projects = ({isShow, button, items}) => {
  return(
    <div>
      <div css={wrapStyle}>
        <div css={buttonStyle}>{button}</div>
        <h2>Project</h2>
      </div>
      {isShow===true?
        <div css={contentStyle}>{items}</div>
      :""}
    </div>
  )
}

export default Projects
