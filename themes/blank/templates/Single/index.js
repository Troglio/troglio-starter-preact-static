import { React } from "../../vendors"
import MediaContainer from "../../components/MediaContainer"
import Markdown from "../../components/Markdown"
import CurlyTitle from "../../components/CurlyTitle"

import style from "./style.css"

const Template = (props) => {
    let {cover} = props.page
    return (
        <div className={`${style.page}`}>

            <div className={`${style.title}`} >
                <CurlyTitle color={"#e2b39b"} children={props.page.title}/>
            </div>

            <div className={`${style.cover}`} >
                {
                    cover != null && (
                        <MediaContainer src={cover.url} placeholder={cover.minurl}
                            displayAsBackground={false}
                            containerStyles={{backgroundColor:cover.edgecolor, paddingBottom:(cover.ratio*100)+"%"}}>
                            {(src) => (
                                <img src={src} alt={cover.name}/>
                            )}
                        </MediaContainer>
                    )
                }
            </div>
            <div className={`${style.body}`}>
                <Markdown children={props.page.body}/>
            </div>
        </div>
    )
}

export default Template
