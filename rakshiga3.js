const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API Key

async function getWeather() {
    const city = document.getElementById('city').value;
    
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            // Show weather data
            document.getElementById('location').innerHTML = `Location: ${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').innerHTML = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerHTML = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
