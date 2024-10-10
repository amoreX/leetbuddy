"use client"
import { motion } from "framer-motion"
import { useState,useEffect } from "react"
import "./addmodal.scss"
export default function Modal({handlemodal}){
    const [ylocation,setYlocation]=useState("0px");
    const [user,setUser]=useState(null);
    const handleclick=()=>{
        setYlocation("500px");
        setTimeout(()=>{
            handlemodal(user);
        },300)
    }
    useEffect(()=>{
        console.log(user);
    },[user])
    return(
        <>
            <div id="modal-container">
                <div id="box" style={{transform:`translateY(${ylocation})`}}>
                    <input type="text" id="get-user" placeholder="username?" onChange={(e)=>setUser(e.target.value)}></input>
                    <button id="add-user" onClick={()=>handleclick()}>{user?.length > 2 ?"ok":"back"}</button>
                </div>
            </div>
        </>
    )
}