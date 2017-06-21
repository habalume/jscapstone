var div = document.getElementById("number");
var button = document.getElementById("roll");

var myPix = new Array("images/3day.jpg" ,"images/emailchallenge.jpg" ,
"images/ruby.png" ,"images/stout.jpg" ,
"images/css.png" ,"images/grad.jpg" ,"images/sass.png" ,
"images/bourbon.jpg" ,"images/heroku.png" ,"images/peewithdennis.jpg" ,"images/challenge.jpg" ,
"images/html.jpg" ,"images/sleep.jpg" ,
"images/bootstrap.jpg" ,"images/heroku.png" ,"images/jail.jpg" ,
"images/rails.png" ,"images/cookncode.png" ,"images/download.png" ,
"images/dom.jpg" ,"images/scapi.jpg");
var arrSQ = new Array(25);

button.onclick = function() {
  var result = dice.roll();
  printNum(result);
  changeSquare(result);
};

function printNum(number) {
  div.innerHTML = number;
}

dice = {
  sides: 25,
  roll: function() {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}

function changeSquare(sqNum) {
  var divStr = "div" + sqNum;
  var rand = Math.floor(Math.random() * myPix.length)
  var randPic = myPix[rand];
  arrSQ[sqNum - 1] = randPic;
  var imgUrl = "url('" + randPic + "')"

  document.getElementById(divStr).style.backgroundImage = imgUrl;
  document.getElementById(divStr).style.backgroundSize = "200px 200px";
  
  // check squares for two consecutive matches
  for(var i = 0; i < arrSQ.length - 1; i++) {
    if((arrSQ[i] !== undefined) && (arrSQ[i] === arrSQ[i+1])) {
        document.getElementById("roll").disabled = true;
        alert("You win! Squares " + String(i + 1) + " and " + String(i + 2) + " are the same!")
    }
  }
  
}