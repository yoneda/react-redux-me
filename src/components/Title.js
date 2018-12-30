/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const name = css`
font-size:80px;
line-height: 1.0;
`

const Title = ({}) => {
  return(
    <div>
      <h2 css={name}>Kohei Yoneda</h2>
    </div>
  )
}

export default Title
