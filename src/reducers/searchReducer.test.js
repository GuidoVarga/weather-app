import reducer from './searchReducer';
import * as actionTypes from '../actions/searchActions';

describea('search reducer tests', () => {

  it('should return initial state', () => {
      const initalState = {
          city : '',
          country: '',
          countryCode: '',
          isSearchingCity: false,
          searchingCitySuccess: false,
          searchingCityFailure: false,
          hasSearchedCity: false
      };

      expect(reducer(undefined, {})).toEqual(initalState);
  });

});