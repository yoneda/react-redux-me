/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const containerStyle = css`
display: grid;
grid-template:
"icon title" 40px
"content content" 160px /
40px 1fr;
`
const iconStyle = css`
grid-area: icon;
background:lightblue;
`
const titleStyle = css`
grid-area: title;
background:aquamarine;
`

const contentStyle = css`
grid-area: content;
background:navajowhite;
`

const itemContainerStyle = css`
display: flex;
`

const renderContent = (items) => {
  return(
    <div css={contentStyle}>
    {items.map((item)=>{
      
    })}
    </div>
  )
}

const Projects = ({isShow, button, items}) => {
  return(
    <div css={containerStyle}>
      <div css={iconStyle}>icon</div>
      <div css={titleStyle}>Projects</div>
      {isShow?<div css={[contentStyle, itemContainerStyle]}>{items}</div>:""}
    </div>
  )
}

export default Projects
