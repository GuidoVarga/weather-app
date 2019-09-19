import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import * as citiesActions from '../actions/citiesActions';
import '../App.scss';

class Home extends React.Component {

    componentDidMount(){
        const { searchState } = this.props;
    }

    buildContent = () => {
        const { searchState } = this.props;
        if(searchState.isSearchingCity){
            return <div className="app-logo"/>;
        }

        return <label>HOLA</label>;
    }
    
    render() {

        const content = this.buildContent();

        return (
            <div className="root-view">
                <Header/>
                    <div className="root-container">
                        
                        {content}
                        
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default connect(
   state => ({
      searchState: state.searchReducer
   }),
    {
      getCityRequest: citiesActions.getCityRequest
    }
)(Home)