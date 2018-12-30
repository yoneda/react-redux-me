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
      <div css={titleStyle}>Contacts</div>
      {isShow?<div css={[contentStyle, itemContainerStyle]}>{items}</div>:""}
    </div>
  )
}

export default Contacts
