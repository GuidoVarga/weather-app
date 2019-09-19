import countryCode from '../constants/countryCode';

const getCodeFromCountry = (searchedCountry) => {
    const country = countryCode.find(c => c.name === searchedCountry);
    return country ? country.code : '';
}

export {
    getCodeFromCountry
}