import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen).toBeDefined()
  })
})
describe('env', () => {
  it('has app name', () => {
    expect(import.meta.env.VITE_APP_NAME).toBeDefined()
  })
})