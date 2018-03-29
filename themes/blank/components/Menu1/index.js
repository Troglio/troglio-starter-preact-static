import {
    React,
    Link
} from "../../vendors"

import style from "./style.css"

class Menu1 extends React.Component {
    onMenuClick = () => {
        this.props.onMenuSelect()
    }

    render(){
        return (
            <div className={`${style.menu}`}>
                <ul>
                    <li className={style.menuItem} onClick={ this.onMenuClick }><Link to="/">Home</Link></li>
                    {this.props.menuItems.map((item, k) => {
                        return <li className={style.menuItem} onClick={ this.onMenuClick } key={k}><Link to={item.url}>{item.text}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Menu1