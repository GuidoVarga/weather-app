import React from 'react';
import { getRandomIcon, getBackground} from '../../helpers/loadingComponentHelper';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './loadingComponent.scss';

class LoadingComponent extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            icon: "",
            counter: 1,
            counterAnimation: 1,
            background: 'sky-dawn',
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
        clearInterval(this.state.intervalAnimation);
        console.log('unmount')
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
        }, 823);

        this.setState({interval});
    }

    createIntervalAnimation = () => {
        const intervalAnimation = setInterval(() => {
            this.setState(prevState => {
                if(prevState.counterAnimation < 8){
                    this.changeBackground(prevState.counterAnimation+1);
                    return {counterAnimation: prevState.counterAnimation+1}
                }
                else {
                    this.changeBackground(1);
                    return {counterAnimation: 1}
                }
            });
        }, 611);

        this.setState({intervalAnimation});
    }

    changeIcon = () => {
        const { counter, icon } = this.state;
        const newIcon = getRandomIcon(counter, icon);
        this.setState({icon: newIcon});
    }

    changeBackground = (counter) => {
        const background = getBackground(counter-1);
        this.setState({background})
    }

    render() {
        const { icon, background, animated } = this.state;
        const { size } = this.props;

        const loadingClass = classNames(`loading-component loading-component--${size}`);

        const halfCircleClass = classNames('half-circle', {
            'half-circle__spin': animated
        });

        return (
          <div className={loadingClass}>
              <div className="loading-component__container">
                  <div className={halfCircleClass}>
                      <div className="icon-container">
                          <i className={`icon icon-${icon}`}/>
                      </div>
                  </div>
                  <div className={`half-circle half-circle__background half-circle__background--${background}`}/>
              </div>
          </div>
        )
    }
}

LoadingComponent.propTypes = {
    size: PropTypes.oneOf(['block', 'xs', 's', 'm', 'l', 'xl'])
}

LoadingComponent.defaultProps = {
    size: 'block'
}

export default LoadingComponent;