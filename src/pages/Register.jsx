import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { registerUser } from '../services/authService'

const Register = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({

        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const data =
                await registerUser(formData)

            localStorage.setItem(

                'userInfo',

                JSON.stringify(data)
            )

            navigate('/dashboard')

        } catch (error) {

            console.log(error)

            alert('Registration Failed')
        }
    }

    return (

        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">

            <div className="w-full max-w-md bg-[#0f172a] border border-cyan-500/20 rounded-3xl p-8 shadow-2xl">

                <h1 className="text-4xl font-bold text-center text-cyan-400 mb-2">

                    Register

                </h1>

                <p className="text-gray-400 text-center mb-8">

                    Create your AI Resume Analyzer account

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="block text-gray-300 mb-2">

                            Name

                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            className="w-full bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
                        />

                    </div>

                    <div>

                        <label className="block text-gray-300 mb-2">

                            Email

                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="w-full bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
                        />

                    </div>

                    <div>

                        <label className="block text-gray-300 mb-2">

                            Password

                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Create password"
                            className="w-full bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition duration-300"
                    >

                        Register

                    </button>

                </form>

                <p className="text-gray-400 text-center mt-6">

                    Already have an account?{' '}

                    <Link
                        to="/login"
                        className="text-cyan-400 hover:text-cyan-300"
                    >

                        Login

                    </Link>

                </p>
            </div>
        </div>
    )
}

export default Register