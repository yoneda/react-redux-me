/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const Contacts = ({isShow, button, items}) => {
  const style = css`
  display: flex;
  `
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
