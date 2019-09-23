import React from 'react';
import { getRandomIcon, getBackground} from '../../helpers/loadingComponentHelper';
import classNames from 'classnames'
import './loadingComponent.scss';

class LoadingComponent extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            icon: "",
            counter: 1,
            counterAnimation: 1,
            background: 'sky-day',
            interval: null,
            intervalAnimation: null,
            animation: false
        }
    }


    componentDidMount() {
        this.changeIcon();
        this.createInterval();
        this.createIntervalAnimation();
        this.setState({
          animated: true
        });
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
    
    createIntervalAnimation = () => {
        const intervalAnimation = setInterval(() => {
            console.log(this.state.counterAnimation);
            
            this.setState(prevState => {

                if(prevState.counterAnimation <4){

                  return {counterAnimation: prevState.counterAnimation+1}
                }
                else {
                  return {counterAnimation: 1}
                }
            });
        }, 1000);

        this.setState({intervalAnimation});
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
        const { icon, background, animated } = this.state;

        const halfCircleClass = classNames('half-circle', {
            'half-circle__spin': animated
        });

        return (
            <div className="loading-component">
                <div className="loading-component__text">
                    LOADING
                </div>
                <div className={halfCircleClass}>
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