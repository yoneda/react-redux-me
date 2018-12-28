/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const style = css`
display: flex;
`
const Contacts = ({isShow, button, items}) => {
  return(
    <div>
      <h2>Contacts</h2>
      {button}
      {isShow===true?
        <div css={style}>{items}</div>
      :""}
    </div>
  )
}

export default Contacts
