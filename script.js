<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="script.js">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
            background-color: #f5f5f5;
        }

        body {
            background-image: url('https://w.forfun.com/fetch/f5/f528b09dfbc73b011badda0dbf118829.jpeg'); 
            background-size: cover;
            background-position: center;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        #app-container {
            max-width: 400px;
            margin: auto;
            padding: 20px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.8); 
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            opacity: 0.7;
        }


        #temperature {
            font-size: 36px;
            margin-bottom: 10px;
        }

        #weather-icon {
            width: 80px;
            height: 80px;
            margin: 10px auto;
        }

        #description {
            font-size: 18px;
            margin-bottom: 20px;
        }

        #city-input {
            width: 100%;
            padding: 10px;
            font-size: 16px;
        }

        #get-weather-btn {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            background-color: #2bbe30;
            color: #000000;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>


    <div id="app-container">
        <h2>Weather App</h2>
        <input type="text" id="city-input" placeholder="Enter city name">
        <button id="get-weather-btn" onclick="getWeatherData()">Get Weather</button>
        <div id="temperature"></div>
        <img id="weather-icon">
        <div id="description"></div>
    </div>
    
    <div id="app-container">
        <button id="refresh-btn" onclick="refreshPage()">Refresh Page</button>
    </div>
    
    <script>
        async function getWeatherData() {
            const cityInput = document.getElementById('city-input').value;
            const apiKey = '57fd6956bac8141bce6faf77a93e6664';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
    
                const temperatureElement = document.getElementById('temperature');
                const weatherIconElement = document.getElementById('weather-icon');
                const descriptionElement = document.getElementById('description');
    
                const temperature = data.main.temp;
                const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                const description = data.weather[0].description;
    
                temperatureElement.textContent = `Temperature: ${temperature}°C`;
                weatherIconElement.src = weatherIcon;
                descriptionElement.textContent = `Description: ${description}`;
            } 
            catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    </script>
    
    <script>
        function refreshPage() {
            location.reload();
        }
    </script>
    
    </body>
    </html>
