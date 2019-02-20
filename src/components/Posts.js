/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const containerStyle = css`
  margin-bottom: 10px;
  display: grid;
  grid-template:
    "icon title" 40px
    "content content" 1fr /
    40px 1fr;
`;
const iconStyle = css`
  grid-area: icon;
`;
const titleStyle = css`
  grid-area: title;
  display: flex;
  align-items: center;
`;

const titleTextStyle = css`
  font-size: 24px;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

const contentStyle = css`
  border: 1px dashed #dadada;
  grid-area: content;
  margin-top: 10px;
  padding: 30px;
`;

const contentTextStyle = css`
  font-size: 18px;
  line-height: 1.5;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  color: #b3b3b3;
`;

const contentLinkTextStyle = css`
  color: #b3b3b3;
  &:hover {
    background-color: #b3b3b3;
    color: white;
  }
`;

const Posts = ({ isShow, button, articles }) => {
  return (
    <div css={containerStyle}>
      <div css={iconStyle}>{button}</div>
      <div css={titleStyle}>
        <h3 css={titleTextStyle} className="chameleonText">
          Posts
        </h3>
      </div>
      {isShow ? (
        <div css={contentStyle}>
          {articles.map((article, index) => {
            return (
              <p key={index} css={contentTextStyle}>
                {article.title}{" "}
                <a css={contentLinkTextStyle} href={article.link} target="__blank">
                  #
                </a>
              </p>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Posts;
