"use client";

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
  const router=useRouter();
  const handleClick = () => {
    router.push(`/Components/Stats/${username}`);
  };

  const[username,setUsername]=useState(null);
  const[pass,setPass]=useState(null);
  const[active,setActive]=useState(null);

  const handlechange=()=>{
    setActive(true);
    setTimeout(()=>{
      setActive(false);
    },100);
  }
  return (
    <>
      <div id="signin-container" >
        <div id="title">
          <span id="leet">Leet </span>
          <span id="buddy">Buddy</span>
        </div>
        <div id="dummy-signin" style={{border:`1px solid ${active==true? "#ffa116":"grey"}`}}>
          <div id="credentials-container">
            <input placeholder="enter Username"  type="text" id="credentials-box"  onChange={(e)=>{setUsername(e.target.value);handlechange()}} />
            <input placeholder="password..." type="password" id="credentials-box"  onChange={(e)=>{setPass(e.target.value);handlechange()}}/>
          </div>
          <motion.div
            id="signin-button"
            initial={{ scale: 0.1, opacity: 0 }}
            transition={{ type: "tween", duration: 0.01 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => handleClick()}
          >
            <span id="signin">Sign in</span>
            <span id="ok">{arrow}</span>
          </motion.div>
        </div>
      </div>
    </>
  );
}
