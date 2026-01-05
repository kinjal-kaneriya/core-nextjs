import Link from 'next/link'

export default function Home() {
  return (
    <section className='min-h-screen bg-[#252645] flex items-center justify-center px-6'>
      <div className='max-w-3xl text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-[#FFB8E4] mb-6'>
          Welcome to My Website
        </h1>

        <p className='text-white text-lg md:text-xl leading-relaxed mb-4'>
          Hi, I am <span className='text-[#F2819B] font-semibold'>Kinjal</span>.
          I am a passionate Full Stack Developer who enjoys learning and
          building modern web applications.
        </p>

        <p className='text-gray-300 text-base md:text-lg mb-8'>
          This website is created using Next.js to understand
          <span className='text-[#FFB8E4] font-medium pl-1.5 pr-1.5'>
            React Server Components
          </span>
          and
          <span className='text-[#FFB8E4] font-medium pl-1.5'>
            Client Components
          </span>
          .
        </p>

        <Link
          href='/about'
          className='inline-block bg-[#F2819B] text-[#252645] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#FFB8E4] transition duration-300'
        >
          Know More About Me
        </Link>
      </div>
    </section>
  )
}
