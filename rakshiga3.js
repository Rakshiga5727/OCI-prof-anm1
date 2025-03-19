// Your OpenWeatherMap API Key
const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API Key

// Function to fetch weather data based on the city entered by the user
async function getWeather() {
    const city = document.getElementById('city').value;  // Get the city entered by the user
    
    // If no city is entered, alert the user
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    // URL for OpenWeatherMap API to fetch weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        // Fetch weather data from OpenWeatherMap API
        const response = await fetch(url);
        const data = await response.json();

        // Check if the API response is valid
        if (data.cod === 200) {
            // Display the weather data in the HTML
            document.getElementById('location').innerHTML = `Location: ${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').innerHTML = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerHTML = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
        } else {
            // If the city is not found, alert the user
            alert('City not found');
        }
    } catch (error) {
        // If there is an error fetching the data, log it to the console
        console.error('Error fetching weather data:', error);
    }
}
