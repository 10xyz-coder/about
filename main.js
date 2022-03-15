console.log("Welcome there, young coder!");
console.log("You've Discovered the Console!");

function clickpic()
{
  console.log("You've clicked my Profile Pic!");
  if (document.getElementById("profilepic").src == "assets/COVIDICON.png")
  {
    document.getElementById("profilepic").innerHTML = "assets/icon.png";
  }
  else
  {
    document.getElementById("profilepic").innerHTML = "assets/COVIDICON.png";
  }
}

function spider_game()
{
  var elem = document.getElementById("spider_game")
  document.getElementById("spider_game").style.display = "inline"
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function spider_game_hide()
{
  document.getElementById("spider_game").style.display = "none"
}
