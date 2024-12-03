let currentTemperature = 0;

const updateTemperatureDisplay = () => {
    const tempValue = document.getElementById('currentTempButton');
    tempValue.textContent = currentTemperature;
    tempBackgroundColor();
    tempFontColor();
};

const updateLandscape = () => {
    const setLandscape = document.getElementById('landscape');
    setLandscape.textContent = currentLandscape;
    tempLandscape();
}

const addDegree = () => {
    const increaseTemp = document.getElementById('currentTempButton');
    currentTemperature += 1;
    increaseTemp.textContent = currentTemperature;
    updateTemperatureDisplay();
    tempLandscape();

};

const subtractDegree = () => {
    const decreaseTemp = document.getElementById('currentTempButton');
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
    const setFontColor = document.getElementById('currentTempButton');
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
        currentFontColor = '#c71585';
    }
    setFontColor.style.color = currentFontColor;
};

const tempLandscape = () => {
    const setLandscape = document.getElementById('landscape');
    let currentLandscape = '';

    if (currentTemperature <= 59) {
        currentLandscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else if (currentTemperature >= 60 && currentTemperature <= 69 ) {
        currentLandscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (currentTemperature >= 70 && currentTemperature <= 79 ) {
        currentLandscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (currentTemperature >= 80) {
        currentLandscape= '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    }
    setLandscape.textContent = currentLandscape;
};

const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector('#increaseTempControl');
    increaseTempButton.addEventListener('click', addDegree);

    const decreaseTempButton = document.querySelector('#decreaseTempControl');
    decreaseTempButton.addEventListener('click', subtractDegree);
};


const cityInput = document.getElementById('cityNameInput');
const cityDisplay = document.getElementById('cityDisplay');

cityInput.addEventListener('input', function() {
    cityDisplay.textContent = cityInput.value;
});



document.addEventListener('DOMContentLoaded', registerEventHandlers);
