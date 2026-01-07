import { NextResponse } from 'next/server'
import { users } from '@/lib/users'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  const body = await request.json()
  const { name, email, password } = body

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 },
    )
  }
  
  if(password.length < 8) {
    return NextResponse.json(
      { message: 'Password must be at least 8 characters long' },
      { status: 400 },
    )
  }

  const userExists = users.find((u) => u.email === email)
  if (userExists) {
    return NextResponse.json(
      { message: 'User already exists' },
      { status: 409 },
    )
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  users.push({ name, email, password: hashedPassword })

  const response = NextResponse.json(
    { message: 'Signup successful' },
    { status: 201 },
  )

  response.cookies.set('auth_user', JSON.stringify({ name, email }), {
    httpOnly: true,
    path: '/',
  })

  return response
}
