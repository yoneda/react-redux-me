/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const base = css`
position: absolute;
right: 0;
left: 0;
top: 0;
bottom: 0;
z-index: -1;
`
const Background = ({ isDarkmode }) => {
  const color = isDarkmode ? "black" : "white";
  const style = css`${base};background-color:${color};`;
  return(
    <div css={style}>
    </div>
  )
};

export default Background;
