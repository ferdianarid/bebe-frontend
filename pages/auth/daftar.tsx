import React, { SyntheticEvent, useState } from 'react'
import PagesLayouts from "layouts/HomeLayouts"
import Descriptions from 'components/atoms/Descriptions'
import Link from 'next/link'

const Register: React.FC = () => {
    const API_URL = `http://localhost:5000/apis`

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const CreateAccount = (event: SyntheticEvent) => {
        event.preventDefault()
        const data = { username, name, email, password, confirmPassword }

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        const response = fetch(`${API_URL}/daftar`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <React.Fragment>
            <PagesLayouts>
                <div className="max-w-2xl m-auto mt-10 text-center">
                    <h1 className="register-page text-[2rem] font-bold text-green-700 md:text-heading-lg">Daftar dan Akses Kursus</h1>
                    <Descriptions>Menunggu apalagi, ayo segera daftakan dirimu dan nikmati kursus favoritmu</Descriptions>
                </div>
                <form onSubmit={CreateAccount} className="max-w-sm mx-auto mt-8 mb-8 border border-gray-300 py-8 px-10">
                    {/* <!-- Field Username --> */}
                    <div className="mb-4">
                        <label htmlFor='username' aria-labelledby='username' className="block text-gray-900 text-sm font-medium mb-2">Username <span className="text-red-600">*</span></label>
                        <input type="text" required id="username" value={username} name="username" onChange={event => setUsername(event.target.value)} placeholder="Masukkan username" className="appereance-none border border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight" />
                    </div>

                    {/* <!-- Field Email --> */}
                    <div className="mb-4">
                        <label htmlFor='email' aria-labelledby='email' className="block text-gray-900 text-sm font-medium mb-2">Alamat Email <span className="text-red-600">*</span></label>
                        <input type="email" required id="email" value={email} name="email" onChange={event => setEmail(event.target.value)} placeholder="Masukkan alamat email" className="appereance-none border border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight" />
                    </div>

                    {/* <!-- Field Password --> */}
                    <div className="mb-4">
                        <label htmlFor='password' aria-labelledby='password' className="block text-gray-900 text-sm font-medium mb-2">Password <span className="text-red-600">*</span></label>
                        <input type="password" required id="password" value={password} name="password" onChange={event => setPassword(event.target.value)} placeholder="Masukkan password" className="appereance-none border border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight" />
                    </div>

                    {/* <!-- Field Confirm Password --> */}
                    <div className="mb-4">
                        <label htmlFor='password' aria-labelledby='konfirmasi password' className="block text-gray-900 text-sm font-medium mb-2">Konfirmasi Password <span className="text-red-600">*</span></label>
                        <input type="password" required id="confirmPassword" value={confirmPassword} name="confirmPassword" onChange={event => setConfirmPassword(event.target.value)} placeholder="Masukkan konfirmasi password" className="appereance-none border border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight" />
                    </div>

                    {/* <!-- Button Register --> */}
                    <button type="submit" aria-labelledby='register' className="py-3 mt-4 text-sm text-white px-4 bg-green-600 hover:bg-green-800 w-full">
                        <p className="text-sm font-bold">Daftar Akun</p>
                    </button>

                    <p className="text-xs font-medium text-gray-800 text-center mt-5">Kamu sudah punya akun ?</p>

                    {/* <!-- Button Login --> */}
                    <Link href={'/authentication/masuk'}>
                        <button type="submit" className="py-3 mt-4 text-sm text-green-600 px-4 bg-white hover:bg-green-100 w-full">
                            <p className="text-sm font-bold">Masuk Akun</p>
                        </button>
                    </Link>
                </form>
            </PagesLayouts>
        </React.Fragment >
    )
}

export default Register