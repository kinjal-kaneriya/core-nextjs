export default function AboutPage() {
  return (
    <section className='min-h-screen bg-[#252645] px-6 py-16'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-[#FFB8E4] mb-6 text-center'>
          About Me
        </h1>

        <p className='text-gray-300 text-lg leading-relaxed mb-12 text-center'>
          My name is{' '}
          <span className='text-[#F2819B] font-semibold'>Kinjal Kaneriya</span>.
          I have completed my Bachelor's degree and also completed a Full Stack
          Development course from{' '}
          <span className='text-[#FFB8E4] font-medium'>
            Red & White Institute
          </span>
          .
        </p>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-[#1f203f] rounded-xl p-6 shadow-lg'>
            <h2 className='text-2xl font-semibold text-[#F2819B] mb-4'>
              Skills
            </h2>
            <ul className='space-y-2 text-gray-300'>
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• JavaScript</li>
              <li>• React.js</li>
              <li>• Node.js</li>
              <li>• MongoDB</li>
            </ul>
          </div>

          <div className='bg-[#1f203f] rounded-xl p-6 shadow-lg'>
            <h2 className='text-2xl font-semibold text-[#F2819B] mb-4'>
              Hobbies
            </h2>
            <ul className='space-y-2 text-gray-300'>
              <li>• Reading</li>
              <li>• Traveling</li>
              <li>• Playing indoor games</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
