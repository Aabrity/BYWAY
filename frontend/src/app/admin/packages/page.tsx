"use client"
import React, { useState } from "react";
import axios from "axios";

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
      .post("http://localhost:8081/api/packages", formState)
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
      .post("http://localhost:8081/api/locations", { location })
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
    <>
      <div className="mt-24">
        <form
          onSubmit={handleSubmit}
          className="max-w-[800px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Package Information
          </h2>
          <ul className="flex flex-col text-gray-400 py-2 space-y-4">
            <li>
              <label>Package Title:</label>
              <input
                type="text"
                name="title"
                value={formState.title}
                onChange={handleInputChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </li>
            <li>
              <label>Location Id:</label>
              <input
                type="number"
                name="location_id"
                value={formState.location_id}
                onChange={handleNumberChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </li>
            <li>
              <label>About:</label>
              <textarea
                name="about"
                value={formState.about}
                onChange={handleTextareaChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </li>
            <li>
              <label>Guidance Language:</label>
              <input
                type="text"
                name="guidance_language"
                value={formState.guidance_language}
                onChange={handleInputChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </li>
            <li>
              <label>What&apos;s included:</label>
              <textarea
                name="whats_included"
                value={formState.whats_included}
                onChange={handleTextareaChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </li>
            <li>
              <label>What to expect:</label>
              <textarea
                name="what_to_expect"
                value={formState.what_to_expect}
                onChange={handleTextareaChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </li>
            <li>
              <label>Departure and return:</label>
              <textarea
                name="departure_and_return"
                value={formState.departure_and_return}
                onChange={handleTextareaChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </li>
            <li>
              <label>Accessibility:</label>
              <textarea
                name="accessibility"
                value={formState.accessibility}
                onChange={handleTextareaChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </li>
            <li>
              <label>Additional Info:</label>
              <textarea
                name="additional_info"
                value={formState.additional_info}
                onChange={handleTextareaChange}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              />
            </li>
          </ul>
          <button
            type="submit"
            className="w-full my-5 py-2 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Add Package
          </button>
        </form>

        <div className="App">
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
    </>
  );
}
