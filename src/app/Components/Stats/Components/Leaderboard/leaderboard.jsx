import "./leaderboard.scss"

export default function Leaderboard({handlewidth,profilestatus}){
    return(
        <>
            <div id="leaderboard-container" onClick={()=>handlewidth()}>
                {profilestatus==true? "X" : "P"}
            </div>
        </>
    )
}