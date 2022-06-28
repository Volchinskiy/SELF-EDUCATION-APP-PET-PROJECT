import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { AnyAction } from "redux";
import thunk from "redux-thunk";

//////////////////////////////////////////////////////// types
export interface UIStateI {
  ShowLeftSide: boolean;
  ShowAddQuestionArea: boolean;
  ShowTheme: boolean;
  ShowQuestion: boolean;
  ShowRepeatQuestion: boolean;
}
export interface ThemeStateI {
  AllTheme: Array<string> | [];
  SelectedTheme: [number, string] | [null, null];
}
export interface QuestionStateI {
  Questions: QuestionStateQuestionsT;
  RepeatQuestions: Array<QuestionT> | [];
  SelectedQuestion: SelectedQuestionT;
  LastTypeSelectedQuestion: string | null;
}

/// переделать эти типы на то что у тебя будет в базе данных \\\
export type QuestionT = {
  _id: string;
  title: string;
  text: string;
  sphere: Array<string>;
  dateСreation: string;
  repeats: {
    [key: string]: {
      date: string;
      done: boolean;
    };
  };
};
export type SelectedQuestionT = (QuestionT & { index: number }) | null;
///
export type QuestionStateQuestionsT = { [key: string]: Array<QuestionT> };
export type QuestionStateRepeatQuestionsT = Array<QuestionT>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/////////////////////////////////////////////////////// states
const UIState: UIStateI = {
  ShowLeftSide: false,
  ShowAddQuestionArea: false,
  ShowTheme: false,
  ShowQuestion: false,
  ShowRepeatQuestion: false,
};
const ThemeState: ThemeStateI = {
  AllTheme: ["Все Вопросы", "не Все Вопросы"],
  SelectedTheme: [0, "Все Вопросы"],
};
const QuestionState: QuestionStateI = {
  Questions: {
    "Все Вопросы": [
      {
        _id: "1",
        title: "rr1",
        text: "rr1",
        sphere: ["rr", "tt"],
        dateСreation: "2022-04-26T16:10:01.199Z",
        repeats: {
          firstRepeat: { date: "", done: false },
          secondRepeat: { date: "", done: false },
          thirdRepeat: { date: "", done: false },
          fourthRepeat: { date: "", done: false },
          fifthRepeat: { date: "", done: false },
          sixthRepeat: { date: "", done: false },
          seventhRepeat: { date: "", done: false },
        },
      },
      {
        _id: "2",
        title: "rr2",
        text: "rr2",
        sphere: ["rr", "tt"],
        dateСreation: "2022-04-26T16:10:01.199Z",
        repeats: {
          firstRepeat: { date: "", done: false },
          secondRepeat: { date: "", done: false },
          thirdRepeat: { date: "", done: false },
          fourthRepeat: { date: "", done: false },
          fifthRepeat: { date: "", done: false },
          sixthRepeat: { date: "", done: false },
          seventhRepeat: { date: "", done: false },
        },
      },
    ],
    "не Все Вопросы": [
      {
        _id: "3",
        title: "rr3",
        text: "rr3",
        sphere: ["rr", "tt"],
        dateСreation: "2022-04-26T16:10:01.199Z",
        repeats: {
          firstRepeat: { date: "", done: false },
          secondRepeat: { date: "", done: false },
          thirdRepeat: { date: "", done: false },
          fourthRepeat: { date: "", done: false },
          fifthRepeat: { date: "", done: false },
          sixthRepeat: { date: "", done: false },
          seventhRepeat: { date: "", done: false },
        },
      },
      {
        _id: "4",
        title: "rr4",
        text: "rr4",
        sphere: ["rr", "tt"],
        dateСreation: "2022-04-26T16:10:01.199Z",
        repeats: {
          firstRepeat: { date: "", done: false },
          secondRepeat: { date: "", done: false },
          thirdRepeat: { date: "", done: false },
          fourthRepeat: { date: "", done: false },
          fifthRepeat: { date: "", done: false },
          sixthRepeat: { date: "", done: false },
          seventhRepeat: { date: "", done: false },
        },
      },
      {
        _id: "5",
        title: "rr5",
        text: "rr5",
        sphere: ["rr", "tt"],
        dateСreation: "2022-04-26T16:10:01.199Z",
        repeats: {
          firstRepeat: { date: "", done: false },
          secondRepeat: { date: "", done: false },
          thirdRepeat: { date: "", done: false },
          fourthRepeat: { date: "", done: false },
          fifthRepeat: { date: "", done: false },
          sixthRepeat: { date: "", done: false },
          seventhRepeat: { date: "", done: false },
        },
      },
    ],
  },
  RepeatQuestions: [
    {
      _id: "6",
      title: "rr6",
      text: "rr6",
      sphere: ["rr", "tt"],
      dateСreation: "2022-04-26T16:10:01.199Z",
      repeats: {
        firstRepeat: { date: "", done: false },
        secondRepeat: { date: "", done: false },
        thirdRepeat: { date: "", done: false },
        fourthRepeat: { date: "", done: false },
        fifthRepeat: { date: "", done: false },
        sixthRepeat: { date: "", done: false },
        seventhRepeat: { date: "", done: false },
      },
    },
    {
      _id: "7",
      title: "rr7",
      text: "rr7",
      sphere: ["rr", "tt"],
      dateСreation: "2022-04-26T16:10:01.199Z",
      repeats: {
        firstRepeat: { date: "", done: false },
        secondRepeat: { date: "", done: false },
        thirdRepeat: { date: "", done: false },
        fourthRepeat: { date: "", done: false },
        fifthRepeat: { date: "", done: false },
        sixthRepeat: { date: "", done: false },
        seventhRepeat: { date: "", done: false },
      },
    },
    {
      _id: "8",
      title: "rr8",
      text: "rr8",
      sphere: ["rr", "tt"],
      dateСreation: "2022-04-26T16:10:01.199Z",
      repeats: {
        firstRepeat: { date: "", done: false },
        secondRepeat: { date: "", done: false },
        thirdRepeat: { date: "", done: false },
        fourthRepeat: { date: "", done: false },
        fifthRepeat: { date: "", done: false },
        sixthRepeat: { date: "", done: false },
        seventhRepeat: { date: "", done: false },
      },
    },
  ],
  SelectedQuestion: null,
  LastTypeSelectedQuestion: null,
};

