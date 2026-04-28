async function getWeather(){
let city = document.getElementById("city").value;

let apiKey = "YOUR_API_KEY";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let res = await fetch(url);
let data = await res.json();

document.getElementById("weatherResult").innerHTML = `
<h2>${data.name}</h2>
<h3>${data.main.temp}°C</h3>
<p>${data.weather[0].main}</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Wind: ${data.wind.speed} km/h</p>
`;
}
