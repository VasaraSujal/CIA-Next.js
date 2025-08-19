'use client';
import { useState } from 'react';

export default function UpdatePost({ params }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpdatePost = async () => {
    setLoading(true);
    try {
      const updatedPost = {
        title: "Updated Title",
        body: "This post has been updated using Next.js",
        userId: 1,
      };

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-2">PUT Request</h1>
      <p className="text-gray-600 mb-6">Route: /api/update/{params.id}</p>

      <div className="space-y-6">
        <button
          onClick={handleUpdatePost}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
        >
          {loading ? 'Updating...' : `Update Post ${params.id}`}
        </button>

        {response && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">API Response:</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <div className="mt-8">
        <a href="/" className="text-blue-500 hover:underline">← Back to Home</a>
      </div>
    </div>
  );
}
