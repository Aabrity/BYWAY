"use client"
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Admin from "@/../../backend/model/AdminModel";

interface SignupFormData {
  email: string;
  password: string;
  username: string;
}

const SignupForm: React.FC = () => {
  const router = useRouter();

  const [values, setValues] = useState<SignupFormData>({
    email: "",
    password: "",
    username: "",
  });


  const [validationError, setValidationError] = useState<{
    [key in keyof SignupFormData]: string;
  }>({
    email: "",
    password: "",
    username: "",
  });

  const [touchedFields, setTouchedFields] = useState<
    Record<keyof SignupFormData, boolean>
  >({
    email: false,
    password: false,
    username: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = new Admin(values.email, values.password, values.username);

    const email = user.getEmail();
    const password = user.getPassword();
    const username= user.getUsername();
   
    setValidationError({
      email: validateEmail(email) ? "" : "Invalid email address.",
      username: validateUsername(username)
      ? ""
      : "",
      password: validatePassword(password)
        ? ""
        : "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one special character.",
    });

    if (Object.values(validationError).some((error) => error !== "")) {
      return;
    }


    try {
      const response = await axios.post("http://localhost:8081/auth/register", {
        email: email,
        password: password,
        username: username,
      });

      if (response.data.Status === "Success") {
        console.log(`Signup successful for ${username}`);
      } else {
        console.error(response.data.Error);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFocus = (name: keyof SignupFormData) => {
    if (validationError[name]) {
      setValidationError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (field: keyof SignupFormData) => {
    setTouchedFields((prev) => ({
      ...prev,
      [field]: true,
    }));

    switch (field) {
      case "email":
        setValidationError((prev) => ({
          ...prev,
          [field]: validateEmail(values.email) ? "" : "Invalid email address.",
        }));
        break;
      case "password":
        setValidationError((prev) => ({
          ...prev,
          [field]: validatePassword(values.password)
            ? ""
            : "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one special character.",
        }));
        break;
      case "username":
        setValidationError((prev) => ({
          ...prev,
          [field]: validateUsername(values.username)
            ? ""
            : "Username must be less than 10 characters, contain at least one number, and no spaces or special characters.",
        }));
        break;
      default:
        break;
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateUsername = (username: string) => {
    const usernameRegex = /^(?=.*\d)[\w]{1,9}$/;
    return usernameRegex.test(username);
  };

  axios.defaults.withCredentials = true;

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
            SIGN UP
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={values.username}
              onBlur={() => handleBlur("username")}
              onChange={handleChange}
              onFocus={() => handleFocus("username")}
              className={`rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ${
                touchedFields.username && validationError.username
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touchedFields.username && validationError.username && (
              <p className="text-red-500">{validationError.username}</p>
            )}
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onBlur={() => handleBlur("email")}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              className={`rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ${
                touchedFields.email && validationError.email
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touchedFields.email && validationError.email && (
              <p className="text-red-500">{validationError.email}</p>
            )}
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onBlur={() => handleBlur("password")}
              onChange={handleChange}
              onFocus={() => handleFocus("password")}
              className={`rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ${
                touchedFields.password && validationError.password
                  ? "border-red-500"
                  : ""
              }`}
            />
            {touchedFields.password && validationError.password && (
              <p className="text-red-500">{validationError.password}</p>
            )}
          </div>
  
          <button
            type="submit"
            className="w-full my-5 py-2 bg-green-600 shadow-lg shadow-green-600/50 hover:shadow-green-500/80 text-white font-semibold rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;