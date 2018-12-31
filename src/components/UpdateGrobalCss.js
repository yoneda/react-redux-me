/** @jsx jsx */
import { Global, jsx, css, keyframes} from '@emotion/core'

const UpdateGrobalCss = ({ isDarkmode }) => {
  const color = isDarkmode ? "white" : "black";
  const nextColor = isDarkmode ? "black" : "white";
  const changeColor = keyframes`
  100%{
    background-color: ${nextColor};
  }
  `;
  return(
    <div>
      <Global
      styles = {css`
      .background{
        background-color: ${color};
        animation-name: ${changeColor};
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }`}
      />
    </div>
  )
};

export default UpdateGrobalCss;
