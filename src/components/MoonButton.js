/** @jsx jsx */
import { jsx,css, keyframes} from '@emotion/core';

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

const becomeDark = keyframes`
100%{
  fill: black;
}
`

const becomeShine = keyframes`
100%{
	fill:white;
}
`

const moonSvgStyle = css`
stroke: #000000;
stroke-width: 3px;
animation-duration: 0.5s;
animation-fill-mode: forwards;
`

const renderMoonSvg = (isDarkmode) => {
  const keyframe = isDarkmode ? becomeDark : becomeShine;
  const color = isDarkmode ? "white" : "black";
  const moonSvgAnimationStyle = css`
  fill: ${color};
  animation-name: ${keyframe};
  `
  return(
    <svg css={{width:"40px",height:"40px",cursor:"pointer"}}>
      <circle css={buttonSvgStyle} cx="20" cy="20" r="19.5" />
      <path css={[moonSvgStyle,moonSvgAnimationStyle]} d="M27,24.6c-1.5,1.5-3.5,2.4-5.8,2.4s-4.3-0.9-5.8-2.4S13,21.1,13,18.8s0.9-4.3,2.4-5.8L27,24.6z"/>
    </svg>
  )
}

const MoonButton = ({isDarkmode, onHandler, offHandler}) => {
  const handler = isDarkmode ? offHandler : onHandler;
  return(
    <div css={wrap} onClick={handler}>
      {renderMoonSvg(isDarkmode)}
    </div>
  )
}

export default MoonButton;