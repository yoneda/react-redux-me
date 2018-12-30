/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const containerStyle = css`
display: grid;
grid-template:
"icon title" 40px
"content content" 1fr /
40px 1fr;
`
const iconStyle = css`
grid-area: icon;
background:lightblue;
`
const titleStyle = css`
grid-area: title;
background:aquamarine;
display: flex;
align-items: center;
`

const titleTextStyle = css`
font-size: 24px;
`

const contentStyle = css`
grid-area: content;
background:navajowhite;
`

const Posts = ({isShow, button}) => {
  return(
    <div css={containerStyle}>
      <div css={iconStyle}>{button}</div>
      <div css={titleStyle}>
        <h3 css={titleTextStyle}>Projects</h3>
      </div>
      {isShow?
      <div css={contentStyle}>
        <p>text text text text text text #</p>
        <p>text text text text text text #</p>
        <p>text text text text text text #</p>
      </div>:
      ""}
    </div>
  )
}

export default Posts
