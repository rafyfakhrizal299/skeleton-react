import { put, takeLatest } from "redux-saga/effects"

function* exampleWorker() {
    yield put({type: 'example/success'})
}

export function* exampleSaga() {
    yield takeLatest('example/request', exampleWorker)
}