export const selectQuestion = (
  index: number,
  isRepeat: boolean,
  topic?: string
) => {
  return {
    type: "SELECT QUESTION",
    payload: [index, isRepeat, topic],
  };
};

export const nextQuestion = (topic: string) => {
  return {
    type: "NEXT QUESTION",
    payload: topic,
  };
};

export const getAllQuestionByPersonId = (personId: number = 1) => {
  return {
    type: "GET ALL QUESTION BY PERSON ID",
    payload: personId,
  };
};
