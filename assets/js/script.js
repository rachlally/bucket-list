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

document.querySelector("#files").addEventListener("change", (e) => {
    if(window.File && window.FileReader && window.FileList && window.Blob){
        const files = e.target.files;
        const output = document.querySelector("#result");

        for (let i= 0; i < files.length; i++){
            if(!files[i].type.match("image")) continue;
            const picReader = new FileReader();
            picReader.addEventListener("load", function(event){
                const picFile = event.target;
                const div = document.createElement("div");
                div.innerHTML = '<img class="thumbnail" src="$(picFile.result)" + title="(picFile.name)"/>';
                output.appendChild(div);
            });
            picReader.readAsDataURL(files[i]);
        }

    } else {
        alert("Your browser does not support the File API")
    }
});