let searchBtn = document.getElementById("searchbtn");
let searchBar = document.getElementById("searchbar");
let temp;
let weatherDescription;
let maxTemp = document.getElementById("tempMax");
let description = document.getElementById("description");
let city = document.getElementById("city");

GetWeatherData("Paris");
searchbtn.addEventListener('click',()=>{
    let location = `${searchBar.value}`;
    
    GetWeatherData(location);
    
});

async function GetWeatherData(location){
    weather = fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=a0a56053415cd2354338eb10e89d0fd6',{mode: 'cors'})
    .then(function(response){
        return response.json()
    })
    .then(function(response){

        city.innerHTML = location;
        temp = response.main.temp_max;
        weatherDescription = response.weather[0].description;
        maxTemp.innerHTML = Math.round(temp - 273.15);
        description.innerHTML = weatherDescription;
        
    })
       
    
}

