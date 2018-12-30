/** @jsx jsx */
import { jsx,css } from '@emotion/core';
import moonButton from "../resources/moonButton.svg";
import moonFill from "../resources/moonFill.svg";

const style = css`
width: 40px;
height: 40px;
`

const MoonButton = ({isDarkmode, onHandler, offHandler}) => {
  const moon = isDarkmode ? moonFill : moonButton;
  const handler = isDarkmode ? offHandler : onHandler;
  return(
    <div onClick={handler}>
      <div css={style} dangerouslySetInnerHTML={{__html:moon}}></div>
    </div>
  )
}

export default MoonButton;