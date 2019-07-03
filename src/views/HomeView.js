import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import citiesActions from '../actions/citiesActions';
import '../App.scss';

class Home extends React.Component {

    componentDidMount(){
        const { citiesActions } = this.props;
        citiesActions.getCityRequest();
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
const mapDispatchToProps = (dispatch) => ({
    citiesActions: bindActionCreators(citiesActions, dispatch)
})
  
export default connect(
   null,
   mapDispatchToProps,
)(Home)