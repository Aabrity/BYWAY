"use client"
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "@/Components/Popup/index";

export default function Dash() {
  const [auth, setAuth] = useState<boolean | undefined>();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true); // Add this line

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
        // Delay setting loading to false by 2 seconds
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Add this line
      });
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // Or your loading spinner
  }

  return (
    <>
      {auth ? (
        <div className="bg-slate-300 mx-16 rounded-xl h-5/6 mt-16 mb-44">
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

