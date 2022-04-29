import React from "react"
import { render, screen, fireEvent } from '@testing-library/react'
import Login from "../pages/auth/Login"
import { BrowserRouter } from "react-router-dom"

test("Login forms label should be render in document", () => {
    const { getByText } = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )

    const usernameLabel = getByText(/Username/i)
    const passwordLabel = getByText('Password')

    expect(usernameLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
})

test("Fields must use correct attribute type", () => {
    const { getByLabelText } = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )

    const inputUsername = getByLabelText(/Username/i)
    const inputPassword = getByLabelText(/Password/i)

    expect(inputUsername).toHaveAttribute('type', 'text')
    expect(inputPassword).toHaveAttribute('type', 'password')
})

test("Button login must be render on the document", () => {
    const { getByText } = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )

    const buttonElements = getByText(/Masuk Akun/i)
    expect(buttonElements).toBeInTheDocument()
})