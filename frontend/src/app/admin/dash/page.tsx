"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Popup from "@/Components/Popup/index";

export default function Dash() {
  const [auth, setAuth] = useState(false);
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
        }
      })
      .then((err) => console.log(err));
  }, [router]);

  return (
    <>
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
