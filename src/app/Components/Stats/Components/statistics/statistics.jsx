
import "./statistics.scss"
import { signOut } from "next-auth/react"
export default function Statistics(){
    return(
        <>
            <div id="statistics-container">
                <div id="title-stats" onClick={()=>signOut({callbackUrl:"/"})}>
                    <span id="leet-stats">Leet</span>
                    <span id="buddy-stats">Buddy</span>
                </div>
            </div>
        </>
    )
}