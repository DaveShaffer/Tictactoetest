$(document).ready(function() {

var $gameCell = $('.cell');
var moves = Array(9).join(".").split(".");
var count = 0;

  $($gameCell).one('click', function() {
    // console.log("Board click");
    // console.log(this.id);
    count++;
    moves[this.id] = this.id;

    moves[this.id] = (count % 2) ? 'X' : 'O';

    console.log(moves, count);


  })
  console.log("standing by");
});

