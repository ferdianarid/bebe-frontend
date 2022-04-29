import React from "react"
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from "../components/moleculs/Navbar"
import { BrowserRouter } from "react-router-dom"

test("Navbar should be render properly", () => {
    const { getByText } = render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )

    const NavComponent = document.querySelector(".navbar")
    expect(NavComponent).toBeInTheDocument()
})

test("Navbar link should be render on web page", () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>)

    const NavigationLink = document.querySelector(".nav-link")
    expect(NavigationLink).toBeInTheDocument()
})