async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '57d8d6133040d8a8afa8142a98154c65'; // <-- Replace this with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      
      const data = await response.json();
      const resultDiv = document.getElementById('weatherResult');
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌥️ Weather: ${data.weather[0].main}</p>
      `;
    } catch (error) {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
  }
  