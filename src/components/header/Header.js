import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import citiesActions from '../../actions/citiesActions';
import searchActions from '../../actions/searchActions';
import { APP_TITLE, HOME, MAPS, SEARCH_CITY_PH, SEARCH_LABEL, SEARCH_COUNTRY_PH} from "../../constants/texts";
import './header.scss';

class Header extends React.Component {

    handleOnChangeCountry = (evt) => {
        const { target : { value } } = evt;
        const { searchActions } = this.props;
        console.log(value);
        searchActions.setSearchCountry(value);
    }

    handleOnChangeCity = (evt) => {
        const { target : { value } } = evt;
        const { searchActions } = this.props;
        searchActions.setSearchCity(value);
    }

    handleOnClickSearch = () => {
        const { searchReducer, citiesActions } = this.props;
        const city = searchReducer.searchText;
        citiesActions.getCityRequest({city});
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
    searchReducer: state.searchReducer
});

const mapDispatchToProps = (dispatch) => ({
    citiesActions: bindActionCreators(citiesActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch)
})
  
export default connect(
    mapStateToProps,
   mapDispatchToProps,
)(Header)