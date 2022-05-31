export const getAllQuestions = (questions: any) => ({
  type: "GET_DATA_SERVER",
  payload: questions,
})

export const selectQuestion = (index: number) => ({
  type: "SELECT_QUESTION",
  payload: index,
})

export const nextQuestion = () => ({
  type: "NEXT_QUESTION",
})
