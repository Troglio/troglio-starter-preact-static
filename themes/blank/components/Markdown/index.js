import { React, MarkdownToJsx, Link } from "../../vendors"
import style from "./style.css"
import Instagram from "../Instagram"
import Twitter from "../Twitter"
import Vimeo from "../Vimeo"
import Youtube from "../Youtube"
import CurlyTitle from "../CurlyTitle"
const RoutedLink = (props) => (<Link to={props.href}>{props.children}</Link>)
const NewH1 = (props) => (<CurlyTitle color={"#e2b39b"}>{props.children}</CurlyTitle>)

const overrides = {
    "h1":{ "component": NewH1 },
    "a":{ "component": RoutedLink },
    "Instagram": {"component": Instagram},
    "Twitter": {"component": Twitter},
    "Vimeo": {"component": Vimeo},
    "Youtube": {"component": Youtube},
}

export default class Markdown extends React.Component {
    render(){
        return (
            <MarkdownToJsx children={this.props.children || ''} options={{ forceBlock: true, overrides }} />
        )
    }
}

