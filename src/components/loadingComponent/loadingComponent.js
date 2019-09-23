import React from 'react';
import { getRandomIcon, getBackground} from '../../helpers/loadingComponentHelper';
import './loadingComponent.scss';

class LoadingComponent extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            icon: "",
            counter: 1,
            background: 'sky-day',
            interval: null
        }
    }


    componentDidMount() {
        this.changeIcon();
        this.createInterval();
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    createInterval = () => {
        const interval = setInterval(() => {
            if(this.state.counter < 6){
                this.setState(prevState => ({
                    counter: prevState.counter + 1
                }))
                }
            else {
                this.setState({counter: 1});
            }
            this.changeIcon();
            this.changeBackground();
        }, 740);

        this.setState({interval});
    }

    changeIcon = () => {
        const { counter, icon } = this.state;
        const newIcon = getRandomIcon(counter, icon);
        this.setState({icon: newIcon});
    }

    changeBackground = () => {
        const { counter, icon } = this.state;
        const background = getBackground(counter);
        this.setState({background})
    }


    render() {
        const { icon, background } = this.state;
        return (
            <div className="loading-component">
                <div className="loading-component__text">
                    LOADING
                </div>
                <div className="half-circle half-circle__spin">
                    <div className="icon-container">
                        <i className={`icon icon-${icon}`}/>
                    </div>
                </div>
                <div className={`half-circle half-circle__background half-circle__background--${background}`}/>
            </div>
        )
    }

}
export default LoadingComponent;