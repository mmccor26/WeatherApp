let searchBtn = document.getElementById("searchbtn");
let searchBar = document.getElementById("searchbar");
let temp;
let weatherDescription;
let maxTemp = document.getElementById("tempMax");
let description = document.getElementById("description");
searchbtn.addEventListener('click',()=>{
    let location = `${searchBar.value}`;
    console.log(location);
    weather = fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=a0a56053415cd2354338eb10e89d0fd6',{mode: 'cors'})
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response);
        console.log(response.main.temp_max)
        console.log(response.weather[0].description)
        temp = response.main.temp_max;
        weatherDescription = response.weather[0].description;
        maxTemp.innerHTML = temp;
        description.innerHTML = weatherDescription;
        
    })
    
});

async function GetWeatherData(location){
        let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=a0a56053415cd2354338eb10e89d0fd6',{mode: 'cors'});
    
        let data = await response.json()
        
        return data;
    
}

function ProcessJSON(json){
    
}