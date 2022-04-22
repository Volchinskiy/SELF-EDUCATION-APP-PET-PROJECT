const initialState: any = {
  questions: [],
  selectedQuestion: null,
}

export default function questionReduser(state = initialState, action: any){
  switch(action.type) {
    case "GET_DATA_SERVER" : {
      return {
        ...state,
        questions: action.payload,
      }
    }
    case "SELECT_QUESTION" : {
      if(state.selectedQuestion === action.payload){
        return state;
      }
      const item = state.questions.find((_item: any, index: number) => index === action.payload );
      return {
        ...state,
        selectedQuestion: {...item, index: action.payload},
      }
    }
    case "NEXT_QUESTION" : {
      const newIndex = state.selectedQuestion.index + 1;
      if(newIndex === state.questions.length) {
        return state;
      }
      const item = state.questions.find((_item: any, index: number) => index === newIndex);
      return {
        ...state,
        selectedQuestion: {...item, index: newIndex},
      }
    }
    default: {
      return state;
    }
  }
}
