export const selectTopic = (index: number, title: string) => {
  return {
    type: "SELECT THEME",
    payload: [index, title],
  };
};
