function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    const apiKey = '57fd6956bac8141bce6faf77a93e6664'; 
    const city = cityInput.value;

    if (city.trim() === '') {
        alert('Please enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp - 273.15); 
            const description = data.weather[0].description;

            const resultHTML = `<p>Current temperature in ${city}: ${temperature}°C</p>
                                <p>Weather description: ${description}</p>`;

            weatherInfo.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });
}
