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

const ContactItem = ({ title, link, svg }) => {
  return (
    <div css={containerStyle}>
      <a href={link} target="__black">
        <div css={svgStyle} dangerouslySetInnerHTML={{ __html: svg }} />
      </a>
    </div>
  );
};

export default ContactItem;
