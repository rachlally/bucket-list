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
    })


}
getApi()
