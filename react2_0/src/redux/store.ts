import { createStore, combineReducers } from "redux";
import { AnyAction } from 'redux'

//////////////////////////////////////////////////////// types
export interface UIStateI{
  ShowLeftSide: boolean;
  ShowAddQuestionArea: boolean;
  ShowTheme: boolean;
}
export interface ThemeStateI{
  AllTheme: Array<string>;
  Count: number;
  SelectedTheme: number | null;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

/////////////////////////////////////////////////////// states
const UIState: UIStateI = {
  ShowLeftSide: false,
  ShowAddQuestionArea: false,
  ShowTheme: false,
}
const ThemeState: ThemeStateI = {
  // добавить рендер тем с этого массива когда стрелочка у тем показывает вниз
  AllTheme: ["Все Вопросы", "HTML", "React"],
  Count: 3,
  SelectedTheme: null
}

/////////////////////////////////////////////////////// actions
export const toggleShowLeftSide = {
  type: "TOGGLE SHOW LEFT SIDE"
}

export const toggleShowAddQuestionArea = {
  type: "TOGGLE SHOW ADD QUESTION AREA"
}

export const toggleShowTheme = {
  type: "TOGGLE SHOW THEME"
}

export const selectTheme = (index: number) => {
  return {
    type: "SELECT THEME",
    payload: index
  }
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
      case "TOGGLE SHOW THEME":
        return {
          ...state,
          ShowTheme: !state.ShowTheme
        }
    default: return state;  
  }
}

export function ThemeReducer(state = ThemeState, action: AnyAction){
  switch (action.type){
    case "SELECT THEME":
      return{
        ...state,
        SelectedTheme: action.payload
      }
    default: return state;
  }
}

// root reducer
const rootReducer = combineReducers({
  UIReducer,
  ThemeReducer
})


/////////////////////////////////////////////////////// store
const store = createStore(rootReducer);
export default store;
