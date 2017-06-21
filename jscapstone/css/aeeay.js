var images = 
"images/3day.jpg" ,
"images/emailchallenge.jpg" .
"images/ruby.png" ,
"images/stout.jpg" ,
"images/css.png" ,
"images/grad.jpg" ,
"images/sass.png" ,
"images/bourbon.jpg" ,
"images/heroku.png" ,
"images/peewithdennis.jpg" ,
"images/challenge.jpg" ,
"images/html.jpg" ,
"images/sleep.jpg" ,
"images/bootstrao.jpg" ,
"images/heroku.png" ,
"images/jail.jpg" ,
"images/rails.png" ,
"images/cookncode.png" ,
"images/download.png" ,
"images/dom.jpg" ,
"images/scapi.jpg" ,
window.onload = choosePic;

var myPix = new Array("images/lion.jpg","images/tiger.jpg","images/bear.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}
