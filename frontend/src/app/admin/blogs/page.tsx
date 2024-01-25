"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import Popup from "@/Components/Common/Popup";
import { BlogTable } from "@/Components/Blogs/BlogTable";

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
    <div className="m-5">
      <BlogTable />
    </div>
  );
}

export default AdminPage;
