let currentTemperature = 0;

const updateTemperatureDisplay = () => {
    const tempValue = document.getElementById('tempValue');
    tempValue.textContent = currentTemperature;
    tempBackgroundColor();
    tempFontColor();
};


const addDegree = () => {
    const increaseTemp = document.getElementById('tempValue');
    currentTemperature += 1;
    increaseTemp.textContent = currentTemperature;
    updateTemperatureDisplay();
    tempLandscape();
};


const subtractDegree = () => {
    const decreaseTemp = document.getElementById('tempValue');
    currentTemperature -= 1;
    decreaseTemp.textContent = currentTemperature;
    updateTemperatureDisplay();
    tempLandscape();
};


const tempBackgroundColor = () => {
    const setBackgroundColor = document.getElementById('currentTempButton');
    let currentBackgroundColor;

    if (currentTemperature <= 49) {
        currentBackgroundColor = '#008080';
    } else if (currentTemperature >= 50 && currentTemperature <= 59 ) {
        currentBackgroundColor = '#008000';
    } else if (currentTemperature >= 60 && currentTemperature <= 69 ) {
        currentBackgroundColor = '#ffff00';
    } else if (currentTemperature >= 70 && currentTemperature <= 79 ) {
        currentBackgroundColor = '#ffa500';
    } else if (currentTemperature >= 80) {
        currentBackgroundColor = '#ff0000';
    }
    setBackgroundColor.style.backgroundColor = currentBackgroundColor;
};


const tempFontColor = () => {
    const setFontColor = document.getElementById('tempValue');
    let currentFontColor;

    if (currentTemperature <= 49) {
        currentFontColor = '#00ced1';
    } else if (currentTemperature >= 50 && currentTemperature <= 59 ) {
        currentFontColor = '#00ff7f';
    } else if (currentTemperature >= 60 && currentTemperature <= 69 ) {
        currentFontColor = '#ffd700';
    } else if (currentTemperature >= 70 && currentTemperature <= 79 ) {
        currentFontColor = '#ff7f50';
    } else if (currentTemperature >= 80) {
        currentFontColor = '#ff335a';
    }
    setFontColor.style.color = currentFontColor;
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


const citySky = (skyOption) => {
    const setSky = document.getElementById('sky');
    let currentCitySky = '';

    if (skyOption === 'sunny') {
        currentCitySky = '☀️ ☁️ ☀️ ☀️ ☁️ ☀️ ☁️ ☀️ ☀️ ☁️ ☀️';
    } else if (skyOption === 'cloudy') {
        currentCitySky = '☁️☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️☁️';
    } else if (skyOption === 'rainy') {
        currentCitySky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    } else if (skyOption === 'snowy') {
        currentCitySky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    }
    setSky.textContent = currentCitySky;
};


const dynamicCityNameHeader = () => {
    const cityNameInput = document.getElementById('cityNameInput');
    const cityHeaderElement = document.getElementById('defaultHeaderCityName');
    
    cityHeaderElement.innerText = cityNameInput.value;
};


const resetCityName = () => {
    const cityNameInput = document.getElementById('cityNameInput');
    const cityHeaderElement = document.getElementById('defaultHeaderCityName');
    
    cityNameInput.value = ''; 
    cityHeaderElement.innerText = '🌸🗼🍜🍣🌋🐬🌊🐢🌺🍍🌴🗽🍕🗼🥐';
};


const fetchCityTemperature = () => {
    const cityNameInput = document.getElementById('cityNameInput'); 
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
                
                const cityTempValue = document.getElementById('tempValue'); 
                const cityTemp = Math.floor(kelvinToFahrenheit); 
                cityTempValue.textContent = cityTemp;

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
    // const currentCitySky = document.querySelector('.currentCitySky')[0];
    // SelectSkyOption.addEventListener('change', citySky);
    //     currentCitySky.textContent = `${citySky.target.value}`;

    selectSkyOption.addEventListener('change', (event) => {
        const selectedOption = event.target.value;
        console.log(selectedOption)
        citySky(selectedOption);
    });
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);