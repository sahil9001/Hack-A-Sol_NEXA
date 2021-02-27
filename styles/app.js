$(window).on("load", function () {
  $("#preloader").fadeOut();
  $("#status").delay(350).fadeOut();
});

//$(function(){
//    new WOW.init();
//});

/*$(window).on('load', function() {
    $("#vaccinateWorld").addClass("animated fadeInDown");
});
//$(window).on('load', function() {
//    $("#boxNo1").addClass("animated slideInLeft");
//});
$(window).on('load', function() {
//    $("#boxNo1").addClass("animated slideInLeft");
    $('#boxNo1').scrolla({
    mobile: true,
    once: true
});
});*/

document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("I just ran!");
    const webcamElement = document.getElementById("webcam");
    const canvasElement = document.getElementById("canvas");
    const snapSoundElement = document.getElementById("snapSound");
    const webcam = new Webcam(
      webcamElement,
      "user",
      canvasElement,
      snapSoundElement
    );
    function startWebcam() {
      webcam
        .start()
        .then((result) => {
          console.log("webcam started");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    function takeSnap() {
      let picture = webcam.snap();
      document.querySelector("#download-photo").href = picture;
    }

    function flipCamera() {
      $("#cameraFlip").click(function () {
        webcam.flip();
        webcam.start();
      });
    }

    function stopWebcam() {
      webcam.stop();
    }

    document.getElementById("button1").onclick = startWebcam;
    document.getElementById("button2").onclick = takeSnap;
    document.getElementById("button3").onclick = stopWebcam;
  },
  false
);

/*
var token_ // variable will store the token
var userName = "clientID"; // app clientID
var passWord = "secretKey"; // app clientSecret
var caspioTokenUrl = "https://xxx123.caspio.com/oauth/token"; // Your application token endpoint  
var request = new XMLHttpRequest(); 

function getToken(url, clientID, clientSecret) {
    var key;           
    request.open("POST", url, true); 
    request.setRequestHeader("Content-type", "application/json");
    request.send("grant_type=client_credentials&client_id="+clientID+"&"+"client_secret="+clientSecret); // specify the credentials to receive the token on request
    request.onreadystatechange = function () {
        if (request.readyState == request.DONE) {
            var response = request.responseText;
            var obj = JSON.parse(response); 
            key = obj.access_token; //store the value of the accesstoken
            token_ = key; // store token in your global variable "token_" or you could simply return the value of the access token from the function
        }
    }
}
*/
/************************************************* login html ***************************************/
var host = "Hard-Coder05.github.io/NEXA-VaxU/";
function trylogin() {
  var _token;
  var userName = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var urlToHit =
    "https://cors-anywhere.herokuapp.com/http://20.198.3.123:80/api/users/vacc/login/";
  var request = new XMLHttpRequest();

  function getToken(urlToHit, email, password) {
    var key;
    request.open("POST", urlToHit, true);
    request.setRequestHeader("Content-type", "application/json");
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 202) {
        var response = request.responseText;
        var obj = JSON.parse(response);
        console.log(obj);
        key = obj.token;
        localStorage.setItem("token", key);
        console.log("token is : " + key);
        success(userName);
      }
      /*else{
                        alert("Error : " + request.readyState);
                    }*/
    };
    var data = {
      email: email,
      password: password,
    };
    console.log(data);
    request.send(JSON.stringify(data));
    console.log(request.status);
    console.log("Hi");
  }
  //request.withCredentials = true;
  getToken(urlToHit, userName, password);
}
function success(userName) {
  curr_url = location.href;
  location.href = "http://" + host + "/dashboard.html";
  document.getElementById("user_name").innerHTML = userName;
  console.log("Hi");
}

function logout() {
  localStorage.removeItem("token");
}
/**************************************** dashboard html  *******************************/
const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const snapSoundElement = document.getElementById("snapSound");
const webcam = new Webcam(
  webcamElement,
  "user",
  canvasElement,
  snapSoundElement
);
function startWebcam() {
  webcam
    .start()
    .then((result) => {
      console.log("webcam started");
    })
    .catch((err) => {
      console.log(err);
    });
}
function takeSnap() {
  let picture = webcam.snap();
  document.querySelector("#download-photo").href = picture;
}

function flipCamera() {
  $("#cameraFlip").click(function () {
    webcam.flip();
    webcam.start();
  });
}
function submit() {
  var canvas = document.getElementById("canvas");
}

function stopWebcam() {
  webcam.stop();
}
var urlToHit =
  "https://cors-anywhere.herokuapp.com/http://20.198.3.123/api/core/";
var request = new XMLHttpRequest();
var token = localStorage("token");
request.open("GET", urlToHit, true);
request.setRequestHeader("Content-type", "application/json");
request.setRequestHeader("Authorization", token);
request.onreadystatechange = function () {
  if (request.readyState == 4 && request.status == 200) {
    var response = request.responseText;
    var obj = JSON.parse(response);
    document.getElementById("vaccinesLeft").innerHTML = obj.vaccines_available;
    document.getElementById("priceOfVaccine").innerHTML = obj.price;
    document.getElementById("availablityStatus").innerHTML = obj.is_available;
  }
};
request.send();
