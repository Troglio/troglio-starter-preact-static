import { React } from "../../vendors"

import style from './style.css'

const CurlyLine = (props) => {
    let {color} = props
    color = color == null ? "#000" : color

    let backgroundGradient = "radial-gradient(ellipse, transparent, transparent 7px, " + color + " 7px, " + color + " 10px, transparent 11px)"
    return (
        <div className={`${style.container}`}>
            <div className={`${style.holder}`}>
                <div style={{position:"absolute", width:"200px", height:"20px", background: backgroundGradient, backgroundSize: "36px 40px"}}></div>
                <div style={{position:"absolute", width:"200px", height:"20px", background: backgroundGradient, backgroundSize: "36px 40px", top: "20px", left: "18px", backgroundPosition: "0px -20px"}}></div>
            </div>
        </div>
    )
}

export default CurlyLine