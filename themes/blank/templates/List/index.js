import { React, Link } from "../../vendors"

// import MediaContainer from '../../components/MediaContainer'
import Markdown from "../../components/Markdown"

import style from "./style.css"

const Template = ({page}) => {
    return (
        <div className={`${style.page}`}>

            <div className={`${style.body}`}>
                <Markdown children={page.body}/>
            </div>

            {page.data.map(post => {
                return (
                    <div key={post.path} className={`${style.post}`}>
                        <Link to={post.path}> <h3>{post.title}</h3> </Link>
                    </div>
                )
            })}

        </div>
    )
}

export default Template


            
