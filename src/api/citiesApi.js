export default {
    getCity: function getCity(params){
        return (
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${params.city},${params.code}&appid=6069aed1f4f408037ca53610638b6f50&&units=${params.unit || 'metric'}`)
                .then(response => response.json())
                .then(data => data)
                .catch(error => error)
        );
    }
}