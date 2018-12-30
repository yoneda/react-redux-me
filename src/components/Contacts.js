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
font-size:24px;
`

const contentStyle = css`
grid-area: content;
background:navajowhite;
`

const itemContainerStyle = css`
display: flex;
`

const Contacts = ({isShow, button, items}) => {
  return(
    <div css={containerStyle}>
      <div css={iconStyle}>{button}</div>
      <div css={titleStyle}>
        <h3 css={titleTextStyle}>Contacts</h3>
      </div>
      {isShow?<div css={[contentStyle, itemContainerStyle]}>{items}</div>:""}
    </div>
  )
}

export default Contacts
