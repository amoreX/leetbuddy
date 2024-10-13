"use client";
import axios from "axios";
import "./signin.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function Signin() {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Uploaded to svgrepo.com"
      width="40px"
      height="40px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: "\n\t.linesandangles_een{fill:#111918;}\n",
        }}
      />
      <polygon
        className="linesandangles_een"
        points="15.707,3.293 14.293,4.707 24.586,15 4,15 4,17 24.586,17 14.293,27.293 15.707,28.707   28.414,16 "
      />
    </svg>
  );
  const loadsvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      id="loading-animation"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
          stroke="#ffffff"
          strokeWidth="3.55556"
          strokeLinecap="round"
        />{" "}
      </g>
    </svg>
  );
  const router = useRouter();
  const handleClick = () => {
    const gettingrequest = async () => {
      const p = await axios.post(`/api/register`, {
        email: username,
        password: pass,
      });
      if (p?.data?.authStatus == "True") {
        // alert("Success!");
        // setLoading(false);
        setMessage("Redirecting...")
        router.push(`/Components/Stats/${p?.data?.userId}`);
      }
      if (p?.data?.authStatus == "False") {
        setLoading(false);
        setMessage("Wrong password")
        // alert("Invalid password");
      }
    };
    gettingrequest();
    setLoading(true);
  };

  const [username, setUsername] = useState(null);
  const [pass, setPass] = useState(null);
  const [active, setActive] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlechange = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 100);
  };
  return (
    <>
      <div id="signin-container">
        <div id="title">
          <span id="leet">Leet </span>
          <span id="buddy">Buddy</span>
        </div>
        <div
          id="dummy-signin"
          style={{ border: `1px solid ${active == true ? "#ffa116" : "grey"}` }}
        >
          <div id="credentials-container">
            <input
              placeholder="enter Username"
              type="text"
              id="credentials-box"
              onChange={(e) => {
                setUsername(e.target.value);
                handlechange();
              }}
            />
            <input
              placeholder="password..."
              type="password"
              id="credentials-box"
              onChange={(e) => {
                setPass(e.target.value);
                handlechange();
              }}
            />
          </div>
          <div id="user-message" style={{color:message=="Wrong password"?"red":"green"}}>{message}</div>
          <motion.div
            id="signin-button"
            initial={{ scale: 0.1, opacity: 0 }}
            transition={{ type: "tween", duration: 0.01 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => handleClick()}
          >
            {loading == true ? (
              <div id="loading">{loadsvg}</div>
            ) : (
              <>
                <span id="signin">Sign in</span>
                <span id="ok">{arrow}</span>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
