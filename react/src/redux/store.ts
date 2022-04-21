import { createStore } from "redux";

const state = {
  value: 1,
}

function counterReducer(state: any, action: any) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 }
    case "counter/decremented":
      return { value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(counterReducer);