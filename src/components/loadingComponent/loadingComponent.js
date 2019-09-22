import React from 'react';
import { getRandomIcon } from '../../helpers/loadingComponentHelper';
import './loadingComponent.scss';

class LoadingComponent extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            icon: "",
            counter: 1,
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
        }, 740);

        this.setState({interval});
    }

    changeIcon = () => {
        const { counter, icon } = this.state;
        const newIcon = getRandomIcon(counter, icon);
        this.setState({icon: newIcon});
    }


    render() {
        const icon = this.state.icon;
        return (
            <div className="loading-component">
                <div className="loading-component__text">
                    LOADING
                </div>
                <div className="loading-component__half-circle">
                    <div className="icon-container">
                        <i className={`icon icon-${icon}`}/>
                    </div>
                </div>
            </div>
        )
    }

}
export default LoadingComponent;