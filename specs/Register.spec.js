import React from "react"
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Register from "../pages/auth/Register"

test("register forms label should be render in document", () => {
    const { getByText, getByLabelText } = render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    )

    const usernameLabel = getByText(/Username/i)
    const emailLabel = getByText(/Alamat Email/i)
    const passwordLabel = getByText('Password')
    const confirmPasswordLabel = getByText(/Konfirmasi Password/i)

    expect(usernameLabel).toBeInTheDocument()
    expect(emailLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
    expect(confirmPasswordLabel).toBeInTheDocument()
})

test("Fields must use correct attribute type", () => {
    const { getByLabelText, getByText } = render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    )

    const inputUsername = getByLabelText(/Username/i)
    const inputEmail = getByLabelText(/Alamat Email/i)
    const inputPassword = getByLabelText(/Password/i)
    const inputConfirmPassword = getByLabelText(/Konfirmasi Password/i)

    expect(inputUsername).toHaveAttribute('type', 'text')
    expect(inputEmail).toHaveAttribute('type', 'email')
    expect(inputPassword).toHaveAttribute('type', 'password')
    expect(inputConfirmPassword).toHaveAttribute('type', 'password')
})

test("Button register must be render on the document", () => {
    const { getByText } = render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    )

    const buttonElements = getByText(/Daftar Akun/i)
    expect(buttonElements).toBeInTheDocument()
})