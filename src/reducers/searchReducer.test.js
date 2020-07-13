import reducer from './searchReducer';
import actionTypes from '../constants/actionTypes';
import * as mocks from './mocks/searchReducerMocks';

describe('search reducer tests', () => {

  it('should return initial state', () => {
      expect(reducer(undefined, {})).toEqual(mocks.initalState);
  });

  it('should handle SET_SEARCH_CITY', () => {
    const action = {
      type: actionTypes.SET_SEARCH_CITY,
      payload: 'London'
    };
    expect(reducer(undefined, action)).toEqual(mocks.setSearchCityMock);
  });

});