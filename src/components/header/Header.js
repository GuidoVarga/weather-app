import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import * as citiesActions from '../../actions/citiesActions';
import * as searchActions from '../../actions/searchActions';
import { APP_TITLE, HOME, MAPS, SEARCH_CITY_PH, SEARCH_LABEL, SEARCH_COUNTRY_PH} from "../../constants/texts";
import './header.scss';

class Header extends React.Component {

    handleOnChangeCountry = (evt) => {
        const { target : { value } } = evt;
        const { setSearchCountry } = this.props;

        setSearchCountry(value);
    }

    handleOnChangeCity = (evt) => {
        const { target : { value } } = evt;
        const { setSearchCity } = this.props;
        setSearchCity(value);
    }

    handleOnClickSearch = () => {
        const { searchState, getCityRequest } = this.props;
        const city = searchState.city;
        const country = searchState.country;
        getCityRequest(city, country);
    }

    render() {
        return  (
            <nav>
                <div className="header">
                    <div className="header__title-container">
                        <h1 className="header__title-text">{APP_TITLE}</h1>
                    </div>
                    <div className="header__bar-container">
                        <div className="header__bar-container__list__wrapper">
                            <ul className="header__bar-container__list">
                                <li className="header__bar-container__list__item"><Link to="/">{HOME}</Link></li>
                                <li className="header__bar-container__list__item"><Link to="/maps">{MAPS}</Link></li>
                            </ul>
                        </div>
                        <div className="header__bar-container__search-bar__container">
                            <label className="header__bar-container__search-bar__city-label">Country:</label>
                            <input type="text" placeholder={SEARCH_COUNTRY_PH}  className="header__bar-container__search-bar__input input-text-default" onChange={this.handleOnChangeCountry}/>
                            <label className="header__bar-container__search-bar__city-label">City:</label>
                            <input type="text" placeholder={SEARCH_CITY_PH}  className="header__bar-container__search-bar__input input-text-default" onChange={this.handleOnChangeCity}/>
                            <button className="search-button" onClick={this.handleOnClickSearch}>{SEARCH_LABEL}</button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    searchState: state.searchReducer
});

export default connect(
    mapStateToProps,
   {
      getCityRequest: citiesActions.getCityRequest,
      setSearchCity: searchActions.setSearchCity,
      setSearchCountry: searchActions.setSearchCountry
   }
)(Header)