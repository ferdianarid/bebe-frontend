import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

test("Register Page should be render", () => {
    const { getByText } = render(<BrowserRouter><Register /></BrowserRouter>)

    const heading = document.querySelector(".register-page")
    expect(heading).toBeInTheDocument()
})

test("Login Page should be render", () => {
    const { getByText } = render(<BrowserRouter><Login /></BrowserRouter>)

    const heading = document.querySelector(".login-heading")
    expect(heading).toBeInTheDocument()
})