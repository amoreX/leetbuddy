"use client"

import { motion } from "framer-motion"
import "./profile.scss"


export default function Profiles(){
    return(
        <>
            <motion.div id="profile-container"
            initial={{x:-300}}
            transition={{type:"tween",duration:0.28}}
            animate={{x:0}}
            >
                {/* allrught */}
            </motion.div>
        </>
    )
}