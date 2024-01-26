"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface BlogData {
  blog_title: string;
  images: FileList | null;
  blog_category: string;
  blog_content: string;
}

interface BlogFormProps {
  id?: string | number;
}

const BlogForm: React.FC<BlogFormProps> = ({ id }) => {
  const [blogData, setBlogData] = useState<BlogData>({
    blog_title: "",
    images: null,
    blog_category: "",
    blog_content: "",
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8081/blogs/getselectedblog/${id}`)
        .then((response) => {
          const fetchedBlogData = response.data.blog;
          setBlogData(fetchedBlogData);
          setImagePreviews([]); // Clear existing previews
          setIsUpdateMode(true); 
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    }
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      const previews = files.map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string>((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
        });
      });

      Promise.all(previews).then((previewUrls) => {
        setImagePreviews(previewUrls);
      });

      setBlogData({
        ...blogData,
        images: e.target.files,
      });
    }
  };

  const handleBlogContentChange = (content: string) => {
    setBlogData({
      ...blogData,
      blog_content: content,
    });
  };

  const handleBlogSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    if (blogData.images) {
      for (let i = 0; i < blogData.images.length; i++) {
        formData.append(`image`, blogData.images[i]); // Use the same field name "image"
      }
    }

    for (const key in blogData) {
      if (Object.prototype.hasOwnProperty.call(blogData, key)) {
        formData.append(key, (blogData as any)[key]);
      }
    }

    try {
      let response;

      if (isUpdateMode) {
        response = await axios.put(
          `http://localhost:8081/blogs/updateBlog/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:8081/blogs/addBlog",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      if (response.data.message) {
        alert(
          isUpdateMode ? "Blog updated successfully" : "Blog added successfully"
        );
        setBlogData({
          blog_title: "",
          images: null,
          blog_category: "",
          blog_content: "",
        });
        setImagePreviews([]); // Clear existing previews
        setIsUpdateMode(false);
      } else {
        alert("Error adding/updating blog");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleBlogSubmit}
        className="flex flex-col max-h-[74vh] overflow-y-auto"
      >
        <div className="w-auto pb-8 ml-3 text-4xl text-center text-green-700 ">
          <strong>Create new Blog</strong>{" "}
        </div>

        <div className="divcontainer">
          <div className=" name flex m-2 ml-44 mb-5 items-center ">
            <label className="mr-14 text-xl text-slate-700 ">
              Blog Title :
            </label>
            <input
              type="text"
              className="p-1 text-xl rounded-sm w-[60%] border-2 border-slate-300"
              name="blog_title"
              value={blogData.blog_title}
              onChange={handleInputChange}
            />
          </div>

          {/* Blog Category */}
          <div className="location flex m-2 ml-44 mb-5 items-center">
            <label className="mr-2 text-xl text-slate-700">
              Blog Category :
            </label>
            <select
              value={blogData.blog_category}
              onChange={(e) =>
                setBlogData({
                  ...blogData,
                  blog_category: e.target.value,
                })
              }
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%]"
              name="blog_category"
            >
              {/* Add your blog categories as options */}
              <option value="category1">Trending</option>
              <option value="category2">Normal</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Image Files with Preview */}
          <div className="image-files flex ml-44 mb-5 items-start">
            <label className="mr-10 text-xl text-slate-700">Images:</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileInputChange}
            />
            <div className="flex mt-2">
              {imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview-${index}`}
                  className="mr-2 border border-gray-300 rounded-sm"
                  style={{ width: "100px", height: "100px" }}
                />
              ))}
            </div>
          </div>

          <div className="blog-content flex flex-col m-2 ml-44 mb-5 items-start">
            <label className="mr-10 text-xl text-slate-700">
              Blog Content:
            </label>
            <ReactQuill
              value={blogData.blog_content}
              onChange={handleBlogContentChange}
              className="w-[80%] h-36 "
            />
          </div>
        </div>
        <div className="self-center w-48 mt-14 mx-auto">
          <button
            type="submit"
            className="w-full mb-5 p-3 bg-green-600 text-white text-xl rounded hover:bg-green-700 focus:outline-none focus:ring focus:border-green-700 transition"
          >
            {isUpdateMode ? "Update Blog" : "Add Blog"}
          </button>
        </div>
      </form>
    </>
  );
};

export default BlogForm;
