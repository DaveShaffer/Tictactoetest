$(document).ready(function() {

var $gameCell = $('.cell');

  $($gameCell).one('click', function() {
    //console.log("Board click");
    console.log(this.id);
  })
  console.log("standing by");
});

