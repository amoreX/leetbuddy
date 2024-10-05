"use client";
import Profiles from "./Components/Profiles/profiles";
import Statistics from "./Components/statistics/statistics";
import Add from "./Components/Add/add";
import Modal from "./Components/addmodal/addmodal";
import "./stats.scss";
import Leaderboard from "./Components/Leaderboard/leaderboard";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Stats() {
  const { data: session } = useSession();
  const [width, setWidth] = useState(400);
  const [isProfile, setProfile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 1100) {
      setProfile(false);
    } else {
      setProfile(true);
    }
  }, [width]);
  const handlewidth=()=>{
    setProfile(!isProfile);
  }
  return (
    <>
      <div id="main-container">
        {isProfile && 
          <Profiles handlewidth={handlewidth}/>
        }
        <Statistics />
        <Add handlewidth={handlewidth} profilestatus={isProfile}/>
        {/* <Modal /> */}
      <Leaderboard handlewidth={handlewidth}/>
      </div>
    </>
  );
}
