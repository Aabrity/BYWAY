"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Popup from "@/Components/Popup/index";

export default function Dash() {
  const [auth, setAuth] = useState<boolean | undefined>();
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
      .catch((err) => console.log(err));
  }, [router]);

  return (
    <>
      {auth === undefined ? (
        <>loading....</>
      ) : auth === false ? (
        <div>
          <Popup
            message="You are not authenticated"
            buttonText="Login now"
            onClose={() => {
              router.push("/auth");
            }}
          />
        </div>
      ) : (
        <div>
          <h3>You are authorized {name}</h3>
          <button
            onClick={() => {
              router.push("/admin/dash");
            }}
          ></button>
        </div>
      )}
    </>
  );
}
