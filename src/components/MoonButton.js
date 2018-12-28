/** @jsx jsx */
import { jsx,css } from '@emotion/core';
import moonNormal from "../resources/moon.svg";
import moonFill from "../resources/moonFill.svg";

const MoonButton = ({isDarkmode, onHandler, offHandler}) => {
  const styles = css`
  width: 36px;
  height: 36px;
  border: 1px solid #b3b3b3;
  border-style: dashed;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  `;
  const moon = isDarkmode ? moonFill : moonNormal;
  const handler = isDarkmode ? offHandler : onHandler;
  return(
    <div css={styles} onClick={handler}>
    <div css={{width:"22px"}} dangerouslySetInnerHTML={{__html:moon}}></div>
    </div>
  )
}

export default MoonButton;