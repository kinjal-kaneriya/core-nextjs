import { NextResponse } from 'next/server'
import { users } from '@/lib/users'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  const body = await request.json()
  const { email, password } = body

  if (!email || !password) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 },
    )
  }

  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 401 },
    )
  }

  const passCheck = await bcrypt.compare(password, user.password)
  if (!passCheck) {
    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 401 },
    )
  }

  const response = NextResponse.json(
    { message: 'Login successful' },
    { status: 200 },
  )

  response.cookies.set(
    'auth_user',
    JSON.stringify({ name: user.name, email: user.email }),
    {
      httpOnly: true,
      path: '/',
    },
  )

  return response
}
