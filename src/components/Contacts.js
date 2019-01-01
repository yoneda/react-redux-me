/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const containerStyle = css`
margin-bottom: 10px;
display: grid;
grid-template:
"icon title" 40px
"content content" 1fr /
40px 1fr;
`
const iconStyle = css`
grid-area: icon;
`
const titleStyle = css`
grid-area: title;
display: flex;
align-items: center;
`
const titleTextStyle = css`
font-size:24px;
margin-left:10px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
`

const contentStyle = css`
grid-area: content;
`

const itemContainerStyle = css`
display: flex;
`

const Contacts = ({isShow, button, items}) => {
  return(
    <div css={containerStyle}>
      <div css={iconStyle}>{button}</div>
      <div css={titleStyle}>
        <h3 css={titleTextStyle} className="chameleonText" >Contacts</h3>
      </div>
      {isShow?<div css={[contentStyle, itemContainerStyle]}>{items}</div>:""}
    </div>
  )
}

export default Contacts
