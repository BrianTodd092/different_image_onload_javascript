var time = new Date();
var d = time.getHours();
var greeting;




 if (d > 18)  {
     greeting = document.getElementById('a').style.display = 'block';
}

 else if (d > 12) {
     greeting = document.getElementById('b').style.display = 'block';
}
 else if ((d > 0) && (d < 7)){
     greeting = document.getElementById('c').style.display = 'block';
}
 
 else if ( d > 6) {
       greeting = document.getElementById('d').style.display = 'block';
}

else { greeting=""; }


document.image = greeting;
