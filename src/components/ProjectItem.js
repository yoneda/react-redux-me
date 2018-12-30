/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const containerStyle = css`
width: 160px;
height: 120px;
border: 1px solid #b3b3b3;
margin: 20px 20px 20px 0px;
display: flex;
justify-content: center;
align-items: center;
`

const itemStyle = css`
width: 90px;
height: 50px;
background-color:deeppink;
border-radius: 10px;
color:white;
`

const linkStyle = css`
text-decoration: none;
`

const ProjectItem = ({title,link}) => {
  return(
    <div css={containerStyle }>
      <a css={linkStyle} href="google.com" target="__black">
        <div css={itemStyle}>{title}</div>
      </a>
    </div>
  )
}

export default ProjectItem
