"use client"

import "./signin.scss";
import { motion } from "framer-motion";
import {signIn} from "next-auth/react"
export default function Signin() {
    const arrow=(
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
    const handleClick=()=>{
        setTimeout(() => {
            signIn("google", { callbackUrl: "/Components/Stats" });
        }, 2000);
    };
  return (
    <>
      <div id="signin-container">
        <div id="title">
          <span id="leet">Leet </span>
          <span id="buddy">Buddy</span>
        </div>
        <motion.div id="signin-button"
        initial={{scale:0.1,opacity:0}}
        transition={{type:"tween",duration:0.01}}
        animate={{scale:1,opacity:1}}
        onClick={()=>handleClick()}
        >
            <span id="signin">
                Sign in
            </span>
            <span id="ok">
                {arrow}
            </span>
        </motion.div>
      </div>
    </>
  );
}