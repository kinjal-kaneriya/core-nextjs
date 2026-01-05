const Loader = async () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='flex flex-col items-center gap-4'>
        <div className='h-14 w-14 animate-spin rounded-full border-4 border-blue-300 border-t-blue-600'></div>

        <p className='text-lg font-semibold tracking-wide text-blue-700'>
          Loading products...
        </p>
      </div>
    </div>
  )
}

export default Loader
