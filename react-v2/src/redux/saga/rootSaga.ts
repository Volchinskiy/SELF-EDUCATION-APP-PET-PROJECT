import { ALL_QUESTION_BY_PERSON_ID_REQUEST } from "./../constant";
import { takeEvery, all, fork, call, put } from "redux-saga/effects";
import api from "../../api/api";
import {
  getAllQuestionByPersonId,
  setAllQuestion,
  onError,
  setAllTopic,
} from "./../action";
import { SagaIterator } from "redux-saga";

async function getAllQuestion(perosnId: number) {
  const allQuestion = await api.question.getAllQuestionByPersonId(perosnId);
  return allQuestion.data;
}

function* questionWorker({
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

function* sagaQuestionWatcher(): SagaIterator {
  yield takeEvery(ALL_QUESTION_BY_PERSON_ID_REQUEST, questionWorker);
}

export default function* rootSaga() {
  yield all([fork(sagaQuestionWatcher)]);
}
