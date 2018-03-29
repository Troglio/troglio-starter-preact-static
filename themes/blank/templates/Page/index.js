import { React } from "../../vendors"
// import MediaContainer from "../../components/MediaContainer"
import Markdown from "../../components/Markdown"
// import CurlyLine from "../../components/CurlyLine"

import style from "./style.css"

const Template = (props) => {
    let {cover} = props.page
    return (
        <div className={`${style.page}`}>
            <div className={`${style.body}`}>
                <Markdown children={props.page.body}/>
            </div>
        </div>
    )
}

export default Template
