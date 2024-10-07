"use client"

import { motion } from "framer-motion"
import "./profile.scss"


export default function Profiles({handlewidth}){
    return(
        <>
            <motion.div id="profile-container"
            initial={{x:-300}}
            transition={{type:"tween",duration:0.28}}
            animate={{x:0}}
            onClick={()=>handlewidth()}
            >
                {/* allrught */}
                <div onClick={()=>handlewidth()}>back</div>
            </motion.div>
        </>
    )
}