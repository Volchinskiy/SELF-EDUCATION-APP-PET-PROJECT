import axios from "axios";

import { ApiFetchDataType } from "./../../../type";

const apiUrl = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
  baseURL: apiUrl,
});

const api: ApiFetchDataType = {
  question: {
    getAllQuestionByPersonId: async (person_id) =>
      await instance.get(`/question/${person_id}`),
    createQuestion: async (createQuestionDto) =>
      await instance.post("/question", createQuestionDto),
    updateQuestion: async (updateQuestionDto) =>
      await instance.patch("/question", updateQuestionDto),
    deleteQuestionUser: async (person_id, question_id) =>
      await instance.delete(`question/${person_id}/${question_id}`),
  },
};

export default api;
