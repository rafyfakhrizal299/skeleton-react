import { call, put, takeLatest } from 'redux-saga/effects'
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from './auth.slice'
import { User } from './auth.types'

function fakeLoginApi(): Promise<User> {
  return Promise.resolve({ id: '1', name: 'John', token: null })
}

function* handleLogin() {
  try {
    const user: User = yield call(fakeLoginApi)
    yield put(loginSuccess(user))
  } catch (error) {
    yield put(loginFailure('Login failed'))
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin)
}
