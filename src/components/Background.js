/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const style = css`
position: absolute;
right: 0;
left: 0;
top: 0;
bottom: 0;
z-index: -1;
background-color:none;
`
const Background = ({ isDarkmode }) => {
  return(
    <div css={style} className="background">
    </div>
  )
};

export default Background;
