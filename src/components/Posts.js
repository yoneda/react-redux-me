/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const containerStyle = css`
margin-bottom: 10px;
display: grid;
grid-template:
"icon title" 40px
"content content" 1fr /
40px 1fr;
`
const iconStyle = css`
grid-area: icon;
`
const titleStyle = css`
grid-area: title;
display: flex;
align-items: center;
`

const titleTextStyle = css`
font-size: 24px;
margin-left:10px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
`

const contentStyle = css`
grid-area: content;
`

const Posts = ({isShow, button, articles}) => {
  return(
    <div css={containerStyle}>
      <div css={iconStyle}>{button}</div>
      <div css={titleStyle}>
        <h3 css={titleTextStyle} className="chameleonText" >Posts</h3>
      </div>
      {isShow?
      <div css={contentStyle}>
        {articles.map((article,index)=>{
          return (
            <p key={index}>
              {article.title}{" "}
              <a href={article.link} target="__blank">#</a>
            </p>
          )
        })}
      </div>:
      ""}
    </div>
  )
}

export default Posts
