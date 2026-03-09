import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-6">
        Valuable Blogs
      </h1>

      <p className="text-gray-300 mb-10">
        Create and publish blogs easily.
      </p>

      <div className="flex gap-4">

        <Link href="/dashboard">
          <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700">
            Create Blog
          </button>
        </Link>

        <Link href="/articles">
          <button className="bg-gray-700 px-6 py-3 rounded hover:bg-gray-600">
            View Articles
          </button>
        </Link>

      </div>

    </main>
  )
}