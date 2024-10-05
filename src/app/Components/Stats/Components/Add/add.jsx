import "./add.scss"

export default function Add({handlewidth}){
    return(
        <>
            <div id="add-container" onClick={()=>handlewidth()}>
                <span id="plus">+</span>
                <span id="decoration"></span>
            </div>
        </>
    )
}