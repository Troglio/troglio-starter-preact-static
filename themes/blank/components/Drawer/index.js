import { React, Link } from "../../vendors"

import style from "./style.css"

export default class Drawer extends React.Component {
    render(){
        return (
            <div className={`${style.drawer} ${this.props.isOpened ? style.opened : style.closed}`}>
                {this.props.children}
            </div>
        )
    }
}
