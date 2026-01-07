import { NextResponse } from 'next/server'

export function middleware(request) {
  const authCookie = request.cookies.get('auth_user')
  console.log("Middleware running:", request.nextUrl.pathname);

  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')

  if (isDashboard && !authCookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
