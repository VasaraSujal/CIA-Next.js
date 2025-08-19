'use client';
import React, { useState, useEffect } from 'react';

export default function BlogPost({
  params,
}: {
  params: { id: string }
}) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Example fetch - replace with your actual API endpoint
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${params.id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Blog Post ID: {params.id}</h1>
      {/* Add more post content rendering here */}
    </div>
  );
}