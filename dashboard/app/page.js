import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-center text-white auth-card auth-animate'>
        <h1 className='text-4xl font-bold mb-4'>Welcome</h1>

        <p className='text-white/80 mb-10'>
          Login to access your dashboard or create a new account to get started.
        </p>

        <div className='flex flex-col gap-4'>
          <Link
            href='/login'
            className='w-full py-3 rounded-lg bg-linear-to-r from-pink-500 to-purple-500 font-semibold hover:scale-[1.02] transition'
          >
            Login
          </Link>

          <Link
            href='/signup'
            className='w-full py-3 border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition'
          >
            Create New Account
          </Link>
        </div>

      </div>
    </div>
  )
}
