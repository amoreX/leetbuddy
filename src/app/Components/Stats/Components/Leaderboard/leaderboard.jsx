import "./leaderboard.scss"

export default function Leaderboard({handlewidth}){
    return(
        <>
            <div id="leaderboard-container" onClick={()=>handlewidth()}>
                0
            </div>
        </>
    )
}