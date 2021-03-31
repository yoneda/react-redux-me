/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const titleNameStyle = css`
font-size:80px;
line-height: 1.2;
font-family: 'Roboto', sans-serif;
font-weight: 700;
`

const Title = () => {
  return(
    <div>
      <h2 css={titleNameStyle} className="chameleonText">Kohei Yoneda</h2>
    </div>
  )
}

export default Title
