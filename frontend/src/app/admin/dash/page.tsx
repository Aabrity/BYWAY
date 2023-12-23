"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Dash() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;

  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/dash")
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

  return (
    <div className="container mt-4">
      {auth ? (
        <div>
          <h3>You are authorized {name}</h3>
          <button
            onClick={() => {
              router.push("/admin/dash");
            }}
          ></button>
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