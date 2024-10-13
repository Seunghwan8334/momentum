const API_KEY = "dfac89b6676d0f0cd549a72cfdd18ffb";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.latitude;
    console.log("You live i ",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.querySelector("div#weather span:nth-child(1)");
            const cityContainer = document.querySelector("div#weather span:nth-child(2)");
            cityContainer.innerText = data.name;
            weatherContainer.innerText = data.weather[0].main;
        }
    );
}
function onGeoError() {
    alert("Can't find you. No weather for your.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);