/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'

const UpdateGrobalCss = ({ isDarkmode }) => {
  const color = isDarkmode ? "white" : "black";
  return(
    <div>
      <Global
      styles={css`
        h2{
          color: ${color} !important;
        }
      `}
      />
    </div>
  )
};

export default UpdateGrobalCss;
