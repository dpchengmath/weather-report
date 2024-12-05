let currentTemperature = 0;

const tempValue = document.getElementById('tempValue');

const updateTemperatureDisplay = () => {
    tempValue.textContent = currentTemperature;
    tempColor();
};

const addDegree = () => {
    currentTemperature += 1;
    tempValue.textContent = currentTemperature;
    updateTemperatureDisplay();
    tempLandscape();
};

const subtractDegree = () => {
    currentTemperature -= 1;
    tempValue.textContent = currentTemperature;
    updateTemperatureDisplay();
    tempLandscape();
};

const tempColor = () => {
    const setBackgroundColor = document.getElementById('currentTempButton');

    const setFontColor = document.getElementById('tempValue');
    let currentColor;

    if (currentTemperature <= 49) {
        currentColor = '#30849D';
    } else if (currentTemperature >= 50 && currentTemperature <= 59 ) {
        currentColor = '#50A63F';
    } else if (currentTemperature >= 60 && currentTemperature <= 69 ) {
        currentColor = '#FEE086';
    } else if (currentTemperature >= 70 && currentTemperature <= 79 ) {
        currentColor = '#F8B5A2';
    } else if (currentTemperature >= 80) {
        currentColor = '#E06767';
    }
    setBackgroundColor.style.backgroundColor = currentColor;
    setFontColor.style.color = currentColor;
};

const tempLandscape = () => {
    const setLandscape = document.getElementById('landscape');
    let currentLandscape = '';

    if (currentTemperature <= 39) {
        currentLandscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else if (currentTemperature >= 40 && currentTemperature <= 59 ) {
        currentLandscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (currentTemperature >= 60 && currentTemperature <= 79 ) {
        currentLandscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (currentTemperature >= 80) {
        currentLandscape= '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    }
    setLandscape.textContent = currentLandscape;
};

const citySky = (event) => {
    const selectedOption = event.target.value;
    const elementSky = document.getElementById('sky');
    let currentCitySky = '';

    if (selectedOption === 'sunny') {
        currentCitySky = '☀️ ☁️ ☀️ ☀️ ☁️ ☀️ ☁️ ☀️ ☀️ ☁️ ☀️';
    } else if (selectedOption === 'cloudy') {
        currentCitySky = '☁️☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️☁️';
    } else if (selectedOption === 'rainy') {
        currentCitySky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    } else if (selectedOption === 'snowy') {
        currentCitySky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    }
    elementSky.textContent = currentCitySky;
};

const cityNameInput = document.getElementById('cityNameInput');
const cityHeaderElement = document.getElementById('defaultHeaderCityName');

const dynamicCityNameHeader = () => {
    cityHeaderElement.innerText = cityNameInput.value;
};

const resetCityName = () => {
    cityNameInput.value = ''; 
    cityHeaderElement.innerText = '🌸🗼🍜🍣🌋🐬🌊🐢🌺🍍🌴🗽🍕🗼🥐';
};

const fetchCityTemperature = () => {
    const cityName = cityNameInput.value.trim(); 

    if (cityName) { 
        console.log(`Fetching city: ${cityName}`);
        axios.get(`http://127.0.0.1:5000/location`, {
            params: {
                q: cityName
            }
        })
        .then(response => {
            console.log('Location Data:', response);
            
                const firstResult = response.data[0];  
                const latitude = firstResult.lat;
                const longitude = firstResult.lon;
                console.log(`Coordinates: lat=${latitude}, lon=${longitude}`);
        
                return axios.get(`http://127.0.0.1:5000/weather`, {
                    params:{
                        lat: latitude,
                        lon: longitude
                    }
                })
        })
            .then(weatherResponse => {
                console.log('Weather Response:', weatherResponse);
                const firstWeatherResult = weatherResponse.data.main.temp;
                const kelvinToFahrenheit = (firstWeatherResult - 275.15) * 1.8 + 32;
                console.log(Math.floor(kelvinToFahrenheit))
                 
                const cityTemp = Math.floor(kelvinToFahrenheit); 
                tempValue.textContent = cityTemp;

                currentTemperature = cityTemp;
                updateTemperatureDisplay();
                tempLandscape();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('An error occurred. Please try again.');
            });
    } else {
        alert('Please enter a city name');
    }
};

const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector('#increaseTempControl');
    increaseTempButton.addEventListener('click', addDegree);

    const decreaseTempButton = document.querySelector('#decreaseTempControl');
    decreaseTempButton.addEventListener('click', subtractDegree);

    cityNameInput.addEventListener('input', dynamicCityNameHeader);
    
    const cityNameReset = document.querySelector('#cityNameReset');
    cityNameReset.addEventListener('click', resetCityName);

    const searchTempButton = document.getElementById('currentTempButton'); 
    searchTempButton.addEventListener('click', fetchCityTemperature)

    const selectSkyOption = document.getElementById('skySelect');
    selectSkyOption.addEventListener('change', citySky);

};

document.addEventListener('DOMContentLoaded', registerEventHandlers);


