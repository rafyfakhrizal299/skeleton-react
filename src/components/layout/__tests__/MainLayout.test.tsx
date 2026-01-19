import { MemoryRouter } from "react-router-dom"
import { MainLayout } from "../MainLayout"
import { render, screen } from "@testing-library/react"

describe('MainLayout', () => {
    it('renders header title', () => {
        render(
            <MemoryRouter>
                <MainLayout />
            </MemoryRouter>
        )
        expect(screen.getByText(/react starter kit/i)).toBeInTheDocument()
    })
})