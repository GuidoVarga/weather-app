import React, {useState} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import LoadingComponent from '../components/loadingComponent/loadingComponent';
import InfoHeader from '../components/infoHeader/infoHeader';
import * as citiesActions from '../actions/citiesActions';
import '../App.scss';

const buildContent = ({ searchState }) => {
  switch(true){
    case searchState.isSearchingCity:
      return <div className="loader-container"><LoadingComponent/></div>;
    case searchState.searchingCitySuccess:
      return <InfoHeader/>
  }
  return <label></label>;
}

const Home = (props) => {
    const content = buildContent(props);
    return (
        <div className="root-view">
            <Header/>
                <div className="root-container">
                    {content}
                </div>
            <Footer/>
        </div>
    );
}

export default connect(
   state => ({
      searchState: state.searchReducer
   }),
    {
      getCityRequest: citiesActions.getCityRequest
    }
)(Home)