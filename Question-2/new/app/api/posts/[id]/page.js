'use client';
import { useEffect, useState } from 'react';

export default function SinglePost({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-2">GET Request with Dynamic Route</h1>
      <p className="text-gray-600 mb-6">Route: /api/posts/{params.id}</p>

      {loading ? (
        <p>Loading post...</p>
      ) : post ? (
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.body}</p>
          <p className="text-sm text-gray-500">Post ID: {post.id}</p>
        </div>
      ) : (
        <p>Post not found</p>
      )}

      <div className="mt-8">
        <a href="/" className="text-blue-500 hover:underline">← Back to Home</a>
      </div>
    </div>
  );
}
