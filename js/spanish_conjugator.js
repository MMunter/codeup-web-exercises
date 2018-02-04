//functions for all regular verb endings and tenses
function conjugateErPresentTense (string) {
    var yo = "Yo " + string + "o\n";
    var nos = "Nosotros " + string +"emos\n";
    var tu = "Tú " + string + "es\n";
    var ud = "Usted " + string + "e\n";
    var uds = "Ustedes " + string + "en";
    return yo + nos + tu + ud + uds;
}

function conjugateErPastTense (string) {
    var yo = "Yo " + string + "í\n";
    var nos = "Nosotros " + string + "imos\n";
    var tu = "Tú " + string + "iste\n";
    var ud = "Usted " + string + "ió\n";
    var uds = "Ustedes " + string + "ieron";
    return yo + nos + tu + ud + uds;
}

function conjugateErFutureTense (string) {
    var yo = "Yo " + string + "eré\n";
    var nos = "Nosotros " + string + "eremos\n";
    var tu = "Tú " + string + "erás\n";
    var ud = "Usted " + string + "erá\n";
    var uds = "Ustedes " + string + "erán";
    return yo + nos + tu + ud + uds;
}

function conjugateArPresentTense (string) {
    var yo = "Yo " + string + "o\n";
    var nos = "Nosotros " + string + "amos\n";
    var tu = "Tú " + string + "as\n";
    var ud = "Usted " + string + "a\n";
    var uds = "Ustedes " + string + "an";
    return yo + nos + tu + ud + uds;
}

function conjugateArPastTense (string) {
    var yo = "Yo " + string + "e\n";
    var nos = "Nosotros " + string + "amos\n";
    var tu = "Tú " + string + "aste\n";
    var ud = "Usted " + string + "o\n";
    var uds = "Ustedes " + string + "aron";
    return yo + nos + tu + ud + uds;
}

function conjugateArFutureTense (string) {
    var yo = "Yo " + string + "are\n";
    var nos = "Nosotros " + string + "aremos\n";
    var tu = "Tú " + string + "aras\n";
    var ud = "Usted " + string + "ara\n";
    var uds = "Ustedes " + string + "aran";
    return yo + nos + tu + ud + uds;
}

function conjugateIrPresentTense (string) {
    var yo = "Yo " + string + "o\n";
    var nos = "Nosotros " + string + "imos\n";
    var tu = "Tú " + string + "es\n";
    var ud = "Usted " + string + "e\n";
    var uds = "Ustedes " + string + "en";
    return yo + nos + tu + ud + uds;
}

function conjugateIrPastTense (string) {
    var yo = "Yo " + string + "í\n";
    var nos = "Nosotros " + string + "imos\n";
    var tu = "Tú " + string + "iste\n";
    var ud = "Usted " + string + "ió\n";
    var uds = "Ustedes " + string + "ieron";
    return yo + nos + tu + ud + uds;
}

function conjugateIrFutureTense (string) {
    var yo = "Yo " + string + "iré\n";
    var nos = "Nosotros " + string + "iremos\n";
    var tu = "Tú " + string + "irás\n";
    var ud = "Usted " + string + "irá\n";
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

//prompting user for verb and tense
var verb = prompt("Enter a Spanish verb to be conjugated.");
verb = verb.toLowerCase();

while (!(verbErTest(verb)) && !(verbArTest(verb)) && !(verbIrTest(verb))) {
    verb = prompt("Please enter a valid verb.");
}
var tense = prompt("Would you like past, present, or future tense?");
tense = tense.toLowerCase();

while(tense != "past" && tense != "present" && tense != "future") {
    tense = prompt("Please enter a valid tense.");
}


//tests to see which verb ending & tense is needed
if (verbErTest(verb) && (tense == "past")) {
    verb = verb.substring(0, verb.length - 2);
    document.write(conjugateErPastTense(verb));
}
else if (verbErTest(verb) && (tense =="present")) {
    verb = verb.substring(0, verb.length - 2);
    document.write(conjugateErPresentTense(verb));
}
else if (verbErTest(verb) && (tense == "future")) {
    verb = verb.substring(0, verb.length - 2);
    document.write(conjugateErFutureTense(verb));
}
else if (verbIrTest(verb) && (tense == "past")) {
    verb = verb.substring(0, verb.length - 2);
    document.write(conjugateIrPastTense(verb));
}
else if (verbIrTest(verb) && (tense == "present")) {
    verb = verb.substring(0, verb.length - 2);
    document.write(conjugateIrPresentTense(verb));
}
else if (verbIrTest(verb) && (tense == "future")) {
    verb = verb.substring(0, verb.length - 2);
    document.write(conjugateIrFutureTense(verb));
}
else if (verbArTest(verb) && (tense == "past")) {
    verb = verb.substring(0, verb.length - 2);
    document.write(conjugateArPastTense(verb));
}
else if (verbArTest(verb) && (tense == "present")) {
    verb = verb.substring(0, verb.length - 2);
    document.write(conjugateArPresentTense(verb));
}
else if (verbArTest(verb) && (tense == "future")) {
    verb = verb.substring(0, verb.length - 2);
   document.write(conjugateArFutureTense(verb));
}
