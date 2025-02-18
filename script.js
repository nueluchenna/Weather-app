const apiKey = "7d287b15f134bcc3656de842331c6b18";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherBg = document.querySelector('.background');
const weatherImage = document.querySelector('.img img');

async function checkWeather(city){
    //const response = await fetch('${apiUrl}&q='city+'&appid=${apiKey}');
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    //const response = await fetch(apiUrl + `&appid=${apiKey}`)

    var data = await response.json();

    console.log(data);

    // City name
    document.querySelector(".city").innerHTML = data.name;
    // Temperature
    document.querySelector(".temp").innerHTML = data.main.temp;
    // Humidity
    document.querySelectorAll(".humidity")[0].children[1].innerHTML = data.main.humidity + "%";
    // Windspeed
    document.querySelectorAll(".humidity")[1].children[1].innerHTML = data.wind.speed + "km/hr";
 
   
    // Image
    if(data.weather[0].main === "Clouds"){
        weatherImage.src = "/images/clouds.png";
        weatherBg.src = weatherImage.src;
    }
    else if(data.weather[0].main === "Rain"){
        weatherImage.src = "/images/rain.png";
        weatherBg.src = weatherImage.src;
    }
    else if(data.weather[0].main === "Clear"){
        weatherImage.src = "/images/clear.png";
        weatherBg.src = weatherImage.src;
    }
    else if(data.weather[0].main === "Snow"){
        weatherImage.src = "/images/snow.png";
        weatherBg.src = weatherImage.src;
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherImage.src = "/images/drizzle.png";
        weatherBg.src = weatherImage.src;
    }
    else if(data.weather[0].main === "Mist"){
        weatherImage.src = "/images/mist.png";
        weatherBg.src = weatherImage.src;
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});