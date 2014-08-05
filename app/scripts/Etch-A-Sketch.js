$(document).ready(function() {

var board = document.getElementById('game-board');


var cols = 14;
var rows = cols;

var wdthpre = 100 / cols;

var wdth = Math.round(wdthpre * 100) / 100;


function Create2DArray(rows) {
  var matr = [];

  for (var i = 0; i < rows; i++) {
    matr[i] = [];
  }

  return matr;
}

var matr = new Create2DArray(rows);

for(var j = 0; j < rows; j++) {
  var br = document.createElement('br');

  for(var k = 0; k < cols - 1; k++) {

    matr[j][k] = document.createElement('foo');

    matr[j][k].style.width = wdth + '%';


    board.appendChild(matr[j][k]);

    matr[j][k].style.height = wdth + '%';
  }

    board.appendChild(br);
}

$('foo').hover(function() {
  $(this).addClass('hover');
});



});
