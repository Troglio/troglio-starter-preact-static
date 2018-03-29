import {
    React
} from "../../vendors"


import style from "./style.css"

export default class MediaContainer extends React.Component {
    constructor(){
        super()
        this.state = { image: "", loading: true };
    }

    componentDidMount() {
        const { src, placeholder } = this.props;
        this.setState({image: placeholder})
        this.loadImage(src);
    }

    componentWillReceiveProps(nextProps) {
        const { src, placeholder } = nextProps;
        // We only invalidate the current image if the src has changed.
        if (src !== this.props.src) {
            this.setState({ image: placeholder, loading: true }, () => {
                this.loadImage(src);
            });
        }
    }
    componentWillUnmount() {
        if (this.image) {
            this.image.onload = null;
            this.image.onerror = null;
        }
    }    

    loadImage = (src) => {
        // If there is already an image we nullify the onload
        // and onerror props so it does not incorrectly set state
        // when it resolves
        if (this.image) {
          this.image.onload = null;
          this.image.onerror = null;
        }
        const image = new Image();
        this.image = image;
        image.onload = this.onLoad;
        image.onerror = this.onError;
        image.src = src;
    }

    onLoad = () => {
        // use this.image.src instead of this.props.src to
        // avoid the possibility of props being updated and the
        // new image loading before the new props are available as
        // this.props.
        this.setState({ image: this.image.src, loading: false });
    }
    onError = (errorEvent) => {
        const { onError } = this.props;
        if (onError) {
            onError(errorEvent);
        }
    }

	render() {
        if (!this.props.children || typeof this.props.children !== 'function') {
            throw new Error(
                `ProgressiveImage requires a function as its only child`
            );
        } else {
            // this.props.children = this.props.children[0]
            return (
                <div className={`${style.mediaContainer} ${this.state.loading && style.loading}`}
                    style={Object.assign({}, this.props.containerStyles, (this.props.displayAsBackground?{backgroundImage:`url(${this.state.image})`}:{}))}
                >
                    {!this.props.displayAsBackground && this.props.children(this.state.image, this.state.loading)}
                </div>
            )
        }
    }    
}

// style={this.props.containerStyles + (this.props.displayAsBackground && 'background-image:url(' + this.state.image + ');')}