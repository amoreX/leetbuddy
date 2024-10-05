import "./add.scss"

export default function Add({handlemodal}){
    return(
        <>
            <div id="add-container" onClick={()=>handlemodal()}>
                <span id="plus">+</span>
                <span id="decoration"></span>
            </div>
        </>
    )
}