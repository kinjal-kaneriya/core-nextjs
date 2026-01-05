import Link from 'next/link'

const Product = async ({ params }) => {
  const { id } = await params

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 10 }, // ISR
  })
  const product = await res.json()

  return (
    <div className='min-h-screen bg-gray-100 px-6 py-10 flex flex-col justify-around items-center'>
      <div className='mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-lg'>
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <img
              src={product.image}
              alt={product.title}
              className='h-80 object-contain'
            />
          </div>

          <div>
            <h1 className='text-2xl font-bold text-gray-800'>
              {product.title}
            </h1>

            <p className='mt-4 text-gray-600'>{product.description}</p>

            <p className='mt-6 text-3xl font-bold text-green-600'>
              ${product.price}
            </p>

            <span className='mt-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700'>
              {product.category}
            </span>
          </div>
        </div>
      </div>

      <Link
        href='/products'
        className='w-48 inline-flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-300 hover:text-gray-900'
      >
        ← Back to Product List
      </Link>
    </div>
  )
}

export default Product
