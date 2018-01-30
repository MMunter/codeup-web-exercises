function dayOfTheWeekStartsWithT(day){
  var tDay = day.toLowerCase();
  if (tDay === "tuesday" || tDay === "thursday") {
    return true;
  }
  else {
      return false;
  }
}
console.log(dayOfTheWeekStartsWithT("Friday"));

//Alternate version of above function
//function dayOfTheWeekStartsWithT(day){
    //return day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday";
//}



function isValidPassword(password){
    if (password.length < 6) {
        return "Password is not long enough.";
    }
    else if (!password.match(/\d/)) {
        return "Add a number";
    }
    // else if (!password.match(/^[A-Z]$/)) {
    //     return "Add an uppercase letter."
    // }
}


