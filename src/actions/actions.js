import { OPEN_CONTENT, CLOSE_CONTENT, ON_DARKMODE, OFF_DARKMODE} from "../constants/constants.js";

export const getOpenContent = (index) => {
  return {
    type: OPEN_CONTENT,
    index: index
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