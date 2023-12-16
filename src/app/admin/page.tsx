
import React from 'react';

const AdminPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 p-12 text-white">
        {/* Admin Dashboard Section */}
        <div className="mb-12">
          <h1 className="text-2xl font-semibold mb-10 p-10">Admin Dashboard</h1>
        </div>

        {/* Navigation Links */}
        <ul>
          {/* Add Blog Post Section */}
          <li className="mb-4">
            <a href="#add-blog" className="text-gray-300 hover:text-white p-4 px-6 block">
              Add Blog Post
            </a>
          </li>

          {/* Manage Packages Section */}
          <li className='mb-2'>
            <a href="#manage-packages" className="text-gray-300 hover:text-white p-4 px-6 block">
              Manage Packages
            </a>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      {/* ... */}
    </div>
  );
};

export default AdminPage;
