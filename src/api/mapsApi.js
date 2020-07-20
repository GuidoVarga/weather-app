import { retry } from "redux-saga/effects";
import { matchPath } from "react-router";

export function getMap(params){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('mapa');
        }, 5000);
    }).then(map => {
        console.log(map);
        return map.toUpperCase();
    })
}