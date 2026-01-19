import reducer, { increment, addBy } from '../counterSlice'

describe('counterSlice', () => {
  it('should increment', () => {
    const state = reducer({ value: 0 }, increment())
    expect(state.value).toBe(1)
  })

  it('should add by payload', () => {
    const state = reducer({ value: 1 }, addBy(5))
    expect(state.value).toBe(6)
  })
})