import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  FETCH_POSTS,
  fetchPostsSuccess,
  fetchPostsError,
  FETCH_USER,
  fetchUserSuccess,
  fetchUserError,
  FETCH_COMMENTS,
  fetchUser,
} from '../actions/actions';

function* fetchPostsSaga() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/posts'
    );
    yield put(fetchPostsSuccess(response.data));

    for (const post of response.data) {
      yield put(fetchUser(post.userId));
    }
  } catch (error) {
    yield put(fetchPostsError(error.toString()));
  }
}

function* fetchUserSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${action.payload}`
    );
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserError(error.toString()));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_POSTS, fetchPostsSaga);
  yield takeEvery(FETCH_USER, fetchUserSaga);
  yield takeEvery(FETCH_COMMENTS, fetchComments);
  yield call(watchFetchComments);
}

function* fetchComments(action) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`
    );
    yield put(fetchCommentsSuccess(response.data));
  } catch (error) {
    yield put(fetchCommentsFailure(error.message));
  }
}

export function* watchFetchComments() {
  yield takeEvery(fetchCommentsRequest().type, fetchComments);
}
