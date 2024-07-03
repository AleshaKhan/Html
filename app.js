document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const searchButton = document.getElementById('searchButton');
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    searchButton.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        } else {
            alert('Please enter a city name');
        }
    });

    async function getWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const weatherData = await response.json();
            displayWeather(weatherData);
        } catch (error) {
            console.error('Error fetching weather:', error);
            displayError(error.message);
        }
    }

    function displayWeather(data) {
        const { name, main, wind, weather } = data;
        const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
        const weatherHtml = `
            <h2>${name}</h2>
            <img src="${iconUrl}" alt="${weather[0].description}">
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
        `;
        weatherInfo.innerHTML = weatherHtml;
    }

    function displayError(message) {
        weatherInfo.innerHTML = `<p class="error">${message}</p>`;
    }
});
