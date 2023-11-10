const city_input = document.querySelector('#input-weather')
const search_city = document.querySelector('#search-weather-btn')
const result_container = document.querySelector('.result')

// DOM Manipulation is done and those are usable from html page.

async function getWeather() {
   
    result_container.classList.remove('fade')
    let city_value = city_input.value
    let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_value}&appid=${API_key}&units=metric`
    // api's url is called.
    
    const res = await fetch(weather_url)
    const dataWeather = await res.json()

    // console.log(dataWeather);
    // console.log(dataWeather.name);
    // console.log(dataWeather.weather[0].main);
    // console.log(dataWeather.weather[0].description);
    // console.log(dataWeather.weather[0].icon);
    // console.log(dataWeather.main.temp);
    // console.log(dataWeather.main.temp_min);
    // console.log(dataWeather.main.temp_max);

    // The objects which will be used in result_container is tested above as a console.log test.
    try {
        if (city_value.length == 0) {
            result_container.innerHTML = `<h4 class="error-msg ">Please, enter a city.</h4>`
            result_container.classList.add('fade')
        } else {
            result_container.innerHTML = `<div class="result fade">
            <p class="city-name">
                ${dataWeather.name}
            </p>
            <p class="weather-info-1">
                ${dataWeather.weather[0].main}
            </p>
            <p class="weather-info-2">
                ${dataWeather.weather[0].description}
            </p>
            <p class="weather-icon">
                <img src= "https://openweathermap.org/img/w/${dataWeather.weather[0].icon}.png">
            </p>
            <p class="temp">
                ${dataWeather.main.temp}&#176;
            </p>
            <div class="temp-container">
                <div>
                    <h4 class="tittle">max</h4>
                    <h4 class="temp-min">${dataWeather.main.temp_min}&#176;</h4>
                </div>
                <div>
                    <h4 class="tittle">max</h4>
                    <h4 class="temp-max">${dataWeather.main.temp_max}&#176;</h4>
                </div>
            </div>
            </div>`
            result_container.classList.add('fade')
        }
    } catch (error) {
        error = "City is not found."
        result_container.innerHTML = `<h4 class="error-msg">${error}</h4>`
        result_container.classList.add('fade')
    }
}
function getWeatherEntered(event){
    if(event.key == "Enter"){
        //main function is called.
        getWeather()
    }
}

city_input.addEventListener('keydown', getWeatherEntered)
search_city.addEventListener('click', getWeather)
getWeather();