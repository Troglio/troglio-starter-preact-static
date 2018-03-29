import { React, Link } from "../../vendors"

// import MediaContainer from '../../components/MediaContainer'
import Markdown from "../../components/Markdown"
import DateFormat from "../../components/DateFormat"

import style from "./style.css"

const Template = ({page}) => {

    return (
        <div>

            <div className={`${style.hero}`}>
                <Markdown children={page.body}/>
            </div>


            {page.data.map(post => {
                return (
                    <div className={`${style.post}`} key={post.path}>
                        <Link to={post.path}>
                            <div className={`${style.wrapper}`}>
                                <span className={`${style.title}`}>{post.title}</span>
                                <div className={`${style.date}`}><DateFormat date={post.date || "2018-01-01"} format={"'YY MMM DD"} lang="en" /></div>
                            </div>
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}

export default Template


            
