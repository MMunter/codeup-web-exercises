document.getElementsByTagName("body")[0].style.backgroundColor = "red";

//functions for all regular verb endings and tenses
function conjugateErPresentTense (string) {
    var yo = "Yo " + string + "o<br>";
    var nos = "Nosotros " + string +"emos<br>";
    var tu = "Tú " + string + "es<br>";
    var ud = "Usted " + string + "e<br>";
    var uds = "Ustedes " + string + "en";
    return yo + nos + tu + ud + uds;
}

function conjugateErPastTense (string) {
    var yo = "Yo " + string + "í<br>";
    var nos = "Nosotros " + string + "imos<br>";
    var tu = "Tú " + string + "iste<br>";
    var ud = "Usted " + string + "ió<br>";
    var uds = "Ustedes " + string + "ieron";
    return yo + nos + tu + ud + uds;
}

function conjugateErFutureTense (string) {
    var yo = "Yo " + string + "eré<br>";
    var nos = "Nosotros " + string + "eremos<br>";
    var tu = "Tú " + string + "erás<br>";
    var ud = "Usted " + string + "erá<br>";
    var uds = "Ustedes " + string + "erán";
    return yo + nos + tu + ud + uds;
}

function conjugateArPresentTense (string) {
    var yo = "Yo " + string + "o<br>";
    var nos = "Nosotros " + string + "amos<br>";
    var tu = "Tú " + string + "as<br>";
    var ud = "Usted " + string + "a<br>";
    var uds = "Ustedes " + string + "an";
    return yo + nos + tu + ud + uds;
}

function conjugateArPastTense (string) {
    var yo = "Yo " + string + "é<br>";
    var nos = "Nosotros " + string + "amos<br>";
    var tu = "Tú " + string + "aste<br>";
    var ud = "Usted " + string + "ó<br>";
    var uds = "Ustedes " + string + "aron";
    return yo + nos + tu + ud + uds;
}

function conjugateArFutureTense (string) {
    var yo = "Yo " + string + "aré<br>";
    var nos = "Nosotros " + string + "aremos<br>";
    var tu = "Tú " + string + "arás<br>";
    var ud = "Usted " + string + "ará<br>";
    var uds = "Ustedes " + string + "arán";
    return yo + nos + tu + ud + uds;
}

function conjugateIrPresentTense (string) {
    var yo = "Yo " + string + "o<br>";
    var nos = "Nosotros " + string + "imos<br>";
    var tu = "Tú " + string + "es<br>";
    var ud = "Usted " + string + "e<br>";
    var uds = "Ustedes " + string + "en";
    return yo + nos + tu + ud + uds;
}

function conjugateIrPastTense (string) {
    var yo = "Yo " + string + "í<br>";
    var nos = "Nosotros " + string + "imos<br>";
    var tu = "Tú " + string + "iste<br>";
    var ud = "Usted " + string + "ió<br>";
    var uds = "Ustedes " + string + "ieron";
    return yo + nos + tu + ud + uds;
}

function conjugateIrFutureTense (string) {
    var yo = "Yo " + string + "iré<br>";
    var nos = "Nosotros " + string + "iremos<br>";
    var tu = "Tú " + string + "irás<br>";
    var ud = "Usted " + string + "irá<br>";
    var uds = "Ustedes " + string + "irán";
    return yo + nos + tu + ud + uds;
}

//functions testing for verb endings
function verbErTest (string) {
    return string.endsWith("er");
}

function verbIrTest(string) {
    return string.endsWith("ir");
}

function verbArTest(string) {
    return string.endsWith("ar");
}

//function prompting user for verb and tense then tests to see which verb ending & tense is needed
 function testVerbs () {
     var verb = document.getElementById("verb").value;
     verb = verb.toLowerCase();

     var tense = document.getElementById("tense").value;
     tense = tense.toLowerCase();


     if (verbErTest(verb) && (tense == "past")) {
         verb = verb.substring(0, verb.length - 2);
         document.getElementById("demo").innerHTML = (conjugateErPastTense(verb));
     }
     else if (verbErTest(verb) && (tense == "present")) {
         verb = verb.substring(0, verb.length - 2);
         document.getElementById("demo").innerHTML = (conjugateErPresentTense(verb));
     }
     else if (verbErTest(verb) && (tense == "future")) {
         verb = verb.substring(0, verb.length - 2);
         document.getElementById("demo").innerHTML = (conjugateErFutureTense(verb));
     }
     else if (verbIrTest(verb) && (tense == "past")) {
         verb = verb.substring(0, verb.length - 2);
         document.getElementById("demo").innerHTML = (conjugateIrPastTense(verb));
     }
     else if (verbIrTest(verb) && (tense == "present")) {
         verb = verb.substring(0, verb.length - 2);
         document.getElementById("demo").innerHTML = (conjugateIrPresentTense(verb));
     }
     else if (verbIrTest(verb) && (tense == "future")) {
         verb = verb.substring(0, verb.length - 2);
         document.getElementById("demo").innerHTML = (conjugateIrFutureTense(verb));
     }
     else if (verbArTest(verb) && (tense == "past")) {
         verb = verb.substring(0, verb.length - 2);
         document.getElementById("demo").innerHTML = (conjugateArPastTense(verb));
     }
     else if (verbArTest(verb) && (tense == "present")) {
         verb = verb.substring(0, verb.length - 2);
         document.getElementById("demo").innerHTML = (conjugateArPresentTense(verb));
     }
     else if (verbArTest(verb) && (tense == "future")) {
         verb = verb.substring(0, verb.length - 2);
         document.getElementById("demo").innerHTML = (conjugateArFutureTense(verb));
     }
     else {
         document.getElementById("demo").innerHTML = "Please enter a valid verb and tense.";
     }

 }

 document.getElementById("submit").addEventListener("click", testVerbs);