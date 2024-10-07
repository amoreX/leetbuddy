"use client";
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
  const [width, setWidth] = useState(400);
  const [isProfile, setProfile] = useState(false);
  const [ismodal,setModal]=useState(false);
  useEffect(()=>{
    console.log(params.id);
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
  return (
    <>
      <div id="main-container">
        {isProfile && 
          <Profiles handlewidth={handlewidth}/>
        }
        <Statistics />
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
