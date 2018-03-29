import { React } from "../../vendors"

const Vimeo = (props) => {
    if (props.id == null) {
        <div></div>
    } else {
        return (
            <div className="media-container vimeo" style={{position:"relative", paddingBottom:"56.25%", paddingTop:"30px", height:"0",overflow:"hidden"}}>
                <iframe type="text/html" style={{position:"absolute", top:"0", left:"0", width:"100%",height:"100%"}}  src={`https://player.vimeo.com/video/${props.id}`} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
        )
    }
}

export default Vimeo