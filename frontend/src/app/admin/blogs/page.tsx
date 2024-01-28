"use client";

import Popup from "@/Components/Popup";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AdminPage() {
  const [blogContent, setBlogContent] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [category, setCategory] = useState("Normal");
  
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;

  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:8081/admin/dash")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.UserData.username);
        } else {
          setAuth(false);

        }
      })
      .then((err) => console.log(err));
  }, [router]);

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("date", date);
      formData.append("content", blogContent);
      formData.append("category", category);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.post("http://localhost:8081/blogs/postblog", formData);

      console.log("Content posted successfully");
    } catch (error) {
      console.error("Error posting content:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };
  const [id, setId] = useState("");

  const handleBlogDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:8081/blogs/deleteblogs/${id}`
      );
      if (response.data.Status === "Success") {
        alert("Blog deleted successfully");
      } else {
        alert("Deletion error");
      }
    } catch (error) {
      console.error("Deletion error:", error);
    }
  };

  if (!ReactQuill) return null;

  return (
    <>
      {auth ? (
        <div className="flex h-screen bg-gray-100">
      <div className="flex-grow bg-778C49 p-12 mt-16">
        <div className="bg-green-200 p-6 rounded-lg h-full w-full">
          <h2 className="text-2xl font-semibold mb-4">Add Blog Post</h2>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="border rounded-md p-2 w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-600"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="border rounded-md p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          {/* the category  */}

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Category
            </label>
            <select
              id="category"
              className="border rounded-md p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Normal">Normal</option>
              <option value="Trending">Trending</option>
            </select>
          </div>

          <div className="editorContainer mb-4" style={{ height: "600px" }}>
            <label
              htmlFor="blogContent"
              className="block text-sm font-medium text-gray-600"
            >
              Blog Content
            </label>
            {ReactQuill && (
              <div className="editor-wrapper">
                <ReactQuill
                  theme="snow"
                  value={blogContent}
                  onChange={setBlogContent}
                />
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            className="mb-2"
            onChange={handleImageChange}
          />

          {imageFile && (
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Uploaded"
              className="max-w-full h-auto mb-2"
              style={{ maxWidth: "300px", maxHeight: "200px" }}
            />
          )}

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded-md"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
      <div></div>
      <div className="App flex flex-col justify-center">
        <form
          onSubmit={handleBlogDelete}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg text-gray-400"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Delete Blog
          </h2>
          <label>
            Blog ID:
            <input
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full my-5 py-2 bg-red-600 text-white font-semibold rounded-lg"
          >
            Delete Blog
          </button>
        </form>
      </div>
    </div>
      ) : (
        <div>
          <Popup
            message="You are not authenticated"
            buttonText="Login now"
            onClose={() => {
              router.push("/auth");
            }}
          />
        </div>
      )}
    </>
    
  );
}

export default AdminPage;
