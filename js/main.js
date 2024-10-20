//User puts on city 
//City is converted to Lat and Long
//Lay and Long are used to find weather 
//Convert weather from Kelvin to Fahrenheit
//Display it in the browser 

document.querySelector('button').addEventListener('click', getWeather)


function getWeather(){
    let userInput = document.querySelector('input').value 
    console.log(userInput)

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=f533d736867e80b8ca476c54bef1ba65`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=f533d736867e80b8ca476c54bef1ba65`)
        .then(response => response.json())
        .then(dataTwo => {
            console.log(dataTwo)
            console.log(dataTwo.main.temp)
            let temperature = dataTwo.main.temp
            temperature = Math.round((temperature - 273.15) * 1.8 + 32)
            console.log(temperature)
            document.querySelector('h2').innerText = temperature
        })
        .catch(err => {
            console.log(`error ${err}`)
        })   
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })


// °F = (K − 273.15) × 1.8 + 32
}
