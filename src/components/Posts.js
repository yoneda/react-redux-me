import React from "react";

const Posts = ({isShow,button}) => {
  return(
    <div>
      <h2>Posts</h2>
      {button}
      {isShow===true?<div><p>aaa</p><p>aaa</p><p>aaa</p></div>:""}
    </div>
  )
}

export default Posts
