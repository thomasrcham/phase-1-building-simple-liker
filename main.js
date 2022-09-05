// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeButton = document.getElementsByClassName('like')
let heart = document.querySelectorAll('li span')

for (let i = 0; i < likeButton.length; i++){
  likeButton[i].addEventListener('click', (e) => {
    fetchAnswer(i);
    })
}

function changeHeart (heartNumber) {
  console.log('change')
  if (heart[heartNumber].hasAttribute('flag')) {
    heart[heartNumber].setAttribute('class','like-glyph');
    heart[heartNumber].removeAttribute('flag')
  } else {
      heart[heartNumber].setAttribute('class','activated-heart');
      heart[heartNumber].setAttribute('flag','1');
    }
}

function fetchAnswer (heartNumber) {
  // console.log(`clicked ${heartNumber}`)
  mimicServerCall()
    .then(res => {
      changeHeart(heartNumber)})
    .catch(err => {
      errorMessageOn();
      setTimeout(errorMessageOff, 3000);
      console.log('fail')})
}

function checkResponse (res) {
  if (res === true) {
    console.log('yay')
  } else {console.log ('booo')}
}

function errorMessageOn (){
  document.querySelector('body div').setAttribute('class', 'visible')
}

function errorMessageOff (){
  document.querySelector('body div').setAttribute('class', 'hidden')
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve();
      }
    }, 300);
  });
  
}
