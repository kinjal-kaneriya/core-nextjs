import { NextResponse } from 'next/server'

export async function POST(request) {
  const url = new URL('/login', request.url)
  const response = NextResponse.redirect(url)

  response.cookies.set('auth_user', '', {
    path: '/',
    maxAge: 0,
  })

  return response
}
