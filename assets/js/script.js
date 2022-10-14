//Global Variables
var btn = document.getElementById("btn");
var activity = document.getElementById("activity");

var bucketInput = document.querySelector("#bucket-input");
var bucketForm = document.querySelector("#bucket-list-form");
var bucketList = document.querySelector("#bucket-list");

var bucket = [];
   
var saveBucketButton1 = $('#bucketButton1');
var saveBucketButton2 = $('#bucketButton2');
var saveBucketButton3 = $('#bucketButton3');
var saveBucketButton4 = $('#bucketButton4');

<<<<<<< HEAD
//Function to render new Bucket List Items to the page
function renderBucket(){
    bucketList.innerHTML = "";
    
    for(var i=0; i < bucket.length; i++) {
        var item = bucket[i];
        var li = document.createElement("li");
        li.textContent = item;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "I did it!";

        li.appendChild(button);
        bucketList.appendChild(li);
    }
}

function saveBucket (){
    localStorage.setItem("Bucket Ideas", JSON.stringify(bucket));
}

bucketForm.addEventListener("submit", function (event){
    event.preventDefault();

    var bucketText = bucketInput.value.trim();
    if (bucketText === ""){
        return;
    }

    bucket.push(bucketText);
    bucketInput.value = "";

    renderBucket();
    saveBucket();
})
=======
// Google Maps APi
//AIzaSyD7wWUU2e0wjZ__Ds9BAWzuFFU19QhHLMI
>>>>>>> dev

// Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.031 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
function initMap() {}
$(()=> {
    initMap = function(){
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat:47.602 , lon:-122.335}
            
        })
    }
})

//Save activity input from user, on click, to local storage:
saveBucketButton1.on("click", function () {
    var bucketActivity1 = $("#freeform1");
    var bucketTitle1 = $("#title1");
    console.log(bucketActivity1);
    console.log(bucketTitle1);
    localStorage.setItem("Bucket List 1", JSON.stringify (bucketActivity1.val()));
    localStorage.setItem("Bucket List Title 1", JSON.stringify (bucketTitle1.val()));
})

saveBucketButton2.on("click", function () {
    var bucketActivity2 = $("#freeform2");
    var bucketTitle2 = $("#title2");
    console.log(bucketActivity2);
    console.log(bucketTitle2);
    localStorage.setItem("Bucket List 2", JSON.stringify (bucketActivity2.val()));
    localStorage.setItem("Bucket List Title 2", JSON.stringify (bucketTitle2.val()));
})

saveBucketButton3.on("click", function () {
    var bucketActivity3 = $("#freeform3");
    var bucketTitle3 = $("#title3");
    console.log(bucketActivity3);
    console.log(bucketTitle3);
    localStorage.setItem("Bucket List 3", JSON.stringify (bucketActivity3.val()));
    localStorage.setItem("Bucket List Title 3", JSON.stringify (bucketTitle3.val()));
})

saveBucketButton4.on("click", function () {
    var bucketActivity4 = $("#freeform4");
    var bucketTitle4 = $("#title4");
    console.log(bucketActivity4);
    console.log(bucketTitle4);
    localStorage.setItem("Bucket List 4", JSON.stringify (bucketActivity4.val()));
    localStorage.setItem("Bucket List Title 4", JSON.stringify (bucketTitle4.val()));
})

//Render saved activity to page upon refresh
function inIt () {
    $("#freeform1").val(JSON.parse(localStorage.getItem("Bucket List 1")));
    $("#freeform2").val(JSON.parse(localStorage.getItem("Bucket List 2")));
    $("#freeform3").val(JSON.parse(localStorage.getItem("Bucket List 3")));
    $("#freeform4").val(JSON.parse(localStorage.getItem("Bucket List 4")));
    $("#title1").val(JSON.parse(localStorage.getItem("Bucket List Title 1")));
    $("#title2").val(JSON.parse(localStorage.getItem("Bucket List Title 2")));
    $("#title3").val(JSON.parse(localStorage.getItem("Bucket List Title 3")));
    $("#title4").val(JSON.parse(localStorage.getItem("Bucket List Title 4")));
}
inIt()

//Bored API Fetch function
function getApi(event) {
    
     console.log(activity.value)
     var requestUrl = 'https://www.boredapi.com/api/activity';
     fetch(requestUrl)
         .then(function(response) {
         return response.json();
     })
     .then(function(data) {
        event.preventDefault()
         console.log(data)
         activity.textContent = data.activity
         
     })
 }
 getApi()
 //Fill My Bucket button to generate event for user
 btn.addEventListener("click", getApi)
 
 
// const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': 'ec9e8aa11bmsh01afb5356f556dep1d5473jsn3185f0830ed0',
//           'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
//       }
//   };
 
//   var locationString = "The Showbox";
 
//   fetch("https://trueway-places.p.rapidapi.com/FindPlaceByText?text=" + locationString + "&language=en", options)
//       .then(function(response) {
//       return response.json();
 
//   })
//       .then(function(data) {
//       console.log(data)
//       console.log(data.results[0].name);
//       console.log(data.results[0].website);
//   })

// document.querySelector("#files").addEventListener("change", (e) => {
//     if(window.File && window.FileReader && window.FileList && window.Blob){
//         const files = e.target.files;
//         const output = document.querySelector("#result");

//         for (let i= 0; i < files.length; i++){
//             if(!files[i].type.match("image")) continue;
//             const picReader = new FileReader();
//             picReader.addEventListener("load", function(event){
//                 const picFile = event.target;
//                 const div = document.createElement("div");
//                 div.innerHTML = '<img class="thumbnail" src="$(picFile.result)" + title="(picFile.name)"/>';
//                 output.appendChild(div);
//             });
//             picReader.readAsDataURL(files[i]);
//         }

//     } else {
//         alert("Your browser does not support the File API")
//     }
// });


// Google Maps APi
//AIzaSyD7wWUU2e0wjZ__Ds9BAWzuFFU19QhHLMI
// function initMap(){
//     const seattle = { lat:47.608, lng:-122.335};
//     const map = new google.Map(document.getElementById("map"),{
//         zoom: 4,
//         center: seattle,
//     });
// }

// const marker = new google.maps.Marker({
//     position: seattle,
//     map: map,
// });


// window.initMap = initMap;