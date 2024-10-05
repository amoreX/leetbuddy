import "./add.scss"

export default function Add({handlewidth,profilestatus}){
    return(
        <>
            <div id="add-container" onClick={()=>handlewidth()}>
                <span id="plus">{profilestatus==true? "<" : "+"}</span>
                <span id="decoration"></span>
            </div>
        </>
    )
}