/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const style = css`
display: flex;
`
const Projects = ({isShow, button, items}) => {
  return(
    <div>
      <h2>Projects</h2>
      {button}
      {isShow===true?
        <div css={style}>{items}</div>
      :""}
    </div>
  )
}

export default Projects
