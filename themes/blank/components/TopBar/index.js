import {
    React
} from "../../vendors"

import style from "./style.css"

class TopBar extends React.Component {
    actionLeft = () => {
      this.props.onClickLeft()
    }
    actionMiddle = () => {
      this.props.onClickMiddle()
    }
    actionRight = () => {
      this.props.onClickRight()
    }
  
    render(){  
      return (
            <div className={`${style.topBar}`}>
                <div className={`${style.placeholder} ${style.left}`}>
                    { this.props.onClickLeft && this.props.iconLeft ? (
                        <div className={`${style.button}`} onClick={ this.actionLeft }>
                            {this.props.iconLeft()}
                        </div>
                        ):(<div></div>)
                    }
                </div>
                <div className={`${style.placeholder}`}>
                    { this.props.onClickMiddle && this.props.iconMiddle ? (
                        <div className={`${style.button}`} onClick={ this.actionMiddle }>
                            {this.props.iconMiddle()}
                        </div>
                        ):(<div></div>)
                    }
                </div>
                <div className={`${style.placeholder} ${style.right}`}>
                    { this.props.onClickRight && this.props.iconRight ? (
                        <div className={`${style.button}`} onClick={ this.actionRight }>
                            {this.props.iconRight()}
                        </div>
                        ):(<div></div>)
                    }
                </div>
            </div>
        )
    }
}

export default TopBar