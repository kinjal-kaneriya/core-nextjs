import Link from 'next/link';
import products from '../data/products.json';

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Our Premium Collection
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-200"
                        >

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-semibold text-gray-800">{p.name}</h2>
                                    <span className="text-blue-600 font-bold text-lg">${p.price}</span>
                                </div>

                                <Link
                                    href={`/products/${p.id}`}
                                    className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded-lg transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}