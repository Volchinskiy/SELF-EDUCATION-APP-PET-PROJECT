import { createStore } from "redux";
import { AnyAction } from 'redux'

//////////////////////////////////////////////////////// types
export interface UIStateI{
  ShowLeftSide: boolean;
  ShowAddQuestionArea: boolean;
}
export interface ThemeStateI{
  AllTheme: Array<string>;
  SelectedTheme: string | null;
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

/////////////////////////////////////////////////////// states
const UIState: UIStateI = {
  ShowLeftSide: false,
  ShowAddQuestionArea: false
}
const ThemeState: ThemeStateI = {
  // добавить рендер тем с этого массива когда стрелочка у тем показывает вниз
  AllTheme: ["Все Вопросы", "HTML", "React"],
  SelectedTheme : null
}

/////////////////////////////////////////////////////// actions
export const toggleShowLeftSide = {
  type: "TOGGLE SHOW LEFT SIDE"
}

export const toggleShowAddQuestionArea = {
  type: "TOGGLE SHOW ADD QUESTION AREA"
}

/////////////////////////////////////////////////////// reducers
export function UIReducer (state = UIState, action: AnyAction ){
  switch (action.type){
    case "TOGGLE SHOW LEFT SIDE":
      return {
        ...state,
        ShowLeftSide: !state.ShowLeftSide
      }
    case "TOGGLE SHOW ADD QUESTION AREA":
      return {
        ...state,
        ShowAddQuestionArea: !state.ShowAddQuestionArea
      }
    default: return state;  
  }
}

/////////////////////////////////////////////////////// store
const store = createStore(UIReducer);
export default store;
