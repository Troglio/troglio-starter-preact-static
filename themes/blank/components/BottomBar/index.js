import {
    React
} from "../../vendors"

import style from "./style.css"

class BottomBar extends React.Component {
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
            <div className={`${style.bottomBar}`}>
                { this.props.onClickLeft && this.props.iconLeft ? (
                    <div className={`${style.button}`} onClick={ this.actionLeft }>
                        {this.props.iconLeft()}
                    </div>
                    ):(<div></div>)
                }
                { this.props.onClickMiddle && this.props.iconMiddle ? (
                    <div className={`${style.button}`} onClick={ this.actionMiddle }>
                        {this.props.iconMiddle()}
                    </div>
                    ):(<div></div>)
                }
                { this.props.onClickRight && this.props.iconRight ? (
                    <div className={`${style.button}`} onClick={ this.actionRight }>
                        {this.props.iconRight()}
                    </div>
                    ):(<div></div>)
                }
            </div>
        )
    }
}

export default BottomBar