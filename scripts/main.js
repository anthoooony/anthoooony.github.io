var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/snowleopard.jpg') {
      myImage.setAttribute ('src','images/moresnows.jpg');
    } else {
      myImage.setAttribute ('src','images/snowleopard.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Snow leopards pretty, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Snow leopards pretty, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}