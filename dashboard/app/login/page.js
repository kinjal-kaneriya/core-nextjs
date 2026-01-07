"use client"

import Link from 'next/link'
import { loginAction } from '../actions/auth'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')

    if (!email || !password) {
      alert('All fields are required')
      return;
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address')
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long')
      return;
    }

    try {
      await loginAction(formData)
      alert('Login successful')
      redirect('/dashboard')
    } catch (error) {
      alert(error.message || 'Login failed. Please try again.')
    }

  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 auth-card auth-animate'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-white'>Welcome Back</h1>
          <p className='text-white/70 mt-2'>Login to your dashboard</p>
        </div>

        <form action={loginAction} className='space-y-6'>
          <div>
            <label className='block text-sm text-white/80 mb-1'>
              Email Address
            </label>
            <input
              type='email'
              name='email'
              placeholder='you@example.com'
              className='w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400'
            />
          </div>

          <div>
            <label className="block text-sm text-white/80 mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full rounded-lg bg-white/20 border border-white/30 px-4 py-3 pr-12 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          <button
            type='submit'
            className='w-full py-3 rounded-lg bg-linear-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-[1.02] transition'
          >
            Login
          </button>
        </form>

        <p className='text-center text-white/70 text-sm mt-6'>
          Don’t have an account?{' '}
          <Link
            href='/signup'
            className='text-pink-300 hover:text-pink-400 font-medium'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
