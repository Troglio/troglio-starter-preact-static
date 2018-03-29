import { React, Link } from "../../vendors"
// import MediaContainer from "../../components/MediaContainer"
// import Markdown from "../../components/Markdown"
// import CurlyLine from "../../components/CurlyLine"

import style from "./style.css"

const Template = (props) => {
    return (
        <div className={`${style.page}`}>
            <div className={`${style.body}`}>
                <Link to="/">{"< Go back home"}</Link>
            </div>
        </div>
    )
}

export default Template
