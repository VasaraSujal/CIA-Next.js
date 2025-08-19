'use client';
import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data.slice(0, 5)); // Get first 5 posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-2">GET Request</h1>
      <p className="text-gray-600 mb-6">Route: /api/posts</p>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-8">
        <a href="/" className="text-blue-500 hover:underline">← Back to Home</a>
      </div>
    </div>
  );
}
