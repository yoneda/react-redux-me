import axios from "axios";

const getQiitaPosts = () => {
  axios.get("https://simple-api.glitch.me/")
  .then((res)=>{
    console.log(res);
  });
}

export default getQiitaPosts;