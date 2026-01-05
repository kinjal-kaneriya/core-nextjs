import Link from 'next/link';
import products from '../../data/products.json';

const ProductDetail = async ({ params }) => {
    const { id } = await params;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">404 Product not found</h1>
                    <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
                        Return to product list
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/products"
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 mb-8 transition-colors"
                >
                    <span className="mr-2">←</span> Back to Product List
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    <div className="md:w-1/2 p-8 md:p-12">
                        <span className="uppercase tracking-widest text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {product.category}
                        </span>

                        <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-2">
                            {product.name}
                        </h1>

                        <p className="text-2xl font-bold text-gray-900 mb-6">
                            ${product.price}
                        </p>

                        <div className="border-t border-gray-100 pt-6">
                            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {product.description || "No detailed description available for this item yet."}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;