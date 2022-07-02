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

export const selectTopic = (index: number, title: string) => {
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