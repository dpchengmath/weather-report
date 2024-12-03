let currentTemperature = 0;

const updateTemperatureDisplay = () => {
    const tempValue = document.getElementById('currentTempButton');
    tempValue.textContent = currentTemperature;
    tempBackgroundColor();
    tempFontColor();
};

const addDegree = () => {
    const increaseTemp = document.getElementById('currentTempButton');
    currentTemperature += 1;
    increaseTemp.textContent = currentTemperature;
    updateTemperatureDisplay();
};

const subtractDegree = () => {
    const decreaseTemp = document.getElementById('currentTempButton');
    currentTemperature -= 1;
    decreaseTemp.textContent = currentTemperature;
    updateTemperatureDisplay();
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
        currentFontColor = '#ff1493';
    }
    setFontColor.style.color = currentFontColor;
};

const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector('#increaseTempControl');
    increaseTempButton.addEventListener('click', addDegree);

    const decreaseTempButton = document.querySelector('#decreaseTempControl');
    decreaseTempButton.addEventListener('click', subtractDegree);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);



// const tempLandscape = () => {
//     const setLandscape = document.getElementById('currentTempButton');
//     let currentLandscape;

//     if (currentTemperature <= 49) {
//         currentLandscape = '#00ced1';
//     } else if (currentTemperature >= 50 && currentTemperature <= 59 ) {
//         currentLandscape = '#00ff7f';
//     } else if (currentTemperature >= 60 && currentTemperature <= 69 ) {
//         currentLandscape = '#ffd700';
//     } else if (currentTemperature >= 70 && currentTemperature <= 79 ) {
//         currentLandscape = '#ff7f50';
//     } else if (currentTemperature >= 80) {
//         currentLandscape= '#ff1493';
//     }
//     setLandscape.style.color = currentLandscape;
    // ??? instead or .color we need to...
// };

/*
Temperature (F)	Landscape
80+	"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
70-79	"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
60-69	"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
59 or below	"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
\*



const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector('#increaseTempControl');
    increaseTempButton.addEventListener('click', addDegree);

    const decreaseTempButton = document.querySelector('#decreaseTempControl');
    decreaseTempButton.addEventListener('click', subtractDegree);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

/*

Temperature (F)	Landscape
80+	"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
70-79	"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
60-69	"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
59 or below	"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"



.temperature__section button {
    background-color: #1b69f9;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px
}


    <section class="temperature__section">
        <h2>Temperature</h2>
        <div class="temperature__content">
            <div class="temperature__controls">
                <span id="increaseTempControl">⬆️</span>
                <span id="tempValue"></span>
                <span id="decreaseTempControl">⬇️</span>
            </div>
            <button id="currentTempButton">Get Realtime Temperature</button>
        </div>
    </section>

Temperature Ranges Change Text Color
Depending on what temperature it is, either:

the temperature number changes color
the background of the temperature changes color
There must be at least five categories of distinguishable colors.

Our solution uses the following ranges, which you may use if desired:

Temperature (F)	Color
80+	Red
70-79	Orange
60-69	Yellow
50-59	Green
49 or below	Teal
Temperature Ranges Change Landscape
Depending on what temperature it is, a different landscape should appear on the page.

These landscapes can be anything, as long as they are visual and noticeable to any instructors. For example, the landscapes can be:

A single image that appears
ASCII art
Text
Changing landscapes should replace the existing landscape. There should only be one visible landscape at a time.

There must be at least four landscapes.

Our solution uses the following ranges, which you may use if desired:

Temperature (F)	Landscape
80+	"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
70-79	"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
60-69	"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
59 or below	"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
*/
