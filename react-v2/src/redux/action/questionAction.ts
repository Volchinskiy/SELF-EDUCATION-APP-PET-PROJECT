import {
  SELECT_QUESTION,
  NEXT_QUESTION,
  GET_ALL_QUESTION_BY_PERSON_ID_REQUEST,
  GET_ALL_QUESTION_BY_PERSON_ID_SUCCES,
  GET_ALL_QUESTION_BY_PERSON_ID_ERROR,
  QUESTION_DELETE_REQUEST,
  SELECT_EDITABLE_QUESTION,
  RESET_EDITABLE_QUESTION,
  UPDATE_QUESTION_REQUEST,
  CREATE_QUESTION_REQUEST,
  UPDATE_REPEAT_STATUS_REQUEST,
} from "./../constant";

import {
  allQuestionForReducer,
  updateQuestionDtoClass,
  createQuestionDtoClass,
  updateRepeatStatusDtoC,
} from "./../../../../type";

export const selectQuestion = (
  index: number,
  isRepeat: boolean,
  topic?: string
) => {
  return {
    type: SELECT_QUESTION,
    payload: [index, isRepeat, topic],
  };
};

export const nextQuestion = (topic: string) => {
  return {
    type: NEXT_QUESTION,
    payload: topic,
  };
};

export const getAllQuestionByPersonId = (personId: number = 1) => {
  return {
    type: GET_ALL_QUESTION_BY_PERSON_ID_REQUEST,
    payload: personId,
  };
};

export const setAllQuestion = (allQuestion: allQuestionForReducer) => {
  return {
    type: GET_ALL_QUESTION_BY_PERSON_ID_SUCCES,
    payload: allQuestion,
  };
};

export const onError = () => {
  console.log("Error");
  return {
    type: GET_ALL_QUESTION_BY_PERSON_ID_ERROR,
  };
};

export const questionDeleteRequest = (personId: number, questionId: number) => {
  return {
    type: QUESTION_DELETE_REQUEST,
    payload: { personId, questionId },
  };
};

export const selectEditableQuestion = (id: number) => {
  return {
    type: SELECT_EDITABLE_QUESTION,
    payload: id,
  };
};

export const resetEditableQuestion = {
  type: RESET_EDITABLE_QUESTION,
};

export const updateQuestionRequest = (question: updateQuestionDtoClass) => {
  return {
    type: UPDATE_QUESTION_REQUEST,
    payload: question,
  };
};

export const createQuestionRequest = (question: createQuestionDtoClass) => {
  return {
    type: CREATE_QUESTION_REQUEST,
    payload: question,
  };
};

export const updateRepeatStatusReq = (question: updateRepeatStatusDtoC) => {
  return {
    type: UPDATE_REPEAT_STATUS_REQUEST,
    payload: question,
  };
};
