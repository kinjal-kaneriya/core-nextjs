'use client'

const Error = async ({ error, reset }) => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-red-50 px-4'>
      <div className='max-w-md rounded-xl bg-white p-6 text-center shadow-lg'>
        <h2 className='text-2xl font-bold text-red-600'>
          Oops! Something went wrong
        </h2>

        <p className='mt-4 text-sm text-gray-600'>
          {error?.message || 'Failed to load data. Please try again.'}
        </p>

        <button
          onClick={reset}
          className='mt-6 rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-95'
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default Error
