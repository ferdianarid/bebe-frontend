import React from "react"
import { render } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"
import Mentors from "../pages/Mentors"

test("Title Homepage rendered properly", () => {
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>)

    const heading = document.querySelector(".heading")
    expect(heading).toBeInTheDocument()
})

test("Mentor Page should be render properly", () => {
    render(<BrowserRouter><Mentors /></BrowserRouter>)

    const heading = document.querySelector(".mentor-heading")
    expect(heading).toBeInTheDocument()
})