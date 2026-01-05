'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='w-full bg-[#252645] shadow-lg'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <h1 className='text-[#FFB8E4] text-2xl font-bold tracking-wide'>KK</h1>

        <div className='flex gap-8 text-white font-medium'>
          <Link
            href='/'
            className='relative hover:text-[#F2819B] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F2819B] after:transition-all after:duration-300 hover:after:w-full'
          >
            Home
          </Link>

          <Link
            href='/about'
            className='relative hover:text-[#F2819B] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F2819B] after:transition-all after:duration-300 hover:after:w-full'
          >
            About
          </Link>

          <Link
            href='/blog'
            className='relative hover:text-[#F2819B] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F2819B] after:transition-all after:duration-300 hover:after:w-full'
          >
            Blog
          </Link>

          <Link
            href='/contact'
            className='relative hover:text-[#F2819B] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F2819B] after:transition-all after:duration-300 hover:after:w-full'
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
