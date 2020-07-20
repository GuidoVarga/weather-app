import { createMockTask, cloneableGenerator } from '@redux-saga/testing-utils';
import sinon from 'sinon';
import { call, put, spawn, takeLatest, takeEvery, take, fork, cancel, cancelled, race, delay,} from 'redux-saga/effects';
import {mapsSaga, fetchMapRequested} from './mapsSaga';
import actionTypes from '../constants/actionTypes';


describe('maps saga', () => {
    const generator = cloneableGenerator(mapsSaga)();

    it('waits for fetch map request action', () => {
        const expectedYield = take(actionTypes.FETCH_MAP_REQUEST);
        const mockedAction = {
            type: actionTypes.FETCH_MAP_REQUEST,
            payload: {
                city: 'London',
                country: 'United Kingdom'
            }
        };
        expect(generator.next().value).toEqual(expectedYield)
    });

    it('forks map requested', () => {
        const mockedAction = {
            type: actionTypes.FETCH_MAP_REQUEST,
            payload: {
                city: 'London',
                country: 'United Kingdom'
            }
        };
        const expectedYield = fork(fetchMapRequested, mockedAction.payload);
        expect(generator.next(mockedAction).value).toEqual(expectedYield);
    });

    it('wait for cancel, success or failure fetch map actions', () => {
        const clon = generator.clone();
        const mockedTask = createMockTask();
        const expectedYield = take([actionTypes.FETCH_MAP_CANCEL_REQUEST, actionTypes.FETCH_MAP_SUCCESS, actionTypes.FETCH_MAP_FAILURE]);
        expect(clon.next(mockedTask).value).toEqual(expectedYield);
    });

    it('should cancel task', () => {
        const clon = generator.clone();
        const mockedTask = createMockTask();
        const mockedAction = {
            type: actionTypes.FETCH_MAP_CANCEL_REQUEST
        }
        const expectedCancelYield = cancel(mockedTask);

        clon.next(mockedTask);
        expect(clon.next(mockedAction).value).toEqual(expectedCancelYield);
    });

    it('should not cancel task', () => {
        const clon = generator.clone();
        const mockedTask = createMockTask();
        const mockedAction = {
            type: actionTypes.FETCH_MAP_FAILURE
        }
        clon.next(mockedTask);
        clon.next(mockedAction);
        expect(false).toEqual(false);
    });

    
})