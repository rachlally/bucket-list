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

//save bucket list items to local storage
function saveBucket (){
    localStorage.setItem("Bucket Ideas", JSON.stringify(bucket));
}

//retrieves bucket item from storage, renders to page
function bucketInIt (){

    var savedBucketItems = JSON.parse(localStorage.getItem("Bucket Ideas"));
    if(savedBucketItems !== null){
        bucket = savedBucketItems;
    }
    renderBucket();
}

//user presses enter, bucket item saved to list
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

//click event on bucket list items to finish task
bucketList.addEventListener("click", function(event){
    var complete = event.target;
    if (complete.matches("button") === true) {
        var index = complete.parentElement.getAttribute("data-index");
        bucket.splice(index, 1);

        saveBucket();
        renderBucket();
    }
})

//Save scrapbook activity input from user, on click, to local storage:
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

//functions to keep storage on page after refresh:
inIt()
bucketInIt()

//Bored API Fetch function
function getApi(event) {
    event.preventDefault()
    //  console.log(activity.value)
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
 
 //Fill My Bucket button to generate event for user
 btn.addEventListener("click", getApi)
 

