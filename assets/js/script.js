var local = ["a", "b", "c", "d"]
var myJSON = JSON.stringify(local)
localStorage.setItem("testJSON", myJSON)

let text = localStorage.getItem("testJSON")
let obj = JSON.parse(text);
document.getElementById.("what")innerHTML = obj;
