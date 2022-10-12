console.log("linked")
$('#textarea1').val('New Text');
M.textareaAutoResize($('#textarea1'));



function getApi() {
    var requestUrl = 'https://www.boredapi.com/api/activity';

    fetch(requestUrl)
        .then(function(response) {
        return response.json();

    })
    .then(function(data) {
        console.log(data)
        console.log(data.activity);
    })


}
getApi()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec9e8aa11bmsh01afb5356f556dep1d5473jsn3185f0830ed0',
		'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
	}
};

var locationString = "The Showbox";

fetch("https://trueway-places.p.rapidapi.com/FindPlaceByText?text=" + locationString + "&language=en", options)
    .then(function(response) {
    return response.json();

})
    .then(function(data) {
    console.log(data)
    console.log(data.results[0].name);
    console.log(data.results[0].website);
})



