import React from 'react';

const AdminPage = () => {
  // Stateless variable to track whether to show the add blog container
  const isAddBlogOpen = true; // Set this to true or false based on your logic

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 p-12 text-white">
        <h1 className="text-2xl font-semibold mb-10 p-10">Admin Dashboard</h1>
        <ul>
          <li className="mb-4">
            <a href="#add-blog" className="text-gray-300 hover:text-white p-10 py-4 px-6 block">
              Add Blog Post
            </a>
          </li>
          <li className='mb-2'>
            <a href="#manage-packages" className="text-gray-300 hover:text-white py-4 px-6 block">
              Manage Packages
            </a>
          </li>
        </ul>
      </div>

       {/* Add Blog Container */}
       {isAddBlogOpen && (
        <div className="flex-grow bg-778C49 p-12 mt-16">
          <div className="bg-green-200 p-6 rounded-lg h-full w-full">
            <h2 className="text-2xl font-semibold mb-4">Add Blog Post</h2>
            {/* Text-box example */}
            <div className="mb-4">
              <label htmlFor="blogContent" className="block text-sm font-medium text-gray-600">
                Blog Content
              </label>
              <textarea
                id="blogContent"
                name="blogContent"
                rows= {10}
                className="mt-1 p-2 w-full border rounded-md"
              ></textarea>
            </div>
            {/* Button example */}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Post
            </button>
            {/* Image Container */}
            <div className="bg-gray-400-500 p-4">
              {/* Image upload button example */}
              <input type="file" accept="image/*" className="mb-2" />
              {/* Display uploaded image example */}
              <img
                src="images/Mountains 1.jpg"
                alt="Uploaded"
                className="max-w-90% h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default AdminPage;
