export interface User {
  id: string
  name: string,
  token: string | null,
}

export interface AuthState {
  user: User | null
  loading: boolean
  error?: string
}