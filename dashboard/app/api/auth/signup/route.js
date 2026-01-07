import { NextResponse } from 'next/server'
import { users } from '@/lib/users'

export async function POST(request) {
  const body = await request.json()
  const { name, email, password } = body

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: 'All fields are required' },
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

  users.push({ name, email, password })

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
