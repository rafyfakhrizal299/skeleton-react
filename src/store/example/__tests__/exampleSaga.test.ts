import { testSaga } from 'redux-saga-test-plan'
import { exampleSaga } from '../exampleSaga'

describe('exampleSaga', () => {
  it('listens to example/request', () => {
    testSaga(exampleSaga)
      .next()
      .takeLatest('example/request', expect.any(Function))
      .next()
      .isDone()
  })
})