
const apiKey = "c158b63d24e86a38b3750128970ab6cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".card search input");
const searchBtn = document.querySelector(".card search button");
const weatherimg = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response =  await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main == "Clouds"){

        weatherimg.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherimg.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherimg.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherimg.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherimg.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherimg.src = "images/snow.png"
    }

    document.querySelector(".weather").style.display = "block";
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});

