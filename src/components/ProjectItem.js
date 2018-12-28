/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const wrapStyles = css`
width: 130px;
height: 100px;
border: 1px solid #b3b3b3;
border-style: dashed;
margin-right: 10px;
display:flex;
justify-content: center;
align-items: center;
`;

const itemStyles = css`
width: 100px;
height: 50px;
background-color:deeppink;
border-radius: 10px;
color:white;
`

const linkStyles = css`
text-decoration: none;
`

const ProjectItem = ({title,link}) => {
  return(
    <div>
    <a css={linkStyles} href={link} target="__black">
    <div css={wrapStyles}>
    <div css={itemStyles}>{title}</div>
    </div>
    </a>
    </div>
  )
}

export default ProjectItem