/////////////////////////////////////////////////////// actions
export const toggleShowLeftSide = {
  type: "TOGGLE SHOW LEFT SIDE",
};
export const toggleShowAddQuestionArea = {
  type: "TOGGLE SHOW ADD QUESTION AREA",
};
export const toggleShowTheme = {
  type: "TOGGLE SHOW THEME",
};
export const toggleShowQuestion = {
  type: "TOGGLE SHOW QUESTION",
};
export const toggleShowRepeatQuestion = {
  type: "TOGGLE SHOW REPEAT QUESTION",
};
export const selectTheme = (index: number, title: string) => {
  return {
    type: "SELECT THEME",
    payload: [index, title],
  };
};
export const selectQuestion = (
  index: number,
  isRepeat: boolean,
  theme?: string
) => {
  return {
    type: "SELECT QUESTION",
    payload: [index, isRepeat, theme],
  };
};
export const nextQuestion = (theme: string) => {
  return {
    type: "NEXT QUESTION",
    payload: theme,
  };
};

/////////////////////////////////////////////////////// reducers
export function UIReducer(state = UIState, action: AnyAction) {
  switch (action.type) {
    case "TOGGLE SHOW LEFT SIDE":
      return {
        ...state,
        ShowLeftSide: !state.ShowLeftSide,
      };
    case "TOGGLE SHOW ADD QUESTION AREA":
      return {
        ...state,
        ShowAddQuestionArea: !state.ShowAddQuestionArea,
      };
    case "TOGGLE SHOW THEME":
      return {
        ...state,
        ShowTheme: !state.ShowTheme,
      };
    case "TOGGLE SHOW QUESTION":
      return {
        ...state,
        ShowQuestion: !state.ShowQuestion,
      };
    case "TOGGLE SHOW REPEAT QUESTION":
      return {
        ...state,
        ShowRepeatQuestion: !state.ShowRepeatQuestion,
      };
    default:
      return state;
  }
}

export function ThemeReducer(state = ThemeState, action: AnyAction) {
  switch (action.type) {
    case "SELECT THEME":
      return {
        ...state,
        SelectedTheme: action.payload,
      };
    default:
      return state;
  }
}

export function QuestionReducer(state = QuestionState, action: AnyAction) {
  switch (action.type) {
    case "SELECT QUESTION":
      if (action.payload[1]) {
        const selectedQuestion = state.RepeatQuestions[action.payload[0]];
        return {
          ...state,
          SelectedQuestion: { ...selectedQuestion, index: action.payload[0] },
          LastTypeSelectedQuestion: "Repeat",
        };
      }

      const selectedQuestion =
        state.Questions[action.payload[2]][action.payload[0]];
      return {
        ...state,
        SelectedQuestion: { ...selectedQuestion, index: action.payload[0] },
        LastTypeSelectedQuestion: "Normal",
      };
    case "NEXT QUESTION":
      let index = state.SelectedQuestion!.index + 1;

      if (state.LastTypeSelectedQuestion === "Repeat") {
        if (index > state.RepeatQuestions.length - 1) {
          return state;
        }

        const newQuestion = state.RepeatQuestions[index];

        return {
          ...state,
          SelectedQuestion: { ...newQuestion, index: index },
        };
      }

      if (index > state.Questions[action.payload].length - 1) {
        return state;
      }

      const newQuestion = state.Questions[action.payload][index];
      return {
        ...state,
        SelectedQuestion: { ...newQuestion, index: index },
      };
    default:
      return state;
  }
}

// root reducer
const rootReducer = combineReducers({
  UIReducer,
  ThemeReducer,
  QuestionReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/////////////////////////////////////////////////////// store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
