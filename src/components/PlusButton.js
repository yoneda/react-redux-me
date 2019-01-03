/** @jsx jsx */
import { jsx,css } from '@emotion/core';

const wrap = css`
user-select :none;
`

const buttonSvgStyle = css`
fill: white;
stroke: #DADADA;
stroke-width: 1px; 
`

const lineStyle = css`
stroke: black;
stroke-width: 4px;
stroke-linecap: round;
`

const renderPlusSvg = ()=>{
  return(
    <svg css={{width:"40px",height:"40px",cursor:"pointer"}}>
      <circle css={buttonSvgStyle} cx="20" cy="20" r="19.5" />
      <line css={lineStyle} x1="13" y1="20" x2="27" y2="20"/>
      <line css={lineStyle} x1="20" y1="13" x2="20" y2="27"/>
    </svg>
  )
}

const renderMinusSvg = () => {
  return(
    <svg css={{width:"40px",height:"40px",cursor:"pointer"}}>
      <circle css={buttonSvgStyle} cx="20" cy="20" r="19.5" />
      <line css={lineStyle} x1="13" y1="20" x2="27" y2="20"/>
    </svg>
  )
}
const PlusButton = ({isActive, openHandler, closeHandler}) => {
  const render = isActive ? renderMinusSvg : renderPlusSvg;
  const handler = isActive ? closeHandler : openHandler;
  return(
    <div css={wrap} onClick={handler}>
      {render()}
    </div>
  )
}

export default PlusButton;