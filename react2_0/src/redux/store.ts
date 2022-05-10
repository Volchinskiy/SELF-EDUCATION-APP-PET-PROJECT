import { createStore } from "redux";
import { AnyAction } from 'redux'

interface initialStateI{
  ShowLeftSide: boolean;
}

const initialState: initialStateI = {
  ShowLeftSide: false
}

export const toggleShowLeftSide = {
  type: "TOGGLE SHOW LEFT SIDE"
}

export function UIReducer (state = initialState, action: AnyAction ){
  switch (action.type){
    case "TOGGLE SHOW LEFT SIDE":
      return {
        ...state,
        ShowLeftSide: !state.ShowLeftSide
      }
    default: return state;  
  }
}

const store = createStore(UIReducer);
export default store;
