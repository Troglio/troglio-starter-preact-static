import {
    React,
    Link
} from "../../vendors"

import Menu from "../../components/Menu1"
import Drawer from "../../components/Drawer"
import TopBar from "../../components/TopBar"
import IosClose from '../../components/Icons/IosClose'
import IosMenu from '../../components/Icons/IosMenu'

import "../../global.less"
import style from "./style.css"

class Layout extends React.Component {
    constructor(){
        super()
        this.state = { isDrawerOpened: false };
    }

    toggleDrawer = () => {
      this.setState( {isDrawerOpened: !this.state.isDrawerOpened} );
    }
    
    render(){
        let {site} = this.props
        let menuItems = (site.menu && site.menu.items) || []

        return (
            <div className={style.page}>
                <TopBar 
                    onClickLeft={() => {} }
                    iconLeft={() => (<Link to={"/"}><div className={`${style.title}`}>{site.title}</div></Link>) }
                    onClickRight={ this.toggleDrawer } 
                    iconRight={ this.state.isDrawerOpened ? IosClose : IosMenu }
                />
                {this.props.children}
                <Drawer isOpened={this.state.isDrawerOpened}>
                    <Menu onMenuSelect={this.toggleDrawer} menuItems={menuItems}/>
                </Drawer>
            </div>
        )
    }
}


export default Layout