import { React, MarkdownToJsx, Link } from "../../vendors"
import style from "./style.css"

import CurlyLine from "../CurlyLine"

const CurlyTitle = (props) => {
    return (
        <div className={`${style.titleBlock}`}>
            <h1 className={`${style.title}`}>{props.children}</h1>
            <CurlyLine color={props.color}/>
        </div>
    )
}

export default CurlyTitle