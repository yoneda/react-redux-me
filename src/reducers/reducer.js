import { OPEN_CONTENT, CLOSE_CONTENT, ON_DARKMODE, OFF_DARKMODE, ON_LOADING, OFF_LOADING, ADD_POSTS } from "../constants/constants.js";

const reducer = (state={},action)=>{
  if(action.type===OPEN_CONTENT){
    const index = action.index;
    const newToggles = state.toggles.map((toggle,i)=>{
      if(i===index) return true;
      return toggle;
    })
    const newState = {
      ...state,
      toggles: newToggles
    }
    return newState;
  }

  else if(action.type===CLOSE_CONTENT){
    const index = action.index;
    const newToggles = state.toggles.map((toggle,i)=>{
      if(i===index) return false;
      return toggle;
    })
    const newState = {
      ...state,
      toggles: newToggles
    }
    return newState;
  }

  else if(action.type===ON_DARKMODE){
    const newState = {
      ...state,
      dark: true
    }
    return newState;
  }

  else if(action.type===OFF_DARKMODE){
    const newState = {
      ...state,
      dark: false
    }
    return newState;
  }

  else if(action.type===ON_LOADING){
    const newState = {
      ...state,
      loading: true
    }
    return newState;
  }

  else if(action.type===OFF_LOADING){
    const newState = {
      ...state,
      loading: false
    }
    return newState;
  }

  else if(action.type===ADD_POSTS){
    const newPosts = action.data.articles;
    const newState = {
      ...state,
      posts: newPosts
    }
    return newState;
  }

  else{
    const initialState = {
      count: 1,
      toggles: [true,false,false,false],
      dark: false,
      loading: false,
      posts: []
    }
    return initialState;
  }
}

export default reducer;
