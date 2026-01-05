import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md text-center bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Welcome to <span className="text-blue-600">My Store</span>
        </h1>

        <Link
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}