import axios from "axios";
import qs from "qs";

const requestQiitaPosts = (callback) => {
  const data = {page:"1",per_page:"3"}
  const url = "https://qiita.com/api/v2/authenticated_user/items"
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json", "Authorization":"Bearer 5eeb08d5be63b3f42ba5d43b4ee359c3a5132f6a"},
    data: qs.stringify(data),
    url,
  };
  axios(options).then((res)=>{
    const articles = res.data.map((d)=>{
      const article = {title:d.title, link:d.url};
      return article;
    })
    callback(articles);
  })
}

export default requestQiitaPosts;