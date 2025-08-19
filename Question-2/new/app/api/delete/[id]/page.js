'use client';
import { useState } from 'react';

export default function DeletePost({ params }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDeletePost = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
        method: 'DELETE',
      });

      // For DELETE requests, JSONPlaceholder returns an empty object
      const data = await response.json();
      setResponse({
        status: response.status,
        statusText: response.statusText,
        data
      });
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-2">DELETE Request</h1>
      <p className="text-gray-600 mb-6">Route: /api/delete/{params.id}</p>

      <div className="space-y-6">
        <button
          onClick={handleDeletePost}
          disabled={loading}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:bg-red-300"
        >
          {loading ? 'Deleting...' : `Delete Post ${params.id}`}
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
