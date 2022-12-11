const API_Key = `755dc9bc36cf85f4a01cd8bbbd4983d1`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getweather = async(city) => {
    weather.innerHTML = `
    <h1> loading... </h1>
    `
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    return showweather(data);
}
const showweather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `
        <h1> city not found </h1>
        `
        return;
    };
    weather.innerHTML = `
    
    <div> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" height="120px" width="100px"></div>
    <div>
        <h1>${data.main.temp}℃</h1>
        <h2>${data.weather[0].main}</h2>
    </div>

        `
}

form.addEventListener(
    "submit",
    function(event) {
        getweather(search.value)
        event.preventDefault();
    }
)