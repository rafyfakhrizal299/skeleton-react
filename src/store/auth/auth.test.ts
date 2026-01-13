import reducer, {
  loginRequest,
  loginSuccess,
} from './auth.slice'

describe('auth reducer', () => {
  it('should handle login success', () => {
    const state = reducer(
      { user: null, loading: true },
      loginSuccess({ id: '1', name: 'John', token: null })
    )

    expect(state.user?.name).toBe('John')
    expect(state.loading).toBe(false)
  })
})