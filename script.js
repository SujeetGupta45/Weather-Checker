const apiKey = 'f81ff3e5d30bba04c0e61f5987e16478';
function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const city = cityInput.value.trim();
  const resultDiv = document.getElementById('weatherResult');
  if (!city) {
    resultDiv.innerHTML = `<p style="color:red;">Please enter a city name</p>`;
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found or invalid input");
      }
      return response.json();
    })
    .then(data => {
      const weatherHtml = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>`;
      resultDiv.innerHTML = weatherHtml;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
