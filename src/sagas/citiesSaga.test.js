import { createMockTask, cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put, spawn, takeLatest, takeEvery, take, fork, cancel, cancelled, race, delay,} from 'redux-saga/effects';
import {citiesSaga, fetchCityRequested } from './citiesSaga';
import actionTypes from '../constants/actionTypes';
import { getCodeFromCountry } from '../helpers/searchHelper';
import citiesApi from '../api/citiesApi';
import {fetchCitySuccess, fetchCityFailure} from '../actions/citiesActions';

describe('cities saga', () => {
    const generator = cloneableGenerator(citiesSaga)();

    it('should yield take latest fetch city request', () => {
       const expectedYield = takeLatest(actionTypes.FETCH_CITY_REQUEST, fetchCityRequested);
       expect(generator.next().value).toEqual(expectedYield);
    });
});

const mockedAction = {
    type: actionTypes.FETCH_CITY_REQUEST,
    payload: {
        city: 'London',
        country: 'United Kingdom'
    }
}

describe('fetchCityRequested', () => {
    const generator = cloneableGenerator(fetchCityRequested)(mockedAction);

    it('should wait for country code', () => {
        const { payload: { country }} = mockedAction;
        const expectedYield = call(getCodeFromCountry, country);
        expect(generator.next().value).toEqual(expectedYield);
    });

    it('should wait for get city call', () => {
        const { payload: { city }} = mockedAction;
        const expectedYield = call(citiesApi.getCity, {city, code:'UK'});
        expect(generator.next('UK').value).toEqual(expectedYield);
    });

    it('should put success action', () => {
        const clon = generator.clone();
        const result = {
            city: 'city',
            weather: {

            }
        }
        const expectedYield = put(fetchCitySuccess(result));
        expect(clon.next(result).value).toEqual(expectedYield);
    });

    it('should put failure action if there is an error in fetch city', () => {
        const clon = generator.clone();
        const error = {
            cod: '404'
        }
        const expectedYield = put(fetchCityFailure(error));
        expect(clon.next(error).value).toEqual(expectedYield);
    });
});
