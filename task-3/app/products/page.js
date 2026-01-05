import Link from 'next/link'

const ProductList = async () => {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store', //SSR
  })
  const products = await res.json()

  return (
    <div className='min-h-screen bg-gray-100 px-6 py-10'>
      <h1 className='mb-8 text-center text-3xl font-bold text-gray-800'>
        Products
      </h1>

      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((p) => (
          <div
            key={p.id}
            className='rounded-xl bg-white p-4 shadow-md transition hover:shadow-xl'
          >
            <div className='flex h-40 items-center justify-center'>
              <img
                src={p.image}
                alt={p.title}
                className='h-full object-contain'
              />
            </div>

            <h2 className='mt-4 line-clamp-2 text-sm font-semibold text-gray-700'>
              {p.title}
            </h2>

            <p className='mt-2 text-lg font-bold text-green-600'>${p.price}</p>

            <button className='mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95'>
              <Link href={`/products/${p.id}`}>Show Product</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
