import React from 'react';
import './loadingComponent.scss';

class LoadingComponent extends React.PureComponent {


    render() {
        return (
            <div className="loading-component">
                <div className="icon-container">
                    <i className="icon icon-sun"/>
                </div>
            </div>
        )
    }

}
export default LoadingComponent;