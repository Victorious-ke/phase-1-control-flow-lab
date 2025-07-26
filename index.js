
function scuberGreetingForFeet(distance) {

  let result
  if (distance <= 400) {
    result = "This one is on me!";
  }
  else if (distance > 400 && distance <= 2000) {
    result = "That will be twenty bucks.";
  }
  else if (distance > 2000 && distance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  }
  else {
    result = "No can do!"
  }
  return result
}


function ternaryCheckCity(nameOfCity) {
  let result
  if (nameOfCity = "NYC") {
    result = "Ok, sounds good"
  }
  else {
    result = "No go."
  }
  return result
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
