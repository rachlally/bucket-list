var url = `https://developers.pinterest.com/pinterest-api@pinterest.com`

function getcords(event){
    event.preventDefault()
    console.log(seachedcity.value)
var city = seachedcity.value
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b6a175dbcda214328767ec5bb50e19a1`

fetch(url).then(response=>{
    console.log(response)
    return response.json()
}) .then(data =>{
    
    console.log(data)
    cityname.textContent = data.name
})
}   