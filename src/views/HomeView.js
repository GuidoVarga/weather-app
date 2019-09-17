import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import * as citiesActions from '../actions/citiesActions';
import '../App.scss';

class Home extends React.Component {

    componentDidMount(){
        const { getCityRequest } = this.props;
        //getCityRequest();
    }
    
    render() {
        
        return (
            <div className="root-view">
                <Header/>
                    <div className="root-container">
                        
                        <label>HOLA</label>
                        
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default connect(
   null,
    {
      getCityRequest: citiesActions.getCityRequest
    }
)(Home)