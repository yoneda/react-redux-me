/** @jsx jsx */
import { jsx,css } from '@emotion/core'

const styles = css`
width: 100px;
height: 100px;
border: 1px solid #b3b3b3;
border-style: dashed;
margin-right: 10px;
display:flex;
justify-content: center;
align-items: center;
`;

const ContactItem= ({title,link,svg}) => {
  return(
    <div>
    <a href={link} target="__black">
    <div css={styles}>
    <div style={{width:"50px"}}dangerouslySetInnerHTML={{__html:svg}}></div>
    </div>
    </a>
    </div>
  )
}

export default ContactItem
