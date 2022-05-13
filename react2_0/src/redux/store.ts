import { createStore, combineReducers } from "redux";
import { AnyAction } from 'redux'

//////////////////////////////////////////////////////// types
export interface UIStateI{
  ShowLeftSide: boolean;
  ShowAddQuestionArea: boolean;
  ShowTheme: boolean;
  ShowQuestion: boolean;
}
export interface ThemeStateI{
  AllTheme: Array<string>;
  Count: number;
  SelectedTheme: number | null;
}

export interface QuestionStateI{
  // дать тип этому обьекту без конкретных свойств причем свойства каждого это масив с обьектами 
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

/////////////////////////////////////////////////////// states
const UIState: UIStateI = {
  ShowLeftSide: false,
  ShowAddQuestionArea: false,
  ShowTheme: false,
  ShowQuestion: false,
}
const ThemeState: ThemeStateI = {
  AllTheme: ["Все Вопросы", "HTML", "React"],
  Count: 3,
  SelectedTheme: null
}

const QuestionState = {
  questions: {
    "Все вопросы": [{title: "Как Джуну найти работу?", text: "Очкеь стараться и развиватся!"},
                  {title: "Что тако HTML?", text: "HTML это язык гипертекстовой разметки!"},
                  {title: "Как выглядить короткая запись React фрагмента?", text: "<></>"}],
    HTML: [{title: "Что тако HTML?", text: "HTML это язык гипертекстовой разметки!"}],
    React: [{title: "Как выглядить короткая запись React фрагмента?", text: "<></>"}]
  },
  Count: null,
  SelectedQuestion: null
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

export const toggleShowQuestion = {
  type: "TOGGLE SHOW QUESTION"
}

export const selectTheme = (index: number) => {
  return {
    type: "SELECT THEME",
    payload: index
  }
}

// добавить екшен при котором мы устанавливаем все имеющиеся темы и вычисляем их количество



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
      case "TOGGLE SHOW QUESTION":
        return {
          ...state,
          ShowQuestion: !state.ShowQuestion
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

export function QuestionReducer(state = QuestionState, action: AnyAction){
  switch (action.type){
    
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
