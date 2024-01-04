"use client";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    

    try {
      const response = await axios.post("http://localhost:8081/auth/register", {
        username,
        email,
        password,
      });

      console.log("Signup form submitted:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
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
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        > <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/assets/logos/logodark.png"
          width={100}
          alt="Byway Admin Portal"
        />
      </div>
      <h2 className="text-4xl dark:text-white font-bold text-center mt-10">
        SIGN UP
      </h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-full "
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-full"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full my-5 py-2 bg-green-600 shadow-lg shadow-green-600/50 hover:shadow-green-500/80 text-white font-semibold rounded-lg"
              
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
