'use client';
import { useState } from 'react';

export default function CreatePost() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreatePost = async () => {
    setLoading(true);
    try {
      const newPost = {
        title: "Hello",
        body: "Next.js API test",
        userId: 1
      };

      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-2">POST Request</h1>
      <p className="text-gray-600 mb-6">Route: /api/create</p>

      <div className="space-y-6">
        <button
          onClick={handleCreatePost}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? 'Creating...' : 'Create New Post'}
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
