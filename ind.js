var buttoncolor = ["red", "green", "blue", "yellow"];
gs = [];
userclick = [];
var level = 0;
var st = 0;

// for starting of game
$(document).keypress(function() {
  if (!st) {
    st = 1;
    $("h1").html("Level " + level);
    nxt();

  }
})

//after clicking on a button
$(".btn").click(function() {
  if (st === 0) {
    $("h1").text("Press a key");
  } else {
    var col = $(this).attr("id");
    userclick.push(col);
    sound(col);
    if (col == gs.pop())
      setTimeout(nxt, 250);
    else {


      st = 0;
      level=0;
      sound("wrong");
      $("h1").text("You lost! Now push any key to restart the Game.");
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over")
      }, 1000);

    }
  }
});

// choosing next color randomly
function nxt() {
  level++;
  $("h1").html("Level " + level);
  var ind = (Math.floor(Math.random() * 4));
  gs.push(buttoncolor[ind]);
  $("#" + buttoncolor[ind]).fadeIn(100).fadeOut(100).fadeIn(100);
  var af = "sounds/" + buttoncolor[ind] + ".mp3"; //selecting audio file
  var t = new Audio(af);
  t.play();
}

//sound and animation for a color
function sound(color) {

  var af = "sounds/" + color + ".mp3"; //selecting audio file
  var t = new Audio(af);
  t.play();
  var ce = "#" + color; //choosen color/element
  $(ce).addClass("pressed");

  setTimeout(function() {

    $(ce).removeClass("pressed");
  }, 50);

} // sound and animation
