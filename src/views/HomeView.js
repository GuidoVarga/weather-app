import React, {useState} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import LoadingComponent from '../components/loadingComponent/loadingComponent';
import InfoHeader from '../components/infoHeader/infoHeader';
import * as citiesActions from '../actions/citiesActions';
import '../App.scss';

const buildContent = ({ citiesState }) => {
  switch(true){
    case citiesState.isFetchingCity:
      return <div className="loader-container"><LoadingComponent/></div>;
    case citiesState.fetchCitySuccess:
      return <InfoHeader/>;
    default:
      return <label></label>;
  }
}

const Home = (props) => {
    const content = buildContent(props);
    return (
        <div className="root-view">
            <Header searchAction = {props.fetchCityRequest}/>
                <div className="root-container">
                    {content}
                </div>
            <Footer/>
        </div>
    );
}

export default connect(
   state => ({
      citiesState: state.citiesReducer
   }),
    {
      fetchCityRequest: citiesActions.fetchCityRequest
    }
)(Home)