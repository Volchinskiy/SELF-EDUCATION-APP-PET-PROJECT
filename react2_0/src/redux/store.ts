import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { AnyAction } from 'redux'
import thunk from "redux-thunk";

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
  SelectedTheme: [number, string] | [null, null];
}
export interface QuestionStateI{
  Questions: QuestionStateQuestionsT;
  SelectedQuestion: SelectedQuestionT | null;
}

export type NextQuestionT = {title: string, text:string}
export type SelectedQuestionT = {index: number, title: string, text:string}
export type QuestionStateQuestionsT = {[key: string]: Array<{title: string, text: string}>};
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
  SelectedTheme: [null, null]
}
const QuestionState: QuestionStateI = {
  Questions: {
   "Все Вопросы": [{title: "Как Джуну найти работу?", text: "Очень стараться и развиватся!"},
                  {title: "Что тако HTML?", text: "HTML это язык гипертекстовой разметки!"},
                  {title: "Что тако HTML?", text: "HTML это язык гипертекстовой разметки!"},
                  {title: "Как выглядить короткая запись React фрагмента?", text: "<></>"}],
    HTML: [{title: "Что тако HTML?", text: "HTML это язык гипертекстовой разметки!"}],
    React: [{title: "Как выглядить короткая запись React фрагмента?", text: "<></>"}]
  },
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

export const selectTheme = (index: number, title: string) => {
  return {
    type: "SELECT THEME",
    payload: [index, title]
  }
}

// добавить екшен при котором мы устанавливаем все имеющиеся темы и вычисляем их количество ThemeState.Count, но это нужно делать при полочении даты с сервера

export const selectQuestion = (index: number, theme: string) => {
  return {
    type: "SELECT QUESTION",
    payload: [index, theme]
  }
}

export const nextQuestion = (theme: string) => {
  return {
    type: "NEXT QUESTION",
    payload: theme
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
        SelectedTheme: action.payload,
      }
    default: return state;
  }
}

export function QuestionReducer(state = QuestionState, action: AnyAction){
  switch (action.type){
    case "SELECT QUESTION":
      const selectedObject = state.Questions[action.payload[1]][action.payload[0]];
      return {
        ...state,
        SelectedQuestion: {...selectedObject, index: action.payload[0]}
      }
    case "NEXT QUESTION":
      // по сути логика отлично работает но вілазит ошибка с never, думаю если обратишь внимание на документацию тайприскрипта найдешь ответ https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
      let index = state.SelectedQuestion!.index + 1;

      if(index >= state.Questions[action.payload[1]].length - 1){
        index = state.Questions[action.payload[1]].length - 1
      };

      const newQuestion = index >= state.Questions[action.payload[1]].length
                                   ?
                                   state.SelectedQuestion
                                   :
                                   state.Questions[action.payload[1]][index];
      return {
        ...state,
        SelectedQuestion: {...newQuestion, index: index}
      }
    default: return state;
  }
}

// root reducer
const rootReducer = combineReducers({
  UIReducer,
  ThemeReducer,
  QuestionReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/////////////////////////////////////////////////////// store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
