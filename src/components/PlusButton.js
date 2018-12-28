/** @jsx jsx */
import { jsx,css } from '@emotion/core';
import plus from "../resources/plusButton.svg";
import minus from "../resources/minusButton.svg";

const PlusButton = ({isActive, openHandler, closeHandler}) => {
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
  const look = isActive ? minus : plus;
  const handler = isActive ? closeHandler : openHandler;
  return(
    <div css={styles} onClick={handler}>
    <div css={{width:"22px",height:"22px"}} dangerouslySetInnerHTML={{__html:look}}></div>
    </div>
  )
}

export default PlusButton;