// let xmlhttp;
// console.log("onLogin");
// if (window.XMLHttpRequest) {
//   //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//   xmlhttp = new XMLHttpRequest();
// } else {
//   // IE6, IE5 浏览器执行代码
//   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }
// xmlhttp.onreadystatechange = function () {
//   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//     console.log(xmlhttp.responseText);
//   }
// };
// let username = document.getElementById("username").value;
// let password = document.getElementById("password").value;
// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   xmlhttp.open("POST", "localhost:7777/api/user/register", true);
//   //   xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
//   xmlhttp.send("username=" + username + "password=" + password);
// });

// httpRequest.open("GET", "http://www.example.org/some.file", true);
// httpRequest.send();

var httpRequest;

let btn = document.querySelector("button");

console.log(btn);

btn.addEventListener("click", makeRequest);

function makeRequest() {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert("Giving up :( Cannot create an XMLHTTP instance");
    return false;
  }
  httpRequest.onreadystatechange = alertContents;

  httpRequest.open("POST", "localhost:7777/api/user/register", true);
  httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
  //   httpRequest.setRequestHeader("Origin", "http://127.0.0.1:5500/");
  httpRequest.send("username=" + username + "&password=" + password);

  //   httpRequest.open("GET", "http://localhost:7777/api/user");
  //   httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      alert(httpRequest.responseText);
    } else {
      alert("There was a problem with the request.");
    }
  }
}
