import {
  GET_ALL_QUESTION_BY_PERSON_ID_REQUEST,
  QUESTION_DELETE_REQUEST,
} from "./../constant";
import { takeEvery, all, fork, call, put } from "redux-saga/effects";
import api from "../../api/api";
import {
  getAllQuestionByPersonId,
  setAllQuestion,
  onError,
  setAllTopic,
  questionDeleteRequest,
} from "./../action";
import { SagaIterator } from "redux-saga";

async function getAllQuestion(perosnId: number) {
  const allQuestion = await api.question.getAllQuestionByPersonId(perosnId);
  return allQuestion.data;
}

async function deleteQuestion(personId: number, questionId: number) {
  const allQuestion = await api.question.deleteQuestionUser(
    personId,
    questionId
  );
  return allQuestion.data;
}

function* getAllQuestionWorker({
  payload,
}: ReturnType<typeof getAllQuestionByPersonId>): SagaIterator {
  try {
    const { allSortedQuestion, allRepeatQuestion, allTopic } = yield call(
      getAllQuestion,
      payload
    );
    yield put(setAllQuestion({ allSortedQuestion, allRepeatQuestion }));
    yield put(setAllTopic(allTopic));
  } catch (error) {
    yield put(onError());
  }
}

function* deleteQuestionWorker({
  payload,
}: ReturnType<typeof questionDeleteRequest>): SagaIterator {
  try {
    const { allSortedQuestion, allRepeatQuestion, allTopic } = yield call(
      deleteQuestion,
      payload.personId,
      payload.questionId
    );
    yield put(setAllQuestion({ allSortedQuestion, allRepeatQuestion }));
    yield put(setAllTopic(allTopic));
  } catch (error) {
    yield put(onError());
  }
}

function* sagaQuestionWatcher(): SagaIterator {
  yield takeEvery(GET_ALL_QUESTION_BY_PERSON_ID_REQUEST, getAllQuestionWorker);
  yield takeEvery(QUESTION_DELETE_REQUEST, deleteQuestionWorker);
}

export default function* rootSaga() {
  yield all([fork(sagaQuestionWatcher)]);
}
