import { OPEN_CONTENT, CLOSE_CONTENT, ON_DARKMODE, OFF_DARKMODE, ON_LOADING, OFF_LOADING, ADD_POSTS, ON_MOONBUTTONPRESSED} from "../constants/constants.js";

export const getOpenContent = (index) => {
  return {
    type: OPEN_CONTENT,
    index: index
  }
}

export const getOpenContentAsync = () => {
  return dispatch => {
    setTimeout(()=>{
      dispatch(getOpenContent(0));
    },1000);
  }
}

export const getCloseContent = (index) => {
  return {
    type: CLOSE_CONTENT,
    index: index
  }
}

export const getOnDarkmode = () => {
  return {
    type: ON_DARKMODE
  }
}

export const getOffDarkmode = () => {
  return {
    type: OFF_DARKMODE
  }
}

export const getOnLoading = () => {
  return {
    type: ON_LOADING
  }
}

export const getOffLoading = () => {
  return {
    type: OFF_LOADING
  }
}

export const getAddPosts = (articles) => {
  return {
    type: ADD_POSTS,
    data: {articles:articles}
  }
}

export const getOnMoonbuttonPressed = () => {
  return {
    type: ON_MOONBUTTONPRESSED
  }
}