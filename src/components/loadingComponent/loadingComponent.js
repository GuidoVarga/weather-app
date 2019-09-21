import React from 'react';
import './loadingComponent.scss';

class LoadingComponent extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            icon: "sun"
        }
    }


    componentDidMount() {
        setInterval(() => {
            if(this.state.icon === "sun"){
                this.setState({icon: "cloud"});
            } else {
                this.setState({icon: "sun"});
            }
        }, 2000);
    }


    render() {
        const icon = this.state.icon;
        return (
            <div className="loading-component">
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