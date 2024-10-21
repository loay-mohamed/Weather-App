// https://api.weatherapi.com/v1/forecast.json?key=ab665c02dc384b38902150930242803&q=london&days=3
var searchInput = document.getElementById("searchInput")
var wheatherData ;
async function getData(key) {
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=434be724386247a8846110215241610&q=${key}2&days=7`)
    var finaldata= await response.json()
    return finaldata
    
}

async function startApp(key) {
    wheatherData = await getData(key);
    console.log(wheatherData);
    
    todayData()
    tomorrowData()
    aftertomorrowData()
}
function todayData() {
    let date =new Date(wheatherData.location.localtime)


    document.getElementById("day").innerHTML=date.toLocaleDateString('en-us',{weekday:'long'})
    document.getElementById("Month").innerHTML=date.toLocaleDateString('en-us',{weekday:'short'})
    document.getElementById("date").innerHTML=date.getDate()
    document.getElementById("city").innerHTML = wheatherData.location.name
    document.getElementById("degree").innerHTML= wheatherData.current.temp_c +'°C'
    document.getElementById("weatherCondition").innerHTML= wheatherData.current.condition.text 
    document.getElementById("humidity").innerHTML= wheatherData.current.wind_mph +'%'
    document.getElementById("winds").innerHTML= wheatherData.current.wind_kph +'km/h'
    document.getElementById("weatherTrend").innerHTML= wheatherData.current.wind_dir 
    document.getElementById("todayImg").setAttribute("src","https:"+wheatherData.current.condition.icon)
}
function tomorrowData() {
    let date = new Date(wheatherData.forecast.forecastday[1].date)
    
    document.getElementById('tommorowday').innerHTML = date.toLocaleDateString('en-US',{weekday:'long'})
    document.getElementById("maxTemperature").innerHTML = wheatherData.forecast.forecastday[1].day.maxtemp_c+'°C'
    document.getElementById("minTemperature").innerHTML= wheatherData.forecast.forecastday[1].day.mintemp_c+'°C'
    document.querySelector('.degree .forecast-icon img').setAttribute('src','https:'+wheatherData.forecast.forecastday[1].day.condition.icon)
    document.querySelector('.tomorrow .forecast-body .weatherCondition').innerHTML=wheatherData.forecast.forecastday[1].day.condition.text
}
function aftertomorrowData() {
    let date = new Date(wheatherData.forecast.forecastday[2].date)

    document.getElementById('Aftertomorrowday').innerHTML = date.toLocaleDateString('en-US',{weekday:'long'})
    document.getElementById("AftertomorrowmaxTemperature").innerHTML = wheatherData.forecast.forecastday[2].day.maxtemp_c+'°C'
    document.getElementById("AftertomorrowminTemperature").innerHTML= wheatherData.forecast.forecastday[2].day.mintemp_c+'°C'
    document.getElementById('afterimage').setAttribute('src','https:'+wheatherData.forecast.forecastday[2].day.condition.icon)
    document.getElementById('AftertomorrowweatherCondition').innerHTML=wheatherData.forecast.forecastday[2].day.condition.text
}





searchInput.addEventListener("keyup",function () {
    startApp(searchInput.value)
    
    
})