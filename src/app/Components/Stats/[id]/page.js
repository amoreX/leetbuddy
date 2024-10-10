"use client";
import axios from 'axios'
import { LeetCode } from "leetcode-query";
import Profiles from "../Components/Profiles/profiles";
import Statistics from "../Components/statistics/statistics";
import Add from "../Components/Add/add";
import Modal from "../Components/addmodal/addmodal";
import "./stats.scss";
import { useRouter } from "next/navigation";
import Leaderboard from "../Components/Leaderboard/leaderboard";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";



export default function Stats({params}) {
  const router=useRouter();
  const search=useSearchParams();
  const [currprofile,setCurrprofile]=useState(params.id);
  const [width, setWidth] = useState(400);
  const [isProfile, setProfile] = useState(false);
  const [ismodal,setModal]=useState(false);
  const [stats,setStats]=useState(null);
  const [profilestats,setProfilestats]=useState(null);
  const [calender,setCalender]=useState(null);
  useEffect(()=>{
    const gettingstats=async()=>{
      const url=`https://alfa-leetcode-api.onrender.com/${currprofile}/solved`;
      setStats(await axios.get(url));
      const url2=`https://alfa-leetcode-api.onrender.com/${currprofile}`;
      setProfilestats(await axios.get(url2));
      // const url3=`https://alfa-leetcode-api.onrender.com/${currprofile}/calendar`;
      // const leetcode = new LeetCode();
      // setCalender(await leetcode.user(currprofile));
    }
    gettingstats();
  },[currprofile]);
  useEffect(()=>{
    // console.log(stats);
    // console.log(stats?.data?.easySolved);
  },[stats])
  useEffect(()=>{
    console.log(calender?.data?.submissionCalendar);
    // console.log(profilestats?.data?.ranking);
  },[calender])
  useEffect(()=>{
    // console.log(params.id);
  },[params])
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
    if (width < 1100 ) {
      setProfile(false);
    } else {
      setProfile(true);
    }
  }, [width]);
  const handlewidth=()=>{
    if (width<1100){
      setProfile(!isProfile);
    }
  }

  const handlemodal=()=>{
    setModal(!ismodal);
  }
  const handleprofile=(p)=>{
    setCurrprofile(p);
  }
  return (
    <>
      <div id="main-container">
        {isProfile && 
          <Profiles handlewidth={handlewidth} currprofile={currprofile} handleprofile={handleprofile}/>
        }
        <Statistics stats={stats} profilestats={profilestats}/>
        <Add handlemodal={handlemodal}/>
        {
          ismodal &&
          <Modal handlemodal={handlemodal}/>
        }
      {(width<1100) &&
      <Leaderboard handlewidth={handlewidth} profilestatus={isProfile}/>
      }
      
      </div>
    </>
  );
}
