/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const style = css`
  user-select:text;
  `
const Bio = ({}) => {
  return(
    <div css={style}>
      <h2>Kohei Yoneda</h2>
      <p>Frontend Developper living in Japan<br/>Interested in Web Design</p>
    </div>
  )
}

export default Bio
