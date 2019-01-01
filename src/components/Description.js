/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const descriptionStyle = css`
font-size: 24px;
line-height: 2.0;
font-family: 'Roboto', sans-serif;
font-weight: 400;
`

// TODO: 引数を渡して自己紹介文を表示できるようにする。
// Reactでは<br>や/nでは改行が効かないので、\nの文字列でsplitしてmapして<p>タグとして出力させるしかない。
const Description = ({}) => {
  return(
    <div css={[descriptionStyle]}>
      <p>Frontend Developper living in Japan</p>
      <p>Interested in React, Python, and Web Design</p>
    </div>
  )
}

export default Description
