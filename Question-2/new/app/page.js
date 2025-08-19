import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          🚀 Next.js API Routes Demo
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* GET Posts */}
          <Link
            href="/api/posts"
            className="block p-6 bg-white shadow-md hover:shadow-xl rounded-lg border hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              GET Request - View Posts
            </h2>
            <p className="text-gray-600 text-sm">
              Fetches and displays the first 5 posts.
            </p>
          </Link>

          {/* GET Single Post */}
          <Link
            href="/api/posts/1"
            className="block p-6 bg-white shadow-md hover:shadow-xl rounded-lg border hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              GET with Dynamic Route - View Single Post
            </h2>
            <p className="text-gray-600 text-sm">
              View details of a specific post (example: post 1).
            </p>
          </Link>

          {/* POST Create */}
          <Link
            href="/api/create"
            className="block p-6 bg-white shadow-md hover:shadow-xl rounded-lg border hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-semibold text-purple-600 mb-2">
              POST Request - Create New Post
            </h2>
            <p className="text-gray-600 text-sm">Create a new post.</p>
          </Link>

          {/* PUT Update */}
          <Link
            href="/api/update/1"
            className="block p-6 bg-white shadow-md hover:shadow-xl rounded-lg border hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">
              PUT Request - Update Post
            </h2>
            <p className="text-gray-600 text-sm">
              Update an existing post (example: post 1).
            </p>
          </Link>

          {/* DELETE */}
          <Link
            href="/api/delete/1"
            className="block p-6 bg-white shadow-md hover:shadow-xl rounded-lg border hover:border-red-500 transition"
          >
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              DELETE Request - Delete Post
            </h2>
            <p className="text-gray-600 text-sm">
              Delete a post (example: post 1).
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
