var btn = document.getElementById("btn")
var activity = document.getElementById("activity")

function getApi(event) {
    console.log(activity.value)
    var requestUrl = 'https://www.boredapi.com/api/activity';

    fetch(requestUrl)
        .then(function(response) {
        return response.json();

    })
    .then(function(data) {
        console.log(data)
        activity.textContent = data.activity
    })


}
getApi()
btn.addEventListener("click", getApi)
git 