/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const containerStyle = css`
  width: 120px;
  height: 120px;
  border: 1px dashed #dadada;
  margin: 10px 10px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const svgStyle = css`
  width: 50px;
  height: 50px;
`;

const ContactItem = ({ link, icon, onClick }) => {
  return (
    <div css={containerStyle}>
      <a href={link} target="__black">
        <div css={svgStyle} onClick={() => onClick()}>
          {icon}
        </div>
      </a>
    </div>
  );
};

export default ContactItem;
