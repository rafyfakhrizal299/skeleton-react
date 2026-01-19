import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from '../ErrorBoundary'

function BrokenComponent():JSX.Element {
  throw new Error('Boom')
}

describe('ErrorBoundary', () => {
  it('renders fallback UI on error', () => {
    render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    )

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })
})
