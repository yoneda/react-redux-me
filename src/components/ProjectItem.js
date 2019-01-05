/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const containerStyle = css`
width: 160px;
height: 120px;
border: 1px dashed #dadada;
margin: 10px 10px 0px 0px;
display: flex;
justify-content: center;
align-items: center;
`

const itemStyle = css`
width: 90px;
height: 50px;
background-color: deeppink;
border-radius: 10px;
display:flex;
justify-content:center;
align-items:center;
`

const itemTextStyle = css`
color:white;
text-align:center;
font-size:14px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
`

const linkStyle = css`
text-decoration: none;
`

const ProjectItem = ({title,link}) => {
  return(
    <div css={containerStyle }>
      <a css={linkStyle} href={link} target="__black">
        <div css={itemStyle}>
        <span css={itemTextStyle}>{title}</span>
        </div>
      </a>
    </div>
  )
}

export default ProjectItem
