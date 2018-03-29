import { React } from "../../vendors"

import style from "./style.css"

class Instagram extends React.Component {
    // <iframe type="text/html" src={`//instagram.com/p/${props.id}/embed/`} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>

        // <blockquote className="instagram-media" data-instgrm-captioned  data-instgrm-version="4" style={{background:"#FFF", border:"0", borderRadius:"3px", boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", margin:"1px", maxWidth:"658px", padding:"0", width:"99.375%", width:"-webkit-calc(100% - 2px)", width:"calc(100% - 2px)"}}>
        //     <a href={`https://www.instagram.com/p/${props.id}/`}></a> 
        // </blockquote>
    // <script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

    // <img src={`https://instagram.com/p/${props.id}/media/?size=m`} />

    // <iframe className="instagram-media instagram-media-rendered lazyloading" id="instagram-embed-1" src="https://www.instagram.com/p/BeD0TU0jCkF/embed/captioned/?cr=1&amp;v=8&amp;wp=1316#%7B%22ci%22%3A0%2C%22os%22%3A1419.8%7D" allowtransparency="true" data-instgrm-payload-id="instagram-media-payload-1" scrolling="no" style={{background:"rgb(255, 255, 255) none repeat scroll 0% 0%", border:"1px solid rgb(219, 219, 219)", boxShadow:"none", margin:"0px 0px 12px", maxWidth:"658px", padding:"0px", width:"calc(100% - 2px)", borderRadius:"4px", display:"block"}} data-was-processed="true" frameBorder="0"></iframe>

    render(){
        if (this.props.id == null) {
            <div></div>
        } else {
            return (
                <div className={`${style.wrapper}`}>
                    <iframe type="text/html" src={`//instagram.com/p/${this.props.id}/embed/`} 
                    frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen
                    style={{position:"absolute", width:"100%", height:"100%", border:"1px solid #ddd", borderRadius:"4px", maxWidth:"500px", transform:"translate(-50%,0)", left: "50%"}}
                    >
                    </iframe>
                </div>
            )
        }
    }
}

export default Instagram