import * as searchActions from './searchActions';
import actionTypes from '../constants/actionTypes';

describe('search actions test', () => {

  const data = 'France';
  const expectedAction = {
      type: actionTypes.SET_SEARCH_COUNTRY,
      payload: data
  }

  it('should create an action to set the country to search', () => {
      expect(searchActions.setSearchCountry(data)).toEqual(expectedAction);
  });


});