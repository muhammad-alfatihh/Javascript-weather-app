const weatherForm = document.querySelector("weatherForm");
const cityInput = document.querySelector("cityInput");
const card = document.querySelector("card");
const apiKey = "8f74d8f14d30506a497670a91cda4e6a";

weatherForm.addEventListener("submit",async event => {

    event.preventDefault();
    const city = cityInput.value;
    if(city) {
        try{
            const WeatherData = await WeatherData(city);
            displayWeatherInfo(WeatherData)
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
        
    } else {
        displayError("please enter a city");
    }

})

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    
    if(!response.ok) {
        throw new Error("could not fetch weather")
    }

    return await response.json();
}   

function displayWeatherInfo(data){
    console.log(data);
}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("error");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
    
}