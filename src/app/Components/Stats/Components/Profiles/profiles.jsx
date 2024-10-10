"use client";

import { motion } from "framer-motion";
import "./profile.scss";

export default function Profiles({ handlewidth, currprofile , handleprofile}) {
  const li = ["amoreX", "aarush_dhingra"];
  return (
    <>
      <motion.div
        id="profile-container"
        initial={{ x: -300 }}
        transition={{ type: "tween", duration: 0.28 }}
        animate={{ x: 0 }}
        onClick={() => handlewidth()}
      >
        {li.map((prof, index) => {
          return (
            <div
              id="prof-each"
              key={index}
              style={{
                backgroundColor: prof == currprofile ? "#a0a0a0" : "#282828",
                color: prof == currprofile ? "black" : "white",
              }}
              onClick={()=>handleprofile(prof)}
            >
              {prof}
            </div>
          );
        })}
      </motion.div>
    </>
  );
}
