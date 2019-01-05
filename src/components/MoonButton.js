/** @jsx jsx */
import { jsx,css } from '@emotion/core';

const wrap = css`
user-select :none;
width: 40px;
height: 40px;
`

const buttonSvgStyle = css`
fill: white;
stroke: #DADADA;
stroke-width: 1px;
`

const moonSvgStyle = css`
stroke: #000000;
stroke-width: 3px;
fill: none;
`

const renderMoonSvg = () => {
  return(
    <svg css={{width:"40px",height:"40px",cursor:"pointer"}}>
      <circle css={buttonSvgStyle} cx="20" cy="20" r="19.5" />
      <path css={moonSvgStyle} d="M27,24.6c-1.5,1.5-3.5,2.4-5.8,2.4s-4.3-0.9-5.8-2.4S13,21.1,13,18.8s0.9-4.3,2.4-5.8L27,24.6z"/>
    </svg>
  )
}

const MoonButton = ({isDarkmode, isMoonbuttonPressed, onHandler, offHandler, pressedHandler}) => {
  const handler = isDarkmode ? offHandler : onHandler;
  const buttonPressedHandler = isMoonbuttonPressed ? ()=>{} : pressedHandler;
  const onClick = () => {
    handler();
    buttonPressedHandler();
  }
  return(
    <div css={wrap} onClick={onClick}>
      {renderMoonSvg()}
    </div>
  )
}

export default MoonButton;