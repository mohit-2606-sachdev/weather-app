var button = document.getElementById('btn');
var city = document.getElementById('location');
var temprature = document.getElementById('temp');
var cityName = document.getElementById('cN');
var humid = document.getElementById('humidity');
var windS = document.getElementById('windspeed');
var descrip = document.getElementById('text');


function myFunction() { 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=ed5cedd3aa4f57edff11475dbf474e88`).then((response)=>response.json()).then((data)=>{
        var nameValue = city.value;
        var tempValue = data.main.temp;
        var humidValue = data.main.humidity;
        var windSValue = data.wind.speed;
        var descripValue = data.weather[0].description;
        var iconcode = data.weather[0].icon;
        // var iconurl = ;
        temprature.innerHTML = tempValue +"°C";
        cityName.innerHTML = nameValue;
        humid.innerHTML = "Humidity : " +humidValue+ "%";
        windS.innerHTML = "Wind-Speed: "+windSValue+"km/h";
        descrip.innerHTML = descripValue;
        document.getElementById('wicon').src="http://openweathermap.org/img/wn/"+iconcode+"@2x.png";
        
    });
} 
