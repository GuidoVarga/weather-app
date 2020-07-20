import countryCode from '../constants/countryCode';

const getCodeFromCountry = (searchedCountry) => 
    new Promise((resolve, reject) => {
        const country = countryCode.find(c => c.name === searchedCountry);
        if(country && country.code){
            const code = country.code || '';
            resolve(code);
        } else {
            reject();
        }
    }).then(code => code)
    .catch(error => error);


export {
    getCodeFromCountry
}