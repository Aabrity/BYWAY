// components/BlogForm.js

import React, { useState } from 'react';

const BlogForm = ({ onSubmit }) => {
  const [blogContent, setBlogContent] = useState('');

  const handleSubmit = () => {
    // Perform any necessary actions, e.g., submit to a backend
    onSubmit(blogContent);
    // Optionally, reset the form state
    setBlogContent('');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Write a Blog Post</h2>
      <textarea
        className="w-full h-40 p-4 border rounded mb-4"
        placeholder="Write your blog post here..."
        value={blogContent}
        onChange={(e) => setBlogContent(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default BlogForm;
