/** @jsx jsx */
import { Global, jsx, css, keyframes} from '@emotion/core'

const UpdateGrobalCss = ({ isDarkmode }) => {
  const color = isDarkmode ? "white" : "black";
  const nextColor = isDarkmode ? "black" : "white";
  const changeBackgroundColor = keyframes`
  100%{
    background-color: ${nextColor};
  }
  `;
  const changeColor = keyframes`
  100%{
    color: ${color};
  }
  `;
  return(
    <div>
      <Global
      styles = {css`
      .chameleonBackground{
        background-color: ${color};
        animation-name: ${changeBackgroundColor};
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }`}
      />
      <Global
      styles = {css`
      .chameleonText{
        color: ${nextColor};
        animation-name: ${changeColor};
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }`}
      />
    </div>
  )
};

export default UpdateGrobalCss;
