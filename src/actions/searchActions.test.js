import * as searchActions from './searchActions';
import actionTypes from '../constants/actionTypes';

describe('search actions test', () => {

  it('should create an action to set the country to search', () => {
      const data = 'France';
      const expectedAction = {
          type: actionTypes.SET_SEARCH_COUNTRY,
          payload: data
      }

      expect(searchActions.setSearchCountry(data)).toEqual(expectedAction);
  });

  it('should create an action to set the city to search', () => {
    const data = 'London';
    const expectedAction = {
        type: actionTypes.SET_SEARCH_CITY,
        payload: data
    }

    expect(searchActions.setSearchCity(data)).toEqual(expectedAction);
  });

});