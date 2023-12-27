"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PackageInputForm() {
  const [formState, setFormState] = useState({
    title: "",
    location_id: 0,
    about: "",
    guidance_language: "",
    whats_included: "",
    what_to_expect: "",
    departure_and_return: "",
    accessibility: "",
    additional_info: "",
  });
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;

  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:8081/auth/dash")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          alert("Error");
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, [router]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: parseInt(e.target.value, 10),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/packages/addpackages", formState)
      .then((res) => {
        if (res.data.Status === "Success") {
          alert(` ${formState.title} created successfully`);
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  const [location, setLocation] = useState("");
  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/packages/addlocations", { location })
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(` Rohan`);
        } else {
          console.log(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-row justify-center py-32 ">
      {auth ? (
        <div className="flex flex-col w-1/2 ">
          <div className="max-w-[600px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              Package Information
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col text-gray-400 mt-4"
            >
              <div className="flex flex-col mb-4">
                <label className="mb-1">Package Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formState.title}
                  onChange={handleInputChange}
                  className="rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">Location Id:</label>
                <input
                  type="number"
                  name="location_id"
                  value={formState.location_id}
                  onChange={handleNumberChange}
                  className="rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">About:</label>
                <textarea
                  name="about"
                  value={formState.about}
                  onChange={handleTextareaChange}
                  className="rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">Guidance Language:</label>
                <input
                  type="text"
                  name="guidance_language"
                  value={formState.guidance_language}
                  onChange={handleInputChange}
                  className="rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">What&apos;s included:</label>
                <textarea
                  name="whats_included"
                  value={formState.whats_included}
                  onChange={handleTextareaChange}
                  className="rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">What to expect:</label>
                <textarea
                  name="what_to_expect"
                  value={formState.what_to_expect}
                  onChange={handleTextareaChange}
                  className="rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">Departure and return:</label>
                <textarea
                  name="departure_and_return"
                  value={formState.departure_and_return}
                  onChange={handleTextareaChange}
                  className="rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">Accessibility:</label>
                <textarea
                  name="accessibility"
                  value={formState.accessibility}
                  onChange={handleTextareaChange}
                  className="rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">Additional Info:</label>
                <textarea
                  name="additional_info"
                  value={formState.additional_info}
                  onChange={handleTextareaChange}
                  className="rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full my-5 py-2 bg-blue-500 text-white font-semibold rounded-lg"
              >
                Add Package
              </button>
            </form>
          </div>

          <div className="bg-transparent w-20 "></div>

          <div className="App flex flex-col justify-center">
            <form
              onSubmit={handleSubmit1}
              className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
            >
              <h2 className="text-4xl dark:text-white font-bold text-center">
                Add Location
              </h2>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="w-full my-5 py-2 bg-green-600 text-white font-semibold rounded-lg"
              >
                Add Location
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h3>{message}</h3>
          <h3>Login now</h3>
          <Link href="/admin" className="btn btn-primary">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
