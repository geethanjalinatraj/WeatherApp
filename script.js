const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const apikey = "51c2ff81ac72b33942995cb1880616eb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const weather_data = await fetch(`${url}`).then(myresponse => myresponse.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    // console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "./images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "./images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "./images/snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

















// const apiKey = '8d642bd2b573c658b47f76d024713c66';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// const locationInput = document.getElementById('locationInput');
// const searchButton = document.getElementById('searchButton');
// const locationElement = document.getElementById('location');
// const temperatureElement = document.getElementById('temperature');
// const descriptionElement = document.getElementById('description');

// searchButton.addEventListener('click', () => {
//     const location = locationInput.value;
//     if (location) {
//         fetchWeather(location);
//     }
// });

// function fetchWeather(location) {
//     const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             locationElement.textContent = data.name;
//             temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
//             descriptionElement.textContent = data.weather[0].description;
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//         });
// }


























// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document. querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');


// search.addEventListener('click', () => {

//     const APIKey = '8d642bd2b573c658b47f76d024713c66';
//     const city = document.querySelector('.search-box input').value;

//     if (city == '')
//         return;
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid={APIKey}').then(response => response.json()).then(json => {

//         const image = documet.querySelector('.weather-box img');
//         const temperature = document.querySelector('.weather-box .temperature');
//         const description = document.querySelector('.weather-box .description');
//         const humidity = document.querySelector('.weather-details .humidity span');

//         const wind = document.querySelector('.weather-details .wind span');





//     })
// })