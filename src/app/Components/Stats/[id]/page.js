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
  const [currprofile,setCurrprofile]=useState(null);
  const [width, setWidth] = useState(400);
  const [isProfile, setProfile] = useState(false);
  const [ismodal,setModal]=useState(false);
  const [stats,setStats]=useState(null);
  const [profilestats,setProfilestats]=useState(null);
  const [calender,setCalender]=useState(null);
  const [friendslist,setFriendslist]=useState(null);
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
    if(currprofile){
      gettingstats();
    }
  },[currprofile]);
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
  // useEffect(()=>{
  //   console.log(stats);
  // },[stats]);

  const handlemodal=(friend)=>{
    setModal(!ismodal);
    const addFriend=async()=>{
      if(friend){
        const check=await axios.get(`https://alfa-leetcode-api.onrender.com/${friend}`);
        if(check.data.username){
          const answer=await axios.post("http://localhost:8000/user/add",{
            userId:params.id,
            friendId:friend
          })
          if(answer.status===200){
            alert("Friend added succesfully!");
            window.location.reload();          }
        }
        else{
          alert("User does not exist");
        }
      }
    }
    addFriend();
  }

useEffect(() => {
  const obtainingfriends = async () => {
    const friend_data = await axios.post("http://localhost:8000/user/friends", {
      userId:params.id,
    });
    setFriendslist(friend_data?.data?.friends);
  };
    obtainingfriends();
}, []);


useEffect(()=>{
  console.log(friendslist);
  if(friendslist){
    setCurrprofile(friendslist[0])
  }
},[friendslist]);

  const handleprofile=(p)=>{
    setCurrprofile(p);
  }
  return (
    <>
      <div id="main-container">
        {isProfile && 
          <Profiles handlewidth={handlewidth} currprofile={currprofile} handleprofile={handleprofile} friendlist={friendslist}/>
        }
        <Statistics stats={stats} profilestats={profilestats} friendlist={friendslist}/>
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
