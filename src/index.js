import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './containers/App.js';
import reducer from "./reducers/reducer.js";
import { createStore } from "redux";
import { Provider } from 'react-redux';

import { getOnLoading, getOffLoading, getAddPosts } from "./actions/actions";
import requestQiitaPosts from "./api/requestQiitaPosts";

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Qiita のAPIから記事を取得
store.dispatch(getOnLoading()); // loadingをオン
requestQiitaPosts((posts)=>{
  store.dispatch(getOffLoading()); // loadingをオフ
  store.dispatch(getAddPosts(posts.splice(0,3))); //最初から3件のみをstoreで管理
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)
