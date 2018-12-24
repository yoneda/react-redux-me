import { OPEN_CONTENT, CLOSE_CONTENT, ON_DARKMODE, OFF_DARKMODE } from "../constants/constants.js";

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

  else{
    const initialState = {
      count: 1,
      toggles: [true,false,false,false],
      dark: false
    }
    return initialState;
  }
}

export default reducer;
