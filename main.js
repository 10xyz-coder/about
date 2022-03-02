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
