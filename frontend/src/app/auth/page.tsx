
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Loginpage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/auth/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          router.push("/admin/dash");
        } else {
          alert(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full">
      <div className="hidden sm:block">
        <img
          className="w-3/4 h-full object-cover"
          src="/assets/login.png"
          alt=""
        />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/assets/logos/logodark.png"
              width={100}
              alt="Byway Admin Portal"
            />
          </div>
          <h2 className="text-4xl dark:text-white font-bold text-center mt-10">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              type="email"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              type="password"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full my-5 py-2 bg-green-600 shadow-lg shadow-green-600/50 hover:shadow-green-500/80 text-white font-semibold rounded-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
