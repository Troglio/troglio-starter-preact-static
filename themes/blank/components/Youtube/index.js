import { React } from "../../vendors"

const Youtube = (props) => {
    if (props.id == null) {
        <div></div>
    } else {
        return (
            <div className="media-container youtube" style={{position:"relative", paddingBottom:"56.25%", paddingTop:"30px", height:"0",overflow:"hidden"}}>
                <iframe style={{position:"absolute", top:"0", left:"0", width:"100%",height:"100%"}} type="text/html" src={`https://www.youtube.com/embed/${props.id}?rel=0&showinfo=0`} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Youtube